/* eslint-disable @typescript-eslint/no-explicit-any */
import path from "path";
import { formatDateTime } from "./utility";

export function log(...xs: any[]) {
  console.log(`[${formatDateTime(new Date())}]`, ...xs);
}

export function error(...xs: any[]) {
  console.error(`[${formatDateTime(new Date())}]`, ...xs);
}

export function makeConsole(args: { __filename: string }) {
  const prefix = `[${path.basename(args.__filename)}]`;
  return {
    log(...xs: any[]) {
      log(prefix, ...xs);
    },
    error(...xs: any[]) {
      error(prefix, ...xs);
    },
  } as const;
}
