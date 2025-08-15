import { ollama } from "@/analysis/ai";
import { readArticle_new } from "@/analysis/article";
import { cacheJson } from "@/analysis/cache";
import { makeConsole } from "@/analysis/console";
import { renameFile, writeJsonFile } from "@/analysis/file";
import { Article } from "@/analysis/ontology";
import paths from "@/analysis/paths";
import { trim } from "@/analysis/utility";
import z from "zod";
const { error, log } = makeConsole({ __filename });

// -----------------------------------------------------------------------------

function getSample(article: Article): string {
  if (article.title) {
    if (article.summary) {
      return trim(`
# ${article.title}

${article.summary}
`);
    } else if (article.textContent && article.textContent.length < 2500) {
      return trim(`
# ${article.title}

${article.textContent}
`);
    } else if (article.textContent) {
      return trim(`
URL: ${article.title}

Snippet:

${article.textContent.slice(0, 2500)}

...
`);
    } else {
      return trim(`
URL: ${article.url!}
Title: ${article.title}
`);
    }
  } else {
    if (article.summary) {
      return trim(`
URL: ${article.url}

Summary:

${article.summary}
`);
    } else if (article.textContent && article.textContent.length < 2500) {
      return trim(`
URL: ${article.url}

Content:

${article.textContent}
`);
    } else if (article.textContent) {
      return trim(`
URL: ${article.url}

Snippet:

${article.textContent.slice(0, 2500)}

...
`);
    } else {
      return `URL: ${article.url!}`;
    }
  }
}

async function checkIfShouldKeepArticle(article: Article): Promise<boolean> {
  if (!article.rssFeedConfig) return true;

  if (article.rssFeedConfig.filters) {
    const filters = article.rssFeedConfig.filters;

    const sample = getSample(article);

    if (filters.keywords) {
      if (
        filters.keywords
          .concat(filters.topics ?? [])
          .find((kw) => sample?.toLowerCase().includes(kw.toLowerCase()))
      ) {
        log(
          `Keeping article ${article.title ?? article.url} because it included one of the keywords`,
        );
        return true;
      }
    }

    if (filters.topics) {
      const messages = [
        {
          role: "system",
          content: trim(`
The user will provide some sample content from an article. Your task is to determine if it is related to any of the following topics:
${filters.topics.map((topic) => `  - ${topic}`).join("\n")}
Respond just a single word:
  - if the sample is related to any of the topic listed above, respond with "true"
  - otherwise, respond with "false"
`),
        },
        { role: "user", content: sample },
      ];
      const response = await ollama.chat({
        model: "gemma3:12b",
        messages: messages,
        keep_alive: "5m",
        format: { type: "boolean" },
      });
      if (response.message.content === "true") {
        log(
          `Keeping article ${article.title ?? article.url} because it is related to one of the topics`,
        );
        return true;
      }
    }
  } else {
    return true;
  }

  return false;
}

const articleIds_ignored = new Set(
  await cacheJson(
    paths.filepath_articleIds_ignored,
    z.array(z.string()),
    async () => [],
  ),
);

const articleIds = await paths.get_articleIds_new();

for (const articleId of articleIds) {
  log(`Filtering article: ${articleId}`);
  const article = await readArticle_new(articleId);
  if (!article) {
    log(`Bad article: ${articleId}`);
    try {
      await renameFile(
        paths.filepath_article_new(articleId),
        paths.filepath_article_ignored(articleId),
      );
      await renameFile(
        paths.filepath_article_new_metadata(articleId),
        paths.filepath_article_ignored_metadata(articleId),
      );
    } catch (e: unknown) {
      error(`Error when renaming bad article files: ${e}`);
    }
    continue;
  }
  const shouldKeep = await checkIfShouldKeepArticle(article);
  if (!shouldKeep) {
    log(`Ignoring article: ${articleId}`);
    articleIds_ignored.add(articleId);
    try {
      await renameFile(
        paths.filepath_article_new(articleId),
        paths.filepath_article_ignored(articleId),
      );
      await renameFile(
        paths.filepath_article_new_metadata(articleId),
        paths.filepath_article_ignored_metadata(articleId),
      );
    } catch (e: unknown) {
      error(`Error when renaming ignored article files: ${e}`);
    }
    continue;
  }

  log(`Keeping article: ${articleId}`);
  try {
    await renameFile(
      paths.filepath_article_new(articleId),
      paths.filepath_article(articleId),
    );
    await renameFile(
      paths.filepath_article_new_metadata(articleId),
      paths.filepath_article_metadata(articleId),
    );
  } catch (e: unknown) {
    error(`Error when renaming kept article files: ${e}`);
  }
}

await writeJsonFile(
  paths.filepath_articleIds_ignored,
  Array.from(articleIds_ignored),
);

// -----------------------------------------------------------------------------

process.exit(0);
