import path from "path";
import * as fs from "fs/promises";
import { log } from "./console";

// input
const dirpath_feed = path.join("input", "feed");
// output-1
const dirpath_article = path.join("output-1", "article");
const dirpath_article_metadata = path.join("output-1", "article_metadata");
// output-2
const dirpath_article_content = path.join("output-2", "article_content");
const dirpath_article_summary = path.join("output-2", "article_summary");
const dirpath_article_tags = path.join("output-2", "article_tags");

export const paths = {
  // keywords
  filepath_keywords_focused: path.join("input", "keywords_focused.json"),
  filepath_topics_focused: path.join("input", "topics_focused.json"),
  // feed
  dirpath_feed,
  async get_filepaths_of_feeds(): Promise<string[]> {
    return (
      await fs.readdir(dirpath_feed, { encoding: "utf8", recursive: false })
    ).flatMap((fn) =>
      fn.endsWith(".feed.json") ? [path.join(dirpath_feed, fn)] : [],
    );
  },

  // article
  dirpath_article,
  dirpath_article_metadata,
  dirpath_article_content,
  dirpath_article_summary,
  dirpath_article_tags,
  async get_articleIds(): Promise<string[]> {
    log("[get_articleIds]");
    return (
      await fs.readdir(dirpath_article, { encoding: "utf8", recursive: false })
    ).flatMap((fn) =>
      fn.endsWith(".json") ? [path.basename(fn, ".json")] : [],
    );
  },
  filepath_articleIds_ignored: path.join("output-1", "articleIds_ignored.json"),
  filepath_article(id_article: string) {
    return path.join(dirpath_article, `${id_article}.json`);
  },
  filepath_article_metadata(id_article: string) {
    return path.join(dirpath_article_metadata, `${id_article}.json`);
  },
  filepath_article_content(id_article: string) {
    return path.join(dirpath_article_content, `${id_article}.md`);
  },
  filepath_article_summary(id_article: string) {
    return path.join(dirpath_article_summary, `${id_article}.md`);
  },
  filepath_article_tags(id_article: string) {
    return path.join(dirpath_article_tags, `${id_article}.csv`);
  },
};

export default paths;
