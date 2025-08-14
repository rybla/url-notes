import { ollama } from "@/analysis/ai";
import { fetchArticle, readArticle } from "@/analysis/article";
import { cacheJson } from "@/analysis/cache";
import { makeConsole } from "@/analysis/console";
import { fetchFeed } from "@/analysis/feed";
import { readJsonFile, writeJsonFile } from "@/analysis/file";
import { Article, ArticleMetadata, RssFeedConfig } from "@/analysis/ontology";
import paths from "@/analysis/paths";
import { do_, formatDate, normString, trim } from "@/analysis/utility";
import filenamifyUrl from "filenamify-url";
import z from "zod";
const { error, log } = makeConsole({ __filename });

// -----------------------------------------------------------------------------

const keywords_focused = (
  await readJsonFile(paths.filepath_keywords_focused, z.array(z.string()))
)?.data;
if (!keywords_focused)
  throw new Error(`Failed to read ${paths.filepath_keywords_focused}`);

const topics_focused = (
  await readJsonFile(paths.filepath_topics_focused, z.array(z.string()))
)?.data;
if (!topics_focused)
  throw new Error(`Failed to read ${paths.filepath_topics_focused}`);

const articleIds_ignored = new Set(
  ...(await cacheJson(
    paths.filepath_articleIds_ignored,
    z.array(z.string()),
    async () => [],
  )),
);

const articleIds = await paths.get_articleIds();

for (const articleId of articleIds) {
  const article = await readArticle(articleId);
  if (!article) continue;

  let shouldKeep = false;

  //

  if (
    keywords_focused.find(
      (kw) =>
        articleId.toLowerCase().includes(kw.toLowerCase()) ||
        article?.title?.toLowerCase().includes(kw.toLowerCase()),
    ) !== undefined
  )
    shouldKeep = true;

  const snippet =
    article.summary ?? article.title ?? article.content?.slice(0, 2500);
  if (snippet) {
    const response = await ollama.chat({
      model: "gemma3:12b",
      messages: [
        {
          role: "system",
          content: trim(`
The user will provide a snippet of text. Your task is to determine if that snippet is related to any of the following topics:
${topics_focused.map((topic) => `  - ${topic}`).join("\n")}
`),
        },
        { role: "user", content: `Text snippet:\n\n${snippet}` },
      ],
      format: {
        type: "object",
        properties: {
          isRelatedToTopics: { type: "boolean" },
        },
        required: ["isRelatedToTopics"],
      },
    });
    const { isRelatedToTopics } = z
      .object({ isRelatedToTopics: z.boolean() })
      .parse(JSON.parse(response.message.content));
    if (!isRelatedToTopics) shouldKeep = false;
  }

  //

  if (!shouldKeep) {
    log(`ignoring article: ${articleId}`);
    articleIds_ignored.add(articleId);
  }
}

await writeJsonFile(
  paths.filepath_articleIds_ignored,
  Array.from(articleIds_ignored),
);

// -----------------------------------------------------------------------------

process.exit(0);
