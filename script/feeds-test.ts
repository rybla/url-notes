import { log } from "@/analysis/console";
import { fetchFeed } from "@/analysis/feed";
import { readJsonFile } from "@/analysis/file";
import { RssFeedConfig } from "@/analysis/ontology";
import { do_, show } from "@/analysis/utility";

const feed = await fetchFeed(
  await do_(async () => {
    const result = await readJsonFile(
      "input/feed/hackernews-top.feed.json",
      RssFeedConfig,
    );
    if (!result) throw new Error("Failed to read RssFeedConfig JSON file");
    if (!result.success)
      throw new Error(
        `Failed to parse RssFeedConfig JSON file: ${result.error}`,
      );
    return result.data;
  }),
);
log(show({ feed }));
const urls_articles = feed.rss.items.map((item) => item.link);
log(show({ urls_articles }));
