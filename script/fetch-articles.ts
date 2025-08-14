import { fetchArticle } from "@/analysis/article";
import { cacheJson } from "@/analysis/cache";
import { makeConsole } from "@/analysis/console";
import { fetchFeed } from "@/analysis/feed";
import { readJsonFile } from "@/analysis/file";
import { Article, ArticleMetadata, RssFeedConfig } from "@/analysis/ontology";
import paths from "@/analysis/paths";
import { do_, formatDate, normString } from "@/analysis/utility";
import filenamifyUrl from "filenamify-url";
import z from "zod";
const { error, log } = makeConsole({ __filename });

// -----------------------------------------------------------------------------

const articleIds_ignored = new Set(
  ...(await cacheJson(
    paths.filepath_articleIds_ignored,
    z.array(z.string()),
    async () => [],
  )),
);

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
// log(show({ feeds }));

for (const feed of feeds) {
  try {
    log(`fetching articles from feed: ${feed.config.name}`);

    for (const item of feed.rss.items.slice(0, feed.config.maxItems)) {
      try {
        log(`fetching article from feed item link: ${item.link}`);

        const url = item.link;
        if (!url) continue;

        const articleId = filenamifyUrl(url);
        if (articleIds_ignored.has(articleId)) continue;

        log(`fetching article at url: ${url}`);

        const article = await cacheJson(
          paths.filepath_article(articleId),
          Article,
          async () => {
            const article = await fetchArticle(url);
            if (!article) return null;
            // fill in some extra info from the feed item

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

            return article;
          },
        );
        if (!article) continue;

        const metadata = await cacheJson(
          paths.filepath_article_metadata(articleId),
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
        if (!metadata) continue;
      } catch (e: unknown) {
        error(e);
      }
    }
  } catch (e: unknown) {
    error(e);
  }
}

// -----------------------------------------------------------------------------

process.exit(0);
