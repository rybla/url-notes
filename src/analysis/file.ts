/* eslint-disable @typescript-eslint/no-explicit-any */
import type z from "zod";
import * as fs from "fs/promises";
import path from "path";

export async function readTextFile(filepath: string): Promise<string | null> {
  try {
    return await fs.readFile(filepath, { encoding: "utf8" });
  } catch {
    return null;
  }
}

export async function writeTextFile(
  filepath: string,
  content: string,
): Promise<void> {
  await fs.mkdir(path.dirname(filepath), { recursive: true });
  await fs.writeFile(filepath, content, { encoding: "utf8" });
}

export async function readJsonFile<A>(
  filepath: string,
  schema: z.ZodSchema<A>,
): Promise<z.ZodSafeParseResult<A> | null> {
  let content: string;
  try {
    content = await fs.readFile(filepath, { encoding: "utf8" });
  } catch {
    return null;
  }
  // makes sure to still throw error if we cant even parse the JSON
  return schema.safeParseAsync(JSON.parse(content));
}

export async function writeJsonFile(
  filepath: string,
  data: any,
): Promise<void> {
  await fs.mkdir(path.dirname(filepath), { recursive: true });
  await fs.writeFile(filepath, JSON.stringify(data, null, 4), {
    encoding: "utf8",
  });
}
