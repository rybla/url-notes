import { max_length_of_content_to_summarize } from "@/config";
import * as ai from "../ai";
import { Article } from "../ontology";

const config = {
  ai: true,
};

export async function generateSummary(
  article: Article,
  content: string,
): Promise<string | null> {
  const existingSummary = article.summary ?? article.excerpt;
  if (existingSummary !== undefined) return existingSummary;

  if (!config.ai) {
    return null;
  }

  const summary = (
    await ai.gemini(`
Write a very concise and technical bullet-point overview of the following ${content.length < max_length_of_content_to_summarize ? "article" : "article preview"}. Use markdown syntax. Respond with JUST the overview.

${content.slice(0, max_length_of_content_to_summarize)}
`)
  ).trim();
  if (summary.length === 0) return null;
  return summary;
}

export async function generateTags(
  article: Article,
  summary: string,
): Promise<string[] | null> {
  if (!config.ai) {
    const tags = article.tags;
    if (tags === undefined || tags.length === 0) return null;
    return tags;
  }

  const title = article.title;
  const tags = (
    await ai.gemini(
      `
Consider the following article summary. Your task is to come up with the tags that best categorize the content. You may use many tags with varying degrees of specificity. Respond with JUST the comma-separated list of tags.

${title ? `Summary of "${title}":` : "Summary:"}

${summary}
`,
      { model: "gemini-2.5-flash" },
    )
  )
    .split(",")
    .map((s) => s.trim().toLowerCase());
  if (
    tags.length === 0 &&
    (article.tags === undefined || article.tags.length === 0)
  )
    return null;
  return tags.concat(article.tags ?? []);
}
