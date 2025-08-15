import z from "zod";
import { log } from "./console";
import {
  readJsonFile,
  readTextFile,
  writeJsonFile,
  writeTextFile,
} from "./file";

export async function cacheText(
  filepath: string,
  initialize: () => Promise<string | null>,
): Promise<string | null> {
  {
    const content = await readTextFile(filepath);
    if (content) {
      log(`Using cache: ${filepath}`);
      return content;
    }
  }
  const content = await initialize();
  log(`Failed to initialize cache: ${filepath}`);
  if (content === null) return null;
  writeTextFile(filepath, content);
  log(`Initializing cache: ${filepath}`);
  return content;
}

export async function cacheJson<A>(
  filepath: string,
  schema: z.ZodSchema<A>,
  initialize: () => Promise<A | null | undefined>,
): Promise<A | null> {
  {
    const result = await readJsonFile(filepath, schema);
    if (result) {
      log(`Using cache: ${filepath}`);
      if (result.success) {
        return result.data;
      } else {
        throw new Error(
          `Malformed JSON file at "${filepath}": ${result.error}`,
        );
      }
    }
  }
  const content = await initialize();
  writeJsonFile(filepath, content);
  log(`Initialized cache: ${filepath}`);
  if (content === null || content === undefined) return null;
  return content;
}
