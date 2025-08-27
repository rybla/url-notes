import { makeConsole } from "@/analysis/console";
import { getFeeds } from "@/analysis/feed";
import { readTextFile, writeJsonFile, writeTextFile } from "@/analysis/file";
import { RssFeedConfig } from "@/analysis/ontology";
import paths from "@/analysis/paths";
import { jsonify } from "@/analysis/utility";
import filenamify from "filenamify";
import path from "path";
const { error, log } = makeConsole({ __filename });

// -----------------------------------------------------------------------------

const feeds_old: RssFeedConfig[] = await getFeeds();
const feedUrls_old = new Set(feeds_old.map((cfg) => cfg.feedUrl));
const feeds: RssFeedConfig[] = [];

for (const filepath_feedList of paths.filepaths_feedLists) {
  const feedList = await readTextFile(filepath_feedList);
  if (feedList === null) {
    error(`Failed to read feed list file: ${filepath_feedList}`);
    continue;
  }

  const feeds_strings = feedList.split("\n").flatMap((s) => {
    s = s.trim();
    return s.length > 0 ? [s] : [];
  });
  for (const feed_string of feeds_strings) {
    const feed_data = jsonify(feed_string);
    if (feed_data === null) {
      error(`Failed to parse feed config: ${feed_string}`);
      continue;
    }
    const feed_result = RssFeedConfig.safeParse(feed_data);
    if (!feed_result.success) {
      error(`Invalid feed config: ${feed_string}`);
      continue;
    }
    if (feedUrls_old.has(feed_result.data.feedUrl)) {
      log(`Feed already exists: ${feed_result.data.feedUrl}`);
      continue;
    }
    log(`Adding feed "${feed_result.data.name}": ${feed_result.data.feedUrl}`);
    feeds.push(feed_result.data);
  }

  // erase
  await writeTextFile(filepath_feedList, "");
}

for (const feed of feeds) {
  await writeJsonFile(
    path.join(
      paths.dirpath_feed,
      `${filenamify(feed.name.replaceAll(" ", "-"))}.feed.json`,
    ),
    feed,
  );
}
