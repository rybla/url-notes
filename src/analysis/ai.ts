import { execFile } from "child_process";
import { promisify } from "util";
import { error } from "./console";
import { Ollama } from "ollama";

// -----------------------------------------------------------------------------

const execFileAsync = promisify(execFile);

// -----------------------------------------------------------------------------

export const ollama = new Ollama({
  // host: "https://ollama.com",
  // headers: {
  //   Authorization: `Bearer ${process.env.OLLAMA_API_KEY}`,
  // },
});

export async function gemini(
  prompt: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  opts?: {
    model: "gemini-2.5-pro" | "gemini-2.5-flash";
  },
) {
  const { stdout, stderr } = await execFileAsync(
    `gemini`,
    [
      // opts?.model ? [`--model`, opts.model] : [],
      `--prompt`,
      prompt.trim(),
    ].flat(),
  );
  if (stderr.length > 0) error(stderr);
  let result = stdout;
  const prefix = "Loaded cached credentials.\n";
  if (result.startsWith(prefix)) result = result.slice(prefix.length);
  return result;
}
