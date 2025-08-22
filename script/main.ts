import { execFile } from "child_process";
import { promisify } from "util";
import { makeConsole } from "@/analysis/console";
const { log } = makeConsole({ __filename });

// -----------------------------------------------------------------------------

const execFileAsync = promisify(execFile);

// -----------------------------------------------------------------------------

log("begin");

// pull remote changes
// await execFileAsync("git", ["pull", "-X", "theirs"]);

// // update articles
// await execFileAsync("bun", ["run", "script/fetch-articles.ts"]);
// await execFileAsync("bun", ["run", "script/filter-articles.ts"]);
// await execFileAsync("bun", ["run", "script/process-articles.ts"]);

// // build site
// await execFileAsync("bun", ["run", "build"]);

// // deploy site
// await execFileAsync("bun", ["run", "deploy"]);

log("end");
