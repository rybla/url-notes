import { ollama } from "@/analysis/ai";
import { stringify } from "@/analysis/utility";

const response = await ollama.chat({
  // model: "gpt-oss:20b",
  model: "gemma3:12b",
  messages: [
    {
      role: "user",
      content: "Write a single sentence about bananas.",
    },
  ],
  format: {
    type: "object",
    properties: {
      sentence: { type: "string", description: "A single sentence." },
    },
    required: ["sentence"],
  },
  stream: false,
});

console.log(stringify(response.message));
// for await (const part of response) {
//   console.log(part);
// }
