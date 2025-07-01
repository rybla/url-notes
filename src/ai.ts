import googleAI from "@genkit-ai/googleai";
import { genkit, z } from "genkit";

export const ai = genkit({
  plugins: [googleAI()],
  model: googleAI.model("gemini-2.5-flash"),
});

export const generateMetadataOfArticle = ai.defineFlow(
  {
    name: "generateMetadataOfArticle",
    inputSchema: z.object({
      url: z.string().url(),
      content: z.string(),
    }),
    outputSchema: z.object({
      abstract: z.string(),
      tags: z.array(z.string()),
    }),
  },
  async (input) => {
    const res = await ai.generate({
      prompt: [
        {
          text: `
Write an abstract and a list of tags for the following article:

${input.content}
`.trim(),
        },
      ],

      output: {
        schema: z.object({
          abstract: z
            .string()
            .describe(
              "A concise abstract that outlines all key aspects of the article.",
            ),
          tags: z
            .array(
              z
                .string()
                .describe(
                  "A single categorization tag. An ideal tag is a single word or concise phrase.",
                ),
            )
            .describe("A list of tags that categorize the article's content."),
        }),
      },
    });
    if (res.output === null)
      throw new Error(`generateMetadataOfArticle failed: ${input.url}`);
    return {
      abstract: res.output.abstract,
      tags: res.output.tags.map((tag) => tag.toLowerCase()),
    };
  },
);
