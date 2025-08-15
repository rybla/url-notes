import { error } from "../console";
import { readJsonFile, readTextFile } from "../file";
import { Article, ArticleMetadata, ArticlePlus } from "../ontology";
import paths from "../paths";

export async function readArticle(articleId: string): Promise<Article | null> {
  const parseResult_article = await readJsonFile(
    paths.filepath_article(articleId),
    Article,
  );
  if (!parseResult_article) {
    error(`Failed to read article: ${articleId}`);
    return null;
  }
  if (!parseResult_article.data) {
    error(
      `Failed to parse article: ${articleId}\n${parseResult_article.error}`,
    );
    return null;
  }
  const article: Article = parseResult_article.data;
  return article;
}

export async function readArticle_new(
  articleId: string,
): Promise<Article | null> {
  const parseResult_article = await readJsonFile(
    paths.filepath_article_new(articleId),
    Article,
  );
  if (!parseResult_article) {
    error(`Failed to read article: ${articleId}`);
    return null;
  }
  if (!parseResult_article.data) {
    error(
      `Failed to parse article: ${articleId}\n${parseResult_article.error}`,
    );
    return null;
  }
  const article: Article = parseResult_article.data;
  return article;
}

export async function readArticleMetadata(
  articleId: string,
): Promise<ArticleMetadata | null> {
  const result = await readJsonFile(
    paths.filepath_article_metadata(articleId),
    ArticleMetadata,
  );
  if (!result) return null;
  return result.success ? result.data : null;
}

export async function readArticleContent(
  articleId: string,
): Promise<string | null> {
  return await readTextFile(paths.filepath_article_content(articleId));
}

export async function readArticleSummary(
  articleId: string,
): Promise<string | null> {
  return await readTextFile(paths.filepath_article_summary(articleId));
}

export async function readArticleTags(
  articleId: string,
): Promise<string[] | null> {
  const tags_string = await readTextFile(
    paths.filepath_article_tags(articleId),
  );
  if (!tags_string) return null;
  return tags_string.split(",").map((s) => s.trim());
}

export async function readArticlePlus(
  articleId: string,
): Promise<ArticlePlus | null> {
  const article = await readArticle(articleId);
  if (!article) return null;
  const metadata = await readArticleMetadata(articleId);
  if (!metadata) return null;
  const content = (await readArticleContent(articleId)) ?? undefined;
  const summary = (await readArticleSummary(articleId)) ?? undefined;
  const tags = (await readArticleTags(articleId)) ?? undefined;
  const articlePlus: ArticlePlus = {
    id: articleId,
    article,
    metadata,
    content,
    summary,
    tags,
  };
  return articlePlus;
}
