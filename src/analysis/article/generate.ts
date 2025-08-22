import { max_length_of_content_to_summarize } from "@/config";
import * as ai from "../ai";
import { Article } from "../ontology";
import { error } from "../console";
import * as config from "@/config";
import { jsonify, trim } from "../utility";
import z from "zod";

export type GenerateResult<A> =
  | { type: "ok"; value: A }
  | { type: "error"; broken: boolean };

export async function generateSummary(
  article: Article,
  content: string,
): Promise<GenerateResult<string>> {
  const existingSummary = article.summary ?? article.excerpt;
  if (existingSummary !== undefined)
    return { type: "ok", value: existingSummary };

  if (config.skip_ai) {
    return { type: "error", broken: false };
  }

  const summary_result = await ai.gemini(`
Write a very concise and technical bullet-point overview of the following ${content.length < max_length_of_content_to_summarize ? "article" : "article preview"}. Use markdown syntax. Respond with JUST the overview.

${content.slice(0, max_length_of_content_to_summarize)}
`);
  if (summary_result.type === "error") {
    error("error when generating summary:", summary_result.reason);
    if (summary_result.reason === "exhausted") {
      return { type: "error", broken: true };
    }
    return { type: "error", broken: false };
  }
  const summary = summary_result.content.trim();
  if (summary.length === 0) return { type: "error", broken: false };
  return { type: "ok", value: summary };
}

export async function generateTags(
  article: Article,
  summary: string,
): Promise<GenerateResult<string[]>> {
  if (config.skip_ai) {
    const tags = article.tags;
    if (tags === undefined) return { type: "error", broken: false };
    return { type: "ok", value: tags };
  }

  const title = article.title;

  const method = "gemma" as "gemini" | "gemma";
  if (method === "gemini") {
    const tags_result = await ai.gemini(
      `
Consider the following article summary. Your task is to come up with the tags that best categorize the content. You may use many tags with varying degrees of specificity. Respond with JUST the comma-separated list of tags.

${title ? `Summary of "${title}":` : "Summary:"}

${summary}
`,
      { model: "gemini-2.5-flash" },
    );
    if (tags_result.type === "error") {
      if (tags_result.reason === "exhausted")
        return { type: "error", broken: true };
      return { type: "error", broken: false };
    }

    const tags = tags_result.content
      .split(",")
      .map((s) => s.trim().toLowerCase())
      .filter((s) => s.length > 1);
    return { type: "ok", value: tags.concat(article.tags ?? []) };
  } else if (method === "gemma") {
    const response = await ai.ollama.chat({
      model: "gemma3:12b",
      messages: [
        {
          role: "system",
          content: trim(`
You are an assistant for writing the tags that best organizes pieces of written content. You may use many tags with varying degrees of specificity. The user will provide a summary of some written content. Write the tags for the content based on the summary.`),
        },
        {
          role: "user",
          content: trim(`
${title ? `Summary of "${title}":` : "Summary:"}

${summary}
          `),
        },
      ],
      keep_alive: "5m",
      format: { type: "array", items: { type: "string" } },
    });
    const content = response.message.content;
    const content_data = jsonify(content);
    if (content_data === null) return { type: "error", broken: false };
    const tags_zodResult = z.array(z.string()).safeParse(content_data);
    if (!tags_zodResult.success) return { type: "error", broken: false };
    const tags = tags_zodResult.data
      .map((s) => s.trim().toLowerCase())
      .filter((s) => s.length > 1);
    return { type: "ok", value: tags.concat(article.tags ?? []) };
  } else {
    return { type: "error", broken: false };
  }
}
