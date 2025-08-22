/* eslint-disable @typescript-eslint/no-explicit-any */
import type z from "zod";
import * as fs from "fs/promises";
import path from "path";
import { jsonify } from "./utility";

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
  const data = jsonify(content);
  if (data === null) return null;
  return await schema.safeParseAsync(data);
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

export async function renameFile(
  filepath_source: string,
  filepath_target: string,
) {
  await fs.mkdir(path.dirname(filepath_target), { recursive: true });
  await fs.rename(filepath_source, filepath_target);
}
