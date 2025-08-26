import * as fs from "fs/promises";
import path from "path";

// input
const dirpath_feed = path.join("input", "feed");
// output-1
const dirpath_new_article = path.join("output-1", "new", "article");
const dirpath_new_article_metadata = path.join(
  "output-1",
  "new",
  "article_metadata",
);

const dirpath_ignored_article = path.join("output-1", "ignored", "article");
const dirpath_ignored_article_metadata = path.join(
  "output-1",
  "ignored",
  "article_metadata",
);
const dirpath_article = path.join("output-1", "old", "article");
const dirpath_article_metadata = path.join(
  "output-1",
  "old",
  "article_metadata",
);

// output-2
const dirpath_article_content = path.join("output-2", "article_content");
const dirpath_article_summary = path.join("output-2", "article_summary");
const dirpath_article_tags = path.join("output-2", "article_tags");

export const paths = {
  // external files
  filepaths_articleUrlLists: [
    "/Users/henry/Library/Mobile\ Documents/com\~apple\~CloudDocs/url-notes/article_urls.txt",
  ],
  filepaths_feedLists: [
    "/Users/henry/Library/Mobile\ Documents/com\~apple\~CloudDocs/url-notes/feeds.txt",
  ],
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
  dirpath_new_article,
  dirpath_new_article_metadata,
  dirpath_ignored_article,
  dirpath_ignored_article_metadata,
  dirpath_article,
  dirpath_article_metadata,
  dirpath_article_content,
  dirpath_article_summary,
  dirpath_article_tags,
  async get_articleIds_new(): Promise<string[]> {
    return (
      await fs.readdir(dirpath_new_article, {
        encoding: "utf8",
        recursive: false,
      })
    ).flatMap((fn) =>
      fn.endsWith(".json") ? [path.basename(fn, ".json")] : [],
    );
  },
  filepath_article_new(articleId: string) {
    return path.join(dirpath_new_article, `${articleId}.json`);
  },
  filepath_article_new_metadata(articleId: string) {
    return path.join(dirpath_new_article_metadata, `${articleId}.json`);
  },
  filepath_articleIds_ignored: path.join("output-1", "articleIds_ignored.json"),
  filepath_article_ignored(articleId: string) {
    return path.join(dirpath_ignored_article, `${articleId}.json`);
  },
  filepath_article_ignored_metadata(articleId: string) {
    return path.join(dirpath_ignored_article_metadata, `${articleId}.json`);
  },
  filepath_article(articleId: string) {
    return path.join(dirpath_article, `${articleId}.json`);
  },
  filepath_article_metadata(articleId: string) {
    return path.join(dirpath_article_metadata, `${articleId}.json`);
  },
  async get_articleIds(): Promise<string[]> {
    return (
      await fs.readdir(dirpath_article, { encoding: "utf8", recursive: false })
    ).flatMap((fn) =>
      fn.endsWith(".json") ? [path.basename(fn, ".json")] : [],
    );
  },
  filepath_article_content(articleId: string) {
    return path.join(dirpath_article_content, `${articleId}.md`);
  },
  filepath_article_summary(articleId: string) {
    return path.join(dirpath_article_summary, `${articleId}.md`);
  },
  filepath_article_tags(articleId: string) {
    return path.join(dirpath_article_tags, `${articleId}.csv`);
  },
};

export default paths;
