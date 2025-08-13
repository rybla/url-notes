import { execFile } from "child_process";
import { promisify } from "util";
import { error } from "./console";
const execFileAsync = promisify(execFile);

export async function gemini(
  prompt: string,
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
