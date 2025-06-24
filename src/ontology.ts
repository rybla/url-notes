import { z } from "genkit";

export type Note = z.infer<typeof Note>;
export const Note = z.object({
  url: z.string().url(),
  abstract: z.optional(
    z.string().describe("A summary of the content at the URL."),
  ),
  commentary: z.optional(
    z.string().describe("Additional commentary about the content at the URL."),
  ),
});
