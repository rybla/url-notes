import {
  generateSummary,
  generateTags,
  getMarkdownContent,
} from "@/analysis/article";
import { cacheText } from "@/analysis/cache";
import { makeConsole } from "@/analysis/console";
import { readJsonFile } from "@/analysis/file";
import { Article } from "@/analysis/ontology";
import paths from "@/analysis/paths";
import { do_ } from "@/analysis/utility";
const { log, error } = makeConsole({ __filename });

// -----------------------------------------------------------------------------

const ids_articles = await paths.get_ids_of_articles();
for (const id_article of ids_articles) {
  try {
    log(`processing article: ${id_article}`);

    const article = await do_(async () => {
      const result = await readJsonFile(
        paths.filepath_article(id_article),
        Article,
      );
      if (!result) throw new Error(`Failed to read Article JSON file`);
      if (!result.success)
        throw new Error(`Failed to parse Article JSON file: ${result.error}`);
      return result.data;
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const content = await cacheText(
      paths.filepath_article_content(id_article),
      async () => await getMarkdownContent(article),
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const summary = await cacheText(
      paths.filepath_article_summary(id_article),
      async () => "mock summary",
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const tags = await cacheText(
      paths.filepath_article_tags(id_article),
      async () => ["mock_tag_1", "mock_tag_2", "mock_tag_3"].join(","),
    );
  } catch (e: unknown) {
    error(e);
  }
}

// -----------------------------------------------------------------------------

process.exit(0);
