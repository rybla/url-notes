import { readTextFile } from "@/analysis/file";

const content = await readTextFile(
  "/Users/henry/Library/Mobile Documents/com~apple~CloudDocs/url-notes/article_urls.txt",
);
console.log(content);
