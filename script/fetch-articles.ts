import { fetchArticle } from "@/analysis/article/fetch";
import { cacheJson } from "@/analysis/cache";
import { makeConsole } from "@/analysis/console";
import { fetchFeed } from "@/analysis/feed";
import {
  readJsonFile,
  readTextFile,
  writeJsonFile,
  writeTextFile,
} from "@/analysis/file";
import { Article, ArticleMetadata, RssFeedConfig } from "@/analysis/ontology";
import paths from "@/analysis/paths";
import { do_, formatDate, normString } from "@/analysis/utility";
import filenamifyUrl from "filenamify-url";
import { Item } from "rss-parser";
import z from "zod";
const { error, log } = makeConsole({ __filename });

// -----------------------------------------------------------------------------

const articleIds_ignored = new Set(
  await cacheJson(
    paths.filepath_articleIds_ignored,
    z.array(z.string()),
    async () => [],
  ),
);

const articleIds_old = new Set(await paths.get_articleIds());

// -----------------------------------------------------------------------------

type DoArticleResult = "success" | "failed" | "ignored" | "old";

async function doArticle(
  url: string,
  feedItem?: {
    item: Item;
    config: RssFeedConfig;
  },
): Promise<DoArticleResult> {
  const articleId = filenamifyUrl(url);
  log(`Processing article: ${articleId}`);
  if (articleIds_ignored.has(articleId)) {
    log(`Ignoring url: ${articleId}`);
    return "ignored";
  }
  if (articleIds_old.has(articleId)) {
    log(`Skipping old url: ${articleId}`);
    return "old";
  }

  const article = await cacheJson(
    paths.filepath_article_new(articleId),
    z.nullable(Article),
    async () => {
      const article = await fetchArticle(url);
      if (!article) return null;

      if (feedItem) {
        const { item, config } = feedItem;
        article.title =
          normString(article.title) ?? normString(item.title) ?? url;
        article.summary =
          normString(item.summary) ??
          normString(article.excerpt) ??
          normString(item.contentSnippet);
        article.tags =
          article.tags?.map((tag) => tag.toLowerCase()) ??
          item.categories?.map((category) => category.toLowerCase()) ??
          [];
        article.publishedTime = article.publishedTime ?? item.pubDate;
        article.rssFeedConfig = config;
      }

      return article;
    },
  );
  if (!article) {
    log("Failed to fetch article for url:", articleId);
    return "failed";
  }

  const metadata = await cacheJson(
    paths.filepath_article_new_metadata(articleId),
    ArticleMetadata,
    async () => {
      const d = new Date();
      return {
        id: articleId,
        url,
        addedDate: formatDate(d),
        addedTime: d.getTime(),
        publishedTime: article.publishedTime,
        title: article.title,
      };
    },
  );
  if (!metadata) {
    log("Failed to fetch metadata for url:", articleId);
    return "failed";
  }

  return "success";
}

// -----------------------------------------------------------------------------
// fetch from articleUrlLists
// -----------------------------------------------------------------------------

for (const filepath_articleUrlList of paths.filepaths_articleUrlLists) {
  log(`Reading article urls from url list: ${filepath_articleUrlList}`);
  const urls_string = await readTextFile(filepath_articleUrlList);
  if (urls_string === null) {
    error(`Failed to read: ${filepath_articleUrlList}`);
    continue;
  }
  const urls = urls_string
    .split("\n")
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  const failed_urls = [];
  for (const url of urls) {
    const result = await doArticle(url);
    if (result === "failed") {
      failed_urls.push(url);
    }
  }
  log(
    `Failed to fetch articles for urls from url list: ${failed_urls.map((s) => `\n  - ${s}`).join()}`,
  );
  await writeTextFile(filepath_articleUrlList, failed_urls.join("\n"));
}

// -----------------------------------------------------------------------------
// fetch from feeds
// -----------------------------------------------------------------------------

const feeds = await Promise.all(
  (await paths.get_filepaths_of_feeds()).map(
    async (filepath_feed) =>
      await fetchFeed(
        await do_(async () => {
          const result = await readJsonFile(filepath_feed, RssFeedConfig);
          if (!result)
            throw new Error("Failed to read RssFeedConfig JSON file");
          if (!result.success)
            throw new Error(
              `Failed to parse RssFeedConfig JSON file: ${result.error}`,
            );
          return result.data;
        }),
      ),
  ),
);

for (const feed of feeds) {
  try {
    log(`Reading article urls from RSS feed: ${feed.config.name}`);

    for (const item of feed.rss.items.slice(0, feed.config.maxItems)) {
      try {
        log(`Reading article url from feed item link: ${item.link}`);

        const url = item.link;
        if (!url) continue;

        await doArticle(url, { item, config: feed.config });
      } catch (e: unknown) {
        error(`Failed to fetch article: ${item.link}\n${e}`);
      }
    }
  } catch (e: unknown) {
    error(e);
  }
}

// -----------------------------------------------------------------------------

await writeJsonFile(
  paths.filepath_articleIds_ignored,
  Array.from(articleIds_ignored),
);

// -----------------------------------------------------------------------------

process.exit(0);
