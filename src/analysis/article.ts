import { Readability } from "@mozilla/readability";
import { JSDOM } from "jsdom";
import TurndownService from "turndown";
import * as ai from "./ai";
import { readJsonFile, readTextFile } from "./file";
import { Article, ArticleMetadata, ArticlePlus } from "./ontology";
import paths from "./paths";

/**
 * Extracts an article from the HTML page at a given URL.
 *
 * @param url The URL of an HTML page.
 * @returns The {@link Article} extracted from the HTML page. If there was any error, returns null instead.
 */
export async function fetchArticle(url: string): Promise<Article | null> {
  try {
    const html = await (await fetch(url, { method: "GET" })).text();
    const doc = new JSDOM(html, { url });
    const reader = new Readability(doc.window.document);
    const prearticle = reader.parse();
    if (!prearticle) return null;
    const article = Object.entries(prearticle).reduce((acc, [key, value]) => {
      // @ts-expect-error Object.entries is not type-safe
      acc[key] = value === null ? undefined : value;
      return acc;
    }, {} as Article);
    article.url = url;
    return article;
  } catch {
    return null;
  }
}

/**
 * Transforms an article into a Markdown document.
 *
 * @param article The article to transform.
 * @returns The Markdown document as a string that corresponds to the input article.
 */
export async function getMarkdownContent(article: Article): Promise<string> {
  const turndownService = new TurndownService({ headingStyle: "atx" });
  let markdownString = "";
  const metadata: string[] = [];

  function escape(s: string): string {
    return s.replace(/"/g, '\\"');
  }

  // populate metadata
  if (article.title) {
    metadata.push(`title: "${escape(article.title)}"`);
  }
  if (article.byline) {
    metadata.push(`author: "${escape(article.byline)}"`);
  }
  if (article.siteName) {
    metadata.push(`siteName: "${escape(article.siteName)}"`);
  }
  if (article.publishedTime) {
    metadata.push(`pubDate: "${article.publishedTime}"`);
  }
  if (article.lang) {
    metadata.push(`lang: "${escape(article.lang)}"`);
  }
  if (article.tags && article.tags.length > 0) {
    metadata.push(`tags: "${article.tags.join(", ")}"`);
  }

  // write metadata
  if (metadata.length > 0) {
    markdownString += `---\n${metadata.join("\n")}\n---\n\n`;
  }

  if (article.title) {
    markdownString += `# ${article.title}\n\n`;
  }

  if (article.content) {
    markdownString += turndownService.turndown(article.content);
  } else if (article.textContent) {
    markdownString += article.textContent;
  } else if (article.summary) {
    markdownString += article.summary;
  } else if (article.excerpt) {
    markdownString += article.excerpt;
  }

  return markdownString.trim();
}

export async function generateSummary(content: string): Promise<string> {
  return await ai.gemini(`
Write a very concise and technical bullet-point overview of the following article. Use markdown syntax. Respond with JUST the overview.

${content.slice(0, 200000)}
`);
}

export async function generateTags(
  title: string | undefined,
  summary: string,
): Promise<string[]> {
  return (
    await ai.gemini(
      `
Consider the following article summary. Your task is to come up with the tags that best categorize the content. You may use many tags with varying degrees of specificity. Respond with JUST the comma-separated list of tags.

${title ? `Summary of "${title}":` : "Summary:"}

${summary}
`,
      { model: "gemini-2.5-flash" },
    )
  )
    .split(",")
    .map((s) => s.trim().toLowerCase());
}

export async function readArticle(id_article: string): Promise<Article | null> {
  const parseResult_article = await readJsonFile(
    paths.filepath_article(id_article),
    Article,
  );
  if (!parseResult_article) return null;
  if (!parseResult_article.data) return null;
  const article: Article = parseResult_article.data;
  return article;
}

export async function readArticleMetadata(
  id_article: string,
): Promise<ArticleMetadata | null> {
  const result = await readJsonFile(
    paths.filepath_article_metadata(id_article),
    ArticleMetadata,
  );
  if (!result) return null;
  return result.success ? result.data : null;
}

export async function readArticleContent(
  id_article: string,
): Promise<string | null> {
  return await readTextFile(paths.filepath_article_content(id_article));
}

export async function readArticleSummary(
  id_article: string,
): Promise<string | null> {
  return await readTextFile(paths.filepath_article_summary(id_article));
}

export async function readArticleTags(
  id_article: string,
): Promise<string[] | null> {
  const tags_string = await readTextFile(
    paths.filepath_article_tags(id_article),
  );
  if (!tags_string) return null;
  return tags_string.split(",").map((s) => s.trim());
}

export async function readArticlePlus(
  id_article: string,
): Promise<ArticlePlus | null> {
  const article = await readArticle(id_article);
  if (!article) return null;
  const metadata = await readArticleMetadata(id_article);
  if (!metadata) return null;
  const content = (await readArticleContent(id_article)) ?? undefined;
  const summary = (await readArticleSummary(id_article)) ?? undefined;
  const tags = (await readArticleTags(id_article)) ?? undefined;
  const articlePlus: ArticlePlus = {
    id: id_article,
    article,
    metadata,
    content,
    summary,
    tags,
  };
  return articlePlus;
}
