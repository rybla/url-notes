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
  initialize: () => Promise<string>,
): Promise<string> {
  {
    const content = await readTextFile(filepath);
    if (content) {
      log(`using cache: ${filepath}`);
      return content;
    }
  }
  const content = await initialize();
  writeTextFile(filepath, content);
  log(`initialized cache: ${filepath}`);
  return content;
}

export async function cacheJson<A>(
  filepath: string,
  schema: z.ZodSchema<A>,
  initialize: () => Promise<A>,
): Promise<A> {
  {
    const result = await readJsonFile(filepath, schema);
    if (result) {
      log(`using cache: ${filepath}`);
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
  log(`initialized cache: ${filepath}`);
  return content;
}
