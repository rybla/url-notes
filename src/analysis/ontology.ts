/* eslint-disable @typescript-eslint/no-explicit-any */

import * as rss_parser from "rss-parser";
import z from "zod";
import { parseDate } from "./utility";

export const FuzzyDate = z.string().transform((s) => {
  const d = parseDate(s);
  if (!d) return s;
  return d;
});

export type Article = z.infer<typeof Article>;

export const Article = z.object({
  title: z.string().optional().describe("The title of the article"),
  content: z
    .string()
    .optional()
    .describe("The HTML string of processed article content"),
  textContent: z
    .string()
    .optional()
    .describe(
      "The text content of the article, with all the HTML tags removed",
    ),
  length: z
    .number()
    .optional()
    .describe("The length of an article, in characters"),
  excerpt: z
    .string()
    .optional()
    .describe("The article description, or short excerpt from the content"),
  byline: z.string().optional().describe("The author metadata"),
  dir: z.string().optional().describe("The content direction"),
  siteName: z.string().optional().describe("The name of the site"),
  lang: z.string().optional().describe("The content language"),
  publishedTime: FuzzyDate.optional().describe("The published time"),
  summary: z
    .string()
    .optional()
    .describe("A short summary of the article content"),
  tags: z
    .array(z.string())
    .optional()
    .describe("A list of categorizational tags for the article content"),
  url: z.url().optional().describe("The URL of the article"),
  rssFeedConfig: z.lazy(() => RssFeedConfig).optional(),
});

export type ArticleContent = z.infer<typeof ArticleContent>;
export const ArticleContent = z.string();

export type ArticleMetadata = z.infer<typeof ArticleMetadata>;
export const ArticleMetadata = z.object({
  id: z.string(),
  title: z.optional(z.string()),
  url: z.string(),
  addedDate: z.iso.date(),
  addedTime: z.number(),
  publishedTime: z.optional(FuzzyDate),
  rssFeedConfig: z.lazy(() => RssFeedConfig).optional(),
});

export type ArticleSummary = z.infer<typeof ArticleSummary>;
export const ArticleSummary = z.string();

export type ArticleTags = z.infer<typeof ArticleTags>;
export const ArticleTags = z.array(z.string());

// export type ArticlePlus = z.infer<typeof ArticlePlus>;
// export const ArticlePlus = z.object({
//   id: z.string(),
//   article: Article,
//   metadata: ArticleMetadata,
//   content: z.optional(ArticleContent),
//   summary: z.optional(ArticleSummary),
//   tags: z.optional(ArticleTags),
// });

export type ArticlePreview = {
  metadata: ArticleMetadata;
  summary?: ArticleSummary;
  tags?: ArticleTags;
};

/**
 * RSS feed config.
 *
 * Example:
 * ```json
 * {
 *   "name": "Hacker News Top",
 *   "feedUrl": "https://hnrss.org/best",
 *   "maxItems": 20
 * }
 * ```
 */
export type RssFeedConfig = z.infer<typeof RssFeedConfig>;
export const RssFeedConfig = z.object({
  name: z.string().nonempty(),
  feedUrl: z.url(),
  maxItems: z.optional(z.number().min(1)),
  filters: z.optional(
    z.object({
      keywords: z.optional(z.array(z.string())),
      topics: z.optional(z.array(z.string())),
    }),
  ),
});

/**
 * RSS feed.
 *
 * Example:
 * ```json
 * {
 *  items: [
 *    {
 *      creator: "rd",
 *      title: "GPT-5",
 *      link: "https://openai.com/gpt-5/",
 *      pubDate: "Thu, 07 Aug 2025 17:00:21 +0000",
 *      "dc:creator": "rd",
 *      comments: "https://news.ycombinator.com/item?id=44826997",
 *      content: "\n<p><a href=\"https://www.youtube.com/watch?v=0Uu_VJeVVfo\" rel=\"nofollow\">https://www.youtube.com/watch?v=0Uu_VJeVVfo</a></p>\n<hr>\n<p>Comments URL: <a href=\"https://news.ycombinator.com/item?id=44826997\">https://news.ycombinator.com/item?id=44826997</a></p>\n<p>Points: 1323</p>\n<p># Comments: 1583</p>\n",
 *      contentSnippet: "https://www.youtube.com/watch?v=0Uu_VJeVVfo\nComments URL: https://news.ycombinator.com/item?id=44826997\nPoints: 1323\n# Comments: 1583",
 *      guid: "https://news.ycombinator.com/item?id=44826997",
 *      isoDate: "2025-08-07T17:00:21.000Z",
 *    }
 *  ],
 *  feedUrl: "https://hnrss.org/best",
 *  paginationLinks: {
 *    self: "https://hnrss.org/best",
 *  },
 *  title: "Hacker News: Best",
 *  description: "Hacker News RSS",
 *  generator: "hnrss v2.1.1",
 *  link: "https://news.ycombinator.com/best",
 *  lastBuildDate: "Fri, 08 Aug 2025 00:04:01 +0000",
 *  docs: "https://hnrss.org/",
 * }
 * ```
 */
export type RssFeed = {
  config: RssFeedConfig;
  rss: rss_parser.Output<{ [key: string]: any }>;
};
