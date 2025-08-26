import RssParser from "rss-parser";
import { error } from "./console";
import { readJsonFile } from "./file";
import { RssFeed, RssFeedConfig } from "./ontology";
import paths from "./paths";

export async function fetchFeed(
  config: RssFeedConfig,
): Promise<RssFeed | null> {
  const rssParser = new RssParser();
  try {
    return {
      config,
      rss: await rssParser.parseURL(config.feedUrl),
    };
  } catch (e: unknown) {
    error(`Failed to fetch feed: ${config.feedUrl}`, e);
    return null;
  }
}

export async function getFeeds(): Promise<RssFeedConfig[]> {
  return await Promise.all(
    (await paths.get_filepaths_of_feeds()).map(async (filepath_feed) => {
      const result = await readJsonFile(filepath_feed, RssFeedConfig);
      if (!result) throw new Error("Failed to parse RssFeedConfig JSON file");
      if (!result.success)
        throw new Error(
          `Failed to parse RssFeedConfig JSON file: ${result.error}`,
        );
      return result.data;
    }),
  );
}
