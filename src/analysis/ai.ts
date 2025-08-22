import { execFile } from "child_process";
import { promisify } from "util";
import { error } from "./console";
import { Ollama } from "ollama";
import z from "zod";

// -----------------------------------------------------------------------------

const execFileAsync = promisify(execFile);

// -----------------------------------------------------------------------------

export const ollama = new Ollama({});

export type GeminiResult =
  | { type: "ok"; content: string }
  | { type: "error"; reason: "exhausted" | "unknown"; stderr: string };

export async function gemini(
  prompt: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  opts?: {
    model: "gemini-2.5-pro" | "gemini-2.5-flash";
  },
): Promise<GeminiResult> {
  try {
    const { stdout } = await execFileAsync(
      `gemini`,
      [
        // opts?.model ? [`--model`, opts.model] : [],
        `--prompt`,
        prompt.trim(),
      ].flat(),
    );
    let result = stdout;
    const prefix = "Loaded cached credentials.\n";
    if (result.startsWith(prefix)) result = result.slice(prefix.length);
    return { type: "ok", content: result };
  } catch (e) {
    const zodResult = z.object({ stderr: z.string() }).safeParse(e);
    if (zodResult.success) {
      const err = zodResult.data;
      error(err);
      if (err.stderr.includes("rateLimitExceeded"))
        return { type: "error", reason: "exhausted", stderr: err.stderr };
      return { type: "error", reason: "unknown", stderr: err.stderr };
    }
    error("unknown error:", e);
    throw e;
  }
}
