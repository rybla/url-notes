module.exports = {

"[project]/.next-internal/server/app/all/[pageIndex]/page/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/jsdom [external] (jsdom, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("jsdom", () => require("jsdom"));

module.exports = mod;
}}),
"[externals]/child_process [external] (child_process, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}}),
"[project]/src/analysis/utility.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s({
    "do_": ()=>do_,
    "encodeURIComponent_v2": ()=>encodeURIComponent_v2,
    "formatDate": ()=>formatDate,
    "formatDateTime": ()=>formatDateTime,
    "fromFormattedDateTime": ()=>fromFormattedDateTime,
    "normString": ()=>normString,
    "parseDate": ()=>parseDate,
    "show": ()=>show,
    "stringify": ()=>stringify,
    "trim": ()=>trim
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/util [external] (util, cjs)");
;
function trim(s) {
    return s.trim();
}
function stringify(x) {
    return JSON.stringify(x, null, 4);
}
function do_(k) {
    return k();
}
function formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
}
function formatDateTime(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${year}-${month}-${day},${hours}:${minutes}`;
}
function fromFormattedDateTime(s) {
    const [dateStr, timeStr] = s.split(",");
    if (dateStr === undefined || timeStr === undefined) return undefined;
    const [year, month, day] = dateStr.split("-").map(Number);
    if (year === undefined || month === undefined || day === undefined) return undefined;
    const [hours, minutes] = timeStr.split(":").map(Number);
    if (hours === undefined || minutes === undefined) return undefined;
    return new Date(year, month - 1, day, hours, minutes);
}
function show(x) {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["inspect"])(x, {
        colors: true,
        compact: false,
        depth: undefined,
        sorted: false
    });
}
function parseDate(s) {
    const date = new Date(s);
    if (isNaN(date.getTime())) return null;
    return date;
}
function normString(s) {
    if (s === undefined) return undefined;
    s = s.trim();
    if (s.length === 0) return undefined;
    return s;
}
function encodeURIComponent_v2(s) {
    return encodeURIComponent(s.replaceAll(" ", "_"));
} // export function any<A>(f: (x:A) => boolean, xs: A[]): boolean {
 // }
}),
"[project]/src/analysis/console.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s({
    "error": ()=>error,
    "log": ()=>log,
    "makeConsole": ()=>makeConsole
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$utility$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analysis/utility.ts [app-rsc] (ecmascript)");
;
;
function log(...xs) {
    console.log(`[${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$utility$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDateTime"])(new Date())}]`, ...xs);
}
function error(...xs) {
    console.error(`[${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$utility$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDateTime"])(new Date())}]`, ...xs);
}
function makeConsole(args) {
    const prefix = `[${__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].basename(args.__filename)}]`;
    return {
        log (...xs) {
            log(prefix, ...xs);
        },
        error (...xs) {
            error(prefix, ...xs);
        }
    };
}
}),
"[externals]/node:fs [external] (node:fs, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}}),
"[externals]/node:path [external] (node:path, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}}),
"[project]/src/analysis/ai.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "gemini": ()=>gemini,
    "ollama": ()=>ollama
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/child_process [external] (child_process, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/util [external] (util, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$console$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analysis/console.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ollama$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ollama/dist/index.mjs [app-rsc] (ecmascript)");
;
;
;
;
// -----------------------------------------------------------------------------
const execFileAsync = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["promisify"])(__TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__["execFile"]);
const ollama = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ollama$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Ollama"]({
});
async function gemini(prompt, // eslint-disable-next-line @typescript-eslint/no-unused-vars
opts) {
    const { stdout, stderr } = await execFileAsync(`gemini`, [
        // opts?.model ? [`--model`, opts.model] : [],
        `--prompt`,
        prompt.trim()
    ].flat());
    if (stderr.length > 0) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$console$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["error"])(stderr);
    let result = stdout;
    const prefix = "Loaded cached credentials.\n";
    if (result.startsWith(prefix)) result = result.slice(prefix.length);
    return result;
}
}),
"[externals]/fs/promises [external] (fs/promises, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}}),
"[project]/src/analysis/file.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s({
    "readJsonFile": ()=>readJsonFile,
    "readTextFile": ()=>readTextFile,
    "renameFile": ()=>renameFile,
    "writeJsonFile": ()=>writeJsonFile,
    "writeTextFile": ()=>writeTextFile
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
async function readTextFile(filepath) {
    try {
        return await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["readFile"](filepath, {
            encoding: "utf8"
        });
    } catch  {
        return null;
    }
}
async function writeTextFile(filepath, content) {
    await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["mkdir"](__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(filepath), {
        recursive: true
    });
    await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["writeFile"](filepath, content, {
        encoding: "utf8"
    });
}
async function readJsonFile(filepath, schema) {
    let content;
    try {
        content = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["readFile"](filepath, {
            encoding: "utf8"
        });
    } catch  {
        return null;
    }
    // makes sure to still throw error if we cant even parse the JSON
    try {
        return schema.safeParseAsync(JSON.parse(content));
    } catch (e) {
        throw new Error(`Failed to parse JSON file ${filepath}: ${e}`);
    }
}
async function writeJsonFile(filepath, data) {
    await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["mkdir"](__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(filepath), {
        recursive: true
    });
    await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["writeFile"](filepath, JSON.stringify(data, null, 4), {
        encoding: "utf8"
    });
}
async function renameFile(filepath_source, filepath_target) {
    await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["mkdir"](__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(filepath_target), {
        recursive: true
    });
    await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["rename"](filepath_source, filepath_target);
}
}),
"[project]/src/analysis/ontology.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s({
    "Article": ()=>Article,
    "ArticleContent": ()=>ArticleContent,
    "ArticleMetadata": ()=>ArticleMetadata,
    "ArticlePlus": ()=>ArticlePlus,
    "ArticleSummary": ()=>ArticleSummary,
    "ArticleTags": ()=>ArticleTags,
    "FuzzyDate": ()=>FuzzyDate,
    "RssFeedConfig": ()=>RssFeedConfig
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$utility$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analysis/utility.ts [app-rsc] (ecmascript)");
;
;
const FuzzyDate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().transform((s)=>{
    const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$utility$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDate"])(s);
    if (!d) return s;
    return d;
});
const Article = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().optional().describe("The title of the article"),
    content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().optional().describe("The HTML string of processed article content"),
    textContent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().optional().describe("The text content of the article, with all the HTML tags removed"),
    length: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].number().optional().describe("The length of an article, in characters"),
    excerpt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().optional().describe("The article description, or short excerpt from the content"),
    byline: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().optional().describe("The author metadata"),
    dir: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().optional().describe("The content direction"),
    siteName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().optional().describe("The name of the site"),
    lang: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().optional().describe("The content language"),
    publishedTime: FuzzyDate.optional().describe("The published time"),
    summary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().optional().describe("A short summary of the article content"),
    tags: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string()).optional().describe("A list of categorizational tags for the article content"),
    url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].url().optional().describe("The URL of the article"),
    rssFeedConfig: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].lazy(()=>RssFeedConfig).optional()
});
const ArticleContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string();
const ArticleMetadata = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string(),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].optional(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string()),
    url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string(),
    addedDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].iso.date(),
    addedTime: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].number(),
    publishedTime: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].optional(FuzzyDate)
});
const ArticleSummary = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string();
const ArticleTags = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string());
const ArticlePlus = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string(),
    article: Article,
    metadata: ArticleMetadata,
    content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].optional(ArticleContent),
    summary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].optional(ArticleSummary),
    tags: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].optional(ArticleTags)
});
const RssFeedConfig = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string().nonempty(),
    feedUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].url(),
    maxItems: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].optional(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].number().min(1)),
    filters: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].optional(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].object({
        keywords: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].optional(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string())),
        topics: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].optional(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].string()))
    }))
});
}),
"[project]/src/analysis/paths.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__,
    "paths": ()=>paths
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
// input
const dirpath_feed = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join("input", "feed");
// output-1
const dirpath_new_article = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join("output-1", "new", "article");
const dirpath_new_article_metadata = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join("output-1", "new", "article_metadata");
const dirpath_ignored_article = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join("output-1", "ignored", "article");
const dirpath_ignored_article_metadata = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join("output-1", "ignored", "article_metadata");
const dirpath_article = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join("output-1", "old", "article");
const dirpath_article_metadata = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join("output-1", "old", "article_metadata");
// output-2
const dirpath_article_content = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join("output-2", "article_content");
const dirpath_article_summary = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join("output-2", "article_summary");
const dirpath_article_tags = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join("output-2", "article_tags");
const paths = {
    // external files
    filepaths_articleUrlLists: [
        "/Users/henry/Library/Mobile\ Documents/com\~apple\~CloudDocs/url-notes/article_urls.txt"
    ],
    // feed
    dirpath_feed,
    async get_filepaths_of_feeds () {
        return (await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["readdir"](dirpath_feed, {
            encoding: "utf8",
            recursive: false
        })).flatMap((fn)=>fn.endsWith(".feed.json") ? [
                __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(dirpath_feed, fn)
            ] : []);
    },
    // article
    dirpath_new_article,
    dirpath_new_article_metadata,
    dirpath_ignored_article,
    dirpath_ignored_article_metadata,
    dirpath_article,
    dirpath_article_metadata,
    dirpath_article_content,
    dirpath_article_summary,
    dirpath_article_tags,
    async get_articleIds_new () {
        return (await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["readdir"](dirpath_new_article, {
            encoding: "utf8",
            recursive: false
        })).flatMap((fn)=>fn.endsWith(".json") ? [
                __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].basename(fn, ".json")
            ] : []);
    },
    filepath_article_new (articleId) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(dirpath_new_article, `${articleId}.json`);
    },
    filepath_article_new_metadata (articleId) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(dirpath_new_article_metadata, `${articleId}.json`);
    },
    filepath_articleIds_ignored: __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join("output-1", "articleIds_ignored.json"),
    filepath_article_ignored (articleId) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(dirpath_ignored_article, `${articleId}.json`);
    },
    filepath_article_ignored_metadata (articleId) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(dirpath_ignored_article_metadata, `${articleId}.json`);
    },
    filepath_article (articleId) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(dirpath_article, `${articleId}.json`);
    },
    filepath_article_metadata (articleId) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(dirpath_article_metadata, `${articleId}.json`);
    },
    async get_articleIds () {
        return (await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["readdir"](dirpath_article, {
            encoding: "utf8",
            recursive: false
        })).flatMap((fn)=>fn.endsWith(".json") ? [
                __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].basename(fn, ".json")
            ] : []);
    },
    filepath_article_content (articleId) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(dirpath_article_content, `${articleId}.md`);
    },
    filepath_article_summary (articleId) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(dirpath_article_summary, `${articleId}.md`);
    },
    filepath_article_tags (articleId) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(dirpath_article_tags, `${articleId}.csv`);
    }
};
const __TURBOPACK__default__export__ = paths;
}),
"[project]/src/analysis/article.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "fetchArticle": ()=>fetchArticle,
    "fetchArxivArticleData": ()=>fetchArxivArticleData,
    "fetchGithubRepositoryData": ()=>fetchGithubRepositoryData,
    "fetchGithubRepositoryReadme": ()=>fetchGithubRepositoryReadme,
    "generateSummary": ()=>generateSummary,
    "generateTags": ()=>generateTags,
    "getMarkdownContent": ()=>getMarkdownContent,
    "readArticle": ()=>readArticle,
    "readArticleContent": ()=>readArticleContent,
    "readArticleMetadata": ()=>readArticleMetadata,
    "readArticlePlus": ()=>readArticlePlus,
    "readArticleSummary": ()=>readArticleSummary,
    "readArticleTags": ()=>readArticleTags,
    "readArticle_new": ()=>readArticle_new
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mozilla$2f$readability$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mozilla/readability/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$jsdom__$5b$external$5d$__$28$jsdom$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/jsdom [external] (jsdom, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$turndown$2f$lib$2f$turndown$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/turndown/lib/turndown.es.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analysis/ai.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$file$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analysis/file.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$ontology$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analysis/ontology.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$paths$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analysis/paths.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$console$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analysis/console.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
async function fetchArticle(url) {
    try {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$console$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["log"])(`Fetching article at URL: ${url}`);
        // special case: github
        if (url.includes("github.com")) {
            const readme = await fetchGithubRepositoryReadme(url);
            if (readme === null) return null;
            const data = await fetchGithubRepositoryData(url);
            if (data === null) return null;
            return {
                title: data.full_name,
                tags: data.topics,
                content: readme,
                textContent: readme,
                siteName: "https://github.com"
            };
        } else if (url.includes("arxiv.org")) {
            const data = await fetchArxivArticleData(url);
            if (data === null) return null;
            return {
                title: data.title,
                tags: data.categories,
                content: data.summary,
                textContent: data.summary,
                excerpt: data.summary,
                publishedTime: data.publishedDate,
                byline: data.authors.join(", "),
                siteName: "https://arxiv.org"
            };
        } else {
            const html = await (await fetch(url, {
                method: "GET"
            })).text();
            const doc = new __TURBOPACK__imported__module__$5b$externals$5d2f$jsdom__$5b$external$5d$__$28$jsdom$2c$__cjs$29$__["JSDOM"](html, {
                url
            });
            const reader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mozilla$2f$readability$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Readability"](doc.window.document);
            const prearticle = reader.parse();
            if (!prearticle) return null;
            const article = Object.entries(prearticle).reduce((acc, [key, value])=>{
                // @ts-expect-error Object.entries is not type-safe
                acc[key] = value === null ? undefined : value;
                return acc;
            }, {});
            article.url = url;
            return article;
        }
    } catch (e) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$console$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["error"])(`Failed to fetch article: ${e}`);
        return null;
    }
}
async function getMarkdownContent(article) {
    const turndownService = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$turndown$2f$lib$2f$turndown$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]({
        headingStyle: "atx"
    });
    let markdownString = "";
    const metadata = [];
    function escape(s) {
        return s.replace(/"/g, '\\"');
    }
    // populate metadata
    if (article.title) {
        metadata.push(`title: "${escape(article.title)}"`);
    }
    if (article.byline) {
        metadata.push(`author: "${escape(article.byline)}"`);
    }
    if (article.siteName) {
        metadata.push(`siteName: "${escape(article.siteName)}"`);
    }
    if (article.publishedTime) {
        metadata.push(`pubDate: "${article.publishedTime}"`);
    }
    if (article.lang) {
        metadata.push(`lang: "${escape(article.lang)}"`);
    }
    if (article.tags && article.tags.length > 0) {
        metadata.push(`tags: "${article.tags.join(", ")}"`);
    }
    // write metadata
    if (metadata.length > 0) {
        markdownString += `---\n${metadata.join("\n")}\n---\n\n`;
    }
    if (article.title) {
        markdownString += `# ${article.title}\n\n`;
    }
    if (article.content) {
        markdownString += turndownService.turndown(article.content);
    } else if (article.textContent) {
        markdownString += article.textContent;
    } else if (article.summary) {
        markdownString += article.summary;
    } else if (article.excerpt) {
        markdownString += article.excerpt;
    }
    return markdownString.trim();
}
async function generateSummary(content) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gemini"](`
Write a very concise and technical bullet-point overview of the following article. Use markdown syntax. Respond with JUST the overview.

${content.slice(0, 200000)}
`);
}
async function generateTags(title, summary) {
    return (await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gemini"](`
Consider the following article summary. Your task is to come up with the tags that best categorize the content. You may use many tags with varying degrees of specificity. Respond with JUST the comma-separated list of tags.

${title ? `Summary of "${title}":` : "Summary:"}

${summary}
`, {
        model: "gemini-2.5-flash"
    })).split(",").map((s)=>s.trim().toLowerCase());
}
async function readArticle(articleId) {
    const parseResult_article = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$file$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readJsonFile"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$paths$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].filepath_article(articleId), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$ontology$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Article"]);
    if (!parseResult_article) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$console$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["error"])(`Failed to read article: ${articleId}`);
        return null;
    }
    if (!parseResult_article.data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$console$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["error"])(`Failed to parse article: ${articleId}\n${parseResult_article.error}`);
        return null;
    }
    const article = parseResult_article.data;
    return article;
}
async function readArticle_new(articleId) {
    const parseResult_article = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$file$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readJsonFile"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$paths$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].filepath_article_new(articleId), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$ontology$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Article"]);
    if (!parseResult_article) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$console$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["error"])(`Failed to read article: ${articleId}`);
        return null;
    }
    if (!parseResult_article.data) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$console$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["error"])(`Failed to parse article: ${articleId}\n${parseResult_article.error}`);
        return null;
    }
    const article = parseResult_article.data;
    return article;
}
async function readArticleMetadata(articleId) {
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$file$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readJsonFile"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$paths$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].filepath_article_metadata(articleId), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$ontology$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ArticleMetadata"]);
    if (!result) return null;
    return result.success ? result.data : null;
}
async function readArticleContent(articleId) {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$file$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readTextFile"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$paths$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].filepath_article_content(articleId));
}
async function readArticleSummary(articleId) {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$file$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readTextFile"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$paths$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].filepath_article_summary(articleId));
}
async function readArticleTags(articleId) {
    const tags_string = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$file$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readTextFile"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$paths$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].filepath_article_tags(articleId));
    if (!tags_string) return null;
    return tags_string.split(",").map((s)=>s.trim());
}
async function readArticlePlus(articleId) {
    const article = await readArticle(articleId);
    if (!article) return null;
    const metadata = await readArticleMetadata(articleId);
    if (!metadata) return null;
    const content = await readArticleContent(articleId) ?? undefined;
    const summary = await readArticleSummary(articleId) ?? undefined;
    const tags = await readArticleTags(articleId) ?? undefined;
    const articlePlus = {
        id: articleId,
        article,
        metadata,
        content,
        summary,
        tags
    };
    return articlePlus;
}
async function fetchGithubRepositoryReadme(url) {
    try {
        const urlParts = new URL(url).pathname.split("/").filter(Boolean);
        if (urlParts.length < 2) {
            return null;
        }
        const [owner, repo] = urlParts;
        const apiUrl = `https://api.github.com/repos/${owner}/${repo}/readme`;
        const apiResponse = await fetch(apiUrl, {
            headers: {
                Accept: "application/vnd.github.v3+json"
            }
        });
        if (!apiResponse.ok) {
            return null;
        }
        const readmeData = await apiResponse.json();
        const downloadUrl = readmeData.download_url;
        if (!downloadUrl) {
            return null;
        }
        const contentResponse = await fetch(downloadUrl);
        if (!contentResponse.ok) {
            return null;
        }
        const markdownText = await contentResponse.text();
        return markdownText;
    } catch (e) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$console$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["error"])(`Failed to fetch GitHub README: ${e}`);
        return null;
    }
}
async function fetchGithubRepositoryData(url) {
    try {
        const urlParts = new URL(url).pathname.split("/").filter(Boolean);
        if (urlParts.length < 2) {
            return null;
        }
        const [owner, repo] = urlParts;
        const apiUrl = `https://api.github.com/repos/${owner}/${repo}`;
        const apiResponse = await fetch(apiUrl, {
            headers: {
                Accept: "application/vnd.github.v3+json"
            }
        });
        if (!apiResponse.ok) {
            return null;
        }
        const repoData = await apiResponse.json();
        return repoData;
    } catch (e) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$console$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["error"])(`Failed to fetch GitHub repository data: ${e}`);
        return null;
    }
}
async function fetchArxivArticleData(url) {
    try {
        const articleIdMatch = url.match(/(\d{4}\.\d{4,5}(v\d+)?)/);
        if (!articleIdMatch) {
            console.error("Could not parse ArXiv article ID from URL:", url);
            return null;
        }
        const articleId = articleIdMatch[1];
        const apiUrl = `https://export.arxiv.org/api/query?id_list=${articleId}`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
            console.error(`Failed to fetch from ArXiv API. Status: ${response.status}`);
            return null;
        }
        const xmlText = await response.text();
        const dom = new __TURBOPACK__imported__module__$5b$externals$5d2f$jsdom__$5b$external$5d$__$28$jsdom$2c$__cjs$29$__["JSDOM"](xmlText, {
            contentType: "text/xml"
        });
        const xmlDoc = dom.window.document;
        const entry = xmlDoc.querySelector("entry");
        if (!entry) {
            console.error("No <entry> tag found in ArXiv API response.");
            return null;
        }
        const getText = (selector)=>{
            const element = entry.querySelector(selector);
            return element?.textContent?.trim().replace(/\s+/g, " ") || "";
        };
        const getLink = ()=>{
            const linkElement = entry.querySelector('link[title="abstract"]');
            return linkElement?.getAttribute("href") || getText("id");
        };
        const getArray = (selector, attribute)=>{
            try {
                const elements = entry.querySelectorAll(selector);
                return Array.from(elements).map((el)=>{
                    if (attribute) {
                        return el.getAttribute(attribute) || "";
                    }
                    return el.textContent?.trim() || "";
                }).filter(Boolean);
            } catch (e) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$console$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["error"])(`Error getting array: ${e}`);
                return [];
            }
        };
        const article = {
            id: getText("id"),
            url: getLink(),
            title: getText("title"),
            summary: getText("summary"),
            authors: getArray("author name"),
            publishedDate: getText("published"),
            updatedDate: getText("updated"),
            categories: getArray("category", "term").map((c)=>ARXIV_CATEGORY_MAP[c.toLowerCase()] ?? c)
        };
        if (!article.id || !article.title) {
            console.error("Essential article data (id, title) is missing from the parsed response.");
            return null;
        }
        return article;
    } catch (error) {
        console.error("An error occurred while fetching or parsing ArXiv data:", error);
        return null;
    }
}
const ARXIV_CATEGORY_MAP = {
    ["cs.AI".toLowerCase()]: "Artificial Intelligence",
    ["cs.AR".toLowerCase()]: "Hardware Architecture",
    ["cs.CC".toLowerCase()]: "Computational Complexity",
    ["cs.CE".toLowerCase()]: "Computational Engineering, Finance, and Science",
    ["cs.CG".toLowerCase()]: "Computational Geometry",
    ["cs.CL".toLowerCase()]: "Computation and Language",
    ["cs.CR".toLowerCase()]: "Cryptography and Security",
    ["cs.CV".toLowerCase()]: "Computer Vision and Pattern Recognition",
    ["cs.CY".toLowerCase()]: "Computers and Society",
    ["cs.DB".toLowerCase()]: "Databases",
    ["cs.DC".toLowerCase()]: "Distributed, Parallel, and Cluster Computing",
    ["cs.DL".toLowerCase()]: "Digital Libraries",
    ["cs.DM".toLowerCase()]: "Discrete Mathematics",
    ["cs.DS".toLowerCase()]: "Data Structures and Algorithms",
    ["cs.ET".toLowerCase()]: "Emerging Technologies",
    ["cs.FL".toLowerCase()]: "Formal Languages and Automata Theory",
    ["cs.GL".toLowerCase()]: "General Literature",
    ["cs.GR".toLowerCase()]: "Graphics",
    ["cs.GT".toLowerCase()]: "Computer Science and Game Theory",
    ["cs.IR".toLowerCase()]: "Information Retrieval",
    ["cs.IT".toLowerCase()]: "Information Theory",
    ["cs.LG".toLowerCase()]: "Machine Learning",
    ["cs.LO".toLowerCase()]: "Logic in Computer Science",
    ["cs.MA".toLowerCase()]: "Multiagent Systems",
    ["cs.MM".toLowerCase()]: "Multimedia",
    ["cs.MS".toLowerCase()]: "Mathematical Software",
    ["cs.NA".toLowerCase()]: "Numerical Analysis",
    ["cs.NE".toLowerCase()]: "Neural and Evolutionary Computing",
    ["cs.NI".toLowerCase()]: "Networking and Internet Architecture",
    ["cs.OH".toLowerCase()]: "Other Computer Science",
    ["cs.OS".toLowerCase()]: "Operating Systems",
    ["cs.PF".toLowerCase()]: "Performance",
    ["cs.PL".toLowerCase()]: "Programming Languages",
    ["cs.RO".toLowerCase()]: "Robotics",
    ["cs.SC".toLowerCase()]: "Symbolic Computation",
    ["cs.SD".toLowerCase()]: "Sound",
    ["cs.SE".toLowerCase()]: "Software Engineering",
    ["cs.SI".toLowerCase()]: "Social and Information Networks",
    ["cs.SY".toLowerCase()]: "Systems and Control",
    ["econ.EM".toLowerCase()]: "Econometrics",
    ["eess.AS".toLowerCase()]: "Audio and Speech Processing",
    ["eess.IV".toLowerCase()]: "Image and Video Processing",
    ["eess.SP".toLowerCase()]: "Signal Processing",
    ["eess.SY".toLowerCase()]: "Systems and Control",
    ["math.AC".toLowerCase()]: "Commutative Algebra",
    ["math.AG".toLowerCase()]: "Algebraic Geometry",
    ["math.AP".toLowerCase()]: "Analysis of PDEs",
    ["math.AT".toLowerCase()]: "Algebraic Topology",
    ["math.CA".toLowerCase()]: "Classical Analysis and ODEs",
    ["math.CO".toLowerCase()]: "Combinatorics",
    ["math.CT".toLowerCase()]: "Category Theory",
    ["math.CV".toLowerCase()]: "Complex Variables",
    ["math.DG".toLowerCase()]: "Differential Geometry",
    ["math.DS".toLowerCase()]: "Dynamical Systems",
    ["math.FA".toLowerCase()]: "Functional Analysis",
    ["math.GM".toLowerCase()]: "General Mathematics",
    ["math.GN".toLowerCase()]: "General Topology",
    ["math.GR".toLowerCase()]: "Group Theory",
    ["math.GT".toLowerCase()]: "Geometric Topology",
    ["math.HO".toLowerCase()]: "History and Overview",
    ["math.IT".toLowerCase()]: "Information Theory",
    ["math.KT".toLowerCase()]: "K-Theory and Homology",
    ["math.LO".toLowerCase()]: "Logic",
    ["math.MG".toLowerCase()]: "Metric Geometry",
    ["math.MP".toLowerCase()]: "Mathematical Physics",
    ["math.NA".toLowerCase()]: "Numerical Analysis",
    ["math.NT".toLowerCase()]: "Number Theory",
    ["math.OA".toLowerCase()]: "Operator Algebras",
    ["math.OC".toLowerCase()]: "Optimization and Control",
    ["math.PR".toLowerCase()]: "Probability",
    ["math.QA".toLowerCase()]: "Quantum Algebra",
    ["math.RA".toLowerCase()]: "Rings and Algebras",
    ["math.RT".toLowerCase()]: "Representation Theory",
    ["math.SG".toLowerCase()]: "Symplectic Geometry",
    ["math.SP".toLowerCase()]: "Spectral Theory",
    ["math.ST".toLowerCase()]: "Statistics Theory",
    ["astro-ph.CO".toLowerCase()]: "Cosmology and Nongalactic Astrophysics",
    ["astro-ph.EP".toLowerCase()]: "Earth and Planetary Astrophysics",
    ["astro-ph.GA".toLowerCase()]: "Astrophysics of Galaxies",
    ["astro-ph.HE".toLowerCase()]: "High Energy Astrophysical Phenomena",
    ["astro-ph.IM".toLowerCase()]: "Instrumentation and Methods for Astrophysics",
    ["astro-ph.SR".toLowerCase()]: "Solar and Stellar Astrophysics",
    ["cond-mat.dis-nn".toLowerCase()]: "Disordered Systems and Neural Networks",
    ["cond-mat.mes-hall".toLowerCase()]: "Mesoscale and Nanoscale Physics",
    ["cond-mat.mtrl-sci".toLowerCase()]: "Materials Science",
    ["cond-mat.other".toLowerCase()]: "Other Condensed Matter",
    ["cond-mat.quant-gas".toLowerCase()]: "Quantum Gases",
    ["cond-mat.soft".toLowerCase()]: "Soft Condensed Matter",
    ["cond-mat.stat-mech".toLowerCase()]: "Statistical Mechanics",
    ["cond-mat.str-el".toLowerCase()]: "Strongly Correlated Electrons",
    ["cond-mat.supr-con".toLowerCase()]: "Superconductivity",
    ["gr-qc".toLowerCase()]: "General Relativity and Quantum Cosmology",
    ["hep-ex".toLowerCase()]: "High Energy Physics - Experiment",
    ["hep-lat".toLowerCase()]: "High Energy Physics - Lattice",
    ["hep-ph".toLowerCase()]: "High Energy Physics - Phenomenology",
    ["hep-th".toLowerCase()]: "High Energy Physics - Theory",
    ["math-ph".toLowerCase()]: "Mathematical Physics",
    ["nlin.AO".toLowerCase()]: "Adaptation and Self-Organizing Systems",
    ["nlin.CD".toLowerCase()]: "Chaotic Dynamics",
    ["nlin.CG".toLowerCase()]: "Cellular Automata and Lattice Gases",
    ["nlin.PS".toLowerCase()]: "Pattern Formation and Solitons",
    ["nlin.SI".toLowerCase()]: "Exactly Solvable and Integrable Systems",
    ["nucl-ex".toLowerCase()]: "Nuclear Experiment",
    ["nucl-th".toLowerCase()]: "Nuclear Theory",
    ["physics.acc-ph".toLowerCase()]: "Accelerator Physics",
    ["physics.ao-ph".toLowerCase()]: "Atmospheric and Oceanic Physics",
    ["physics.app-ph".toLowerCase()]: "Applied Physics",
    ["physics.atm-clus".toLowerCase()]: "Atomic and Molecular Clusters",
    ["physics.atom-ph".toLowerCase()]: "Atomic Physics",
    ["physics.bio-ph".toLowerCase()]: "Biological Physics",
    ["physics.chem-ph".toLowerCase()]: "Chemical Physics",
    ["physics.class-ph".toLowerCase()]: "Classical Physics",
    ["physics.comp-ph".toLowerCase()]: "Computational Physics",
    ["physics.data-an".toLowerCase()]: "Data Analysis, Statistics and Probability",
    ["physics.flu-dyn".toLowerCase()]: "Fluid Dynamics",
    ["physics.gen-ph".toLowerCase()]: "General Physics",
    ["physics.geo-ph".toLowerCase()]: "Geophysics",
    ["physics.hist-ph".toLowerCase()]: "History and Philosophy of Physics",
    ["physics.ins-det".toLowerCase()]: "Instrumentation and Detectors",
    ["physics.med-ph".toLowerCase()]: "Medical Physics",
    ["physics.optics".toLowerCase()]: "Optics",
    ["physics.ed-ph".toLowerCase()]: "Physics Education",
    ["physics.plasm-ph".toLowerCase()]: "Plasma Physics",
    ["physics.pop-ph".toLowerCase()]: "Popular Physics",
    ["physics.soc-ph".toLowerCase()]: "Physics and Society",
    ["physics.space-ph".toLowerCase()]: "Space Physics",
    ["quant-ph".toLowerCase()]: "Quantum Physics",
    ["q-bio.BM".toLowerCase()]: "Biomolecules",
    ["q-bio.CB".toLowerCase()]: "Cell Behavior",
    ["q-bio.GN".toLowerCase()]: "Genomics",
    ["q-bio.MN".toLowerCase()]: "Molecular Networks",
    ["q-bio.NC".toLowerCase()]: "Neurons and Cognition",
    ["q-bio.OT".toLowerCase()]: "Other Quantitative Biology",
    ["q-bio.PE".toLowerCase()]: "Populations and Evolution",
    ["q-bio.QM".toLowerCase()]: "Quantitative Methods",
    ["q-bio.SC".toLowerCase()]: "Subcellular Processes",
    ["q-bio.TO".toLowerCase()]: "Tissues and Organs",
    ["q-fin.CP".toLowerCase()]: "Computational Finance",
    ["q-fin.EC".toLowerCase()]: "Economics",
    ["q-fin.GN".toLowerCase()]: "General Finance",
    ["q-fin.MF".toLowerCase()]: "Mathematical Finance",
    ["q-fin.PM".toLowerCase()]: "Portfolio Management",
    ["q-fin.PR".toLowerCase()]: "Pricing of Securities",
    ["q-fin.RM".toLowerCase()]: "Risk Management",
    ["q-fin.ST".toLowerCase()]: "Statistical Finance",
    ["q-fin.TR".toLowerCase()]: "Trading and Market Microstructure",
    ["stat.AP".toLowerCase()]: "Applications",
    ["stat.CO".toLowerCase()]: "Computation",
    ["stat.ME".toLowerCase()]: "Methodology",
    ["stat.ML".toLowerCase()]: "Machine Learning",
    ["stat.OT".toLowerCase()]: "Other Statistics",
    ["stat.TH".toLowerCase()]: "Theory"
};
}),
"[project]/src/component/ArticlePreview.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "ArticlePreview": "ArticlePreview-module__rjMMPa__ArticlePreview",
  "summary": "ArticlePreview-module__rjMMPa__summary",
  "tag": "ArticlePreview-module__rjMMPa__tag",
  "tags": "ArticlePreview-module__rjMMPa__tags",
  "title": "ArticlePreview-module__rjMMPa__title",
});
}),
"[externals]/tty [external] (tty, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/node:path [external] (node:path, cjs) <export default as minpath>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "minpath": ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
}),
"[externals]/node:process [external] (node:process, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:process", () => require("node:process"));

module.exports = mod;
}}),
"[externals]/node:process [external] (node:process, cjs) <export default as minproc>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "minproc": ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:process [external] (node:process, cjs)");
}),
"[externals]/node:url [external] (node:url, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:url", () => require("node:url"));

module.exports = mod;
}}),
"[externals]/node:url [external] (node:url, cjs) <export fileURLToPath as urlToPath>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "urlToPath": ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__["fileURLToPath"]
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:url [external] (node:url, cjs)");
}),
"[project]/src/component/ArticlePreview.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>ArticlePreviewComponent
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$ArticlePreview$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/component/ArticlePreview.module.css [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/react-markdown/lib/index.js [app-rsc] (ecmascript) <export Markdown as default>");
;
;
;
;
function ArticlePreviewComponent(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$ArticlePreview$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].ArticlePreview,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$ArticlePreview$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].title,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: props.preview.metadata.url,
                    target: "_blank",
                    children: props.preview.metadata.title ?? props.preview.metadata.url
                }, void 0, false, {
                    fileName: "[project]/src/component/ArticlePreview.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/component/ArticlePreview.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            props.preview.tags && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$ArticlePreview$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].tags,
                children: props.preview.tags.map((tag, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$ArticlePreview$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].tag,
                        href: `/tag/${encodeURIComponent(tag)}`,
                        children: tag
                    }, j, false, {
                        fileName: "[project]/src/component/ArticlePreview.tsx",
                        lineNumber: 19,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/component/ArticlePreview.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this),
            props.preview.summary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$ArticlePreview$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].summary,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
                    children: props.preview.summary
                }, void 0, false, {
                    fileName: "[project]/src/component/ArticlePreview.tsx",
                    lineNumber: 27,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/component/ArticlePreview.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/component/ArticlePreview.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/all/[pageIndex]/page.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "Page": "page-module__kXvtoq__Page",
  "button": "page-module__kXvtoq__button",
  "content": "page-module__kXvtoq__content",
  "controls": "page-module__kXvtoq__controls",
  "disabled": "page-module__kXvtoq__disabled",
  "header": "page-module__kXvtoq__header",
  "item": "page-module__kXvtoq__item",
  "previews": "page-module__kXvtoq__previews",
  "separator": "page-module__kXvtoq__separator",
});
}),
"[project]/src/component/Header.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "Header": "Header-module__6DZwPG__Header",
  "item": "Header-module__6DZwPG__item",
  "separator": "Header-module__6DZwPG__separator",
});
}),
"[project]/src/component/Header.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>Header
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Header$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/component/Header.module.css [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
;
function Header(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Header$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].Header,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Header$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].item,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    children: "url-notes"
                }, void 0, false, {
                    fileName: "[project]/src/component/Header.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/component/Header.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            props.path.map((item, i)=>[
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Header$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].separator,
                        children: "|"
                    }, `separator-${i}`, false, {
                        fileName: "[project]/src/component/Header.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Header$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].item,
                        children: item
                    }, `item-${i}`, false, {
                        fileName: "[project]/src/component/Header.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this)
                ])
        ]
    }, void 0, true, {
        fileName: "[project]/src/component/Header.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/all/[pageIndex]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>Page,
    "generateMetadata": ()=>generateMetadata,
    "generateStaticParams": ()=>generateStaticParams
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$article$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analysis/article.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$paths$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analysis/paths.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$ArticlePreview$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/component/ArticlePreview.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$all$2f5b$pageIndex$5d2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/all/[pageIndex]/page.module.css [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/component/Header.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const config = {
    articles_per_page: 10
};
const getCachedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])(async ()=>{
    const ids_all = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$paths$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].get_articleIds();
    const mds_all = (await Promise.all(ids_all.map(async (id)=>await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$article$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readArticleMetadata"])(id)))).filter((md)=>md !== null);
    // sorted from newest (higher `addedTime` value) to oldest
    mds_all.sort((x, y)=>y.addedTime - x.addedTime);
    const previews_all = await Promise.all(mds_all.map(async (md)=>{
        return {
            metadata: md,
            summary: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$article$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readArticleSummary"])(md.id) ?? undefined,
            tags: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$article$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readArticleTags"])(md.id) ?? undefined
        };
    }));
    const pageIndex_max = Math.ceil(ids_all.length / config.articles_per_page) - 1;
    const count_pages = Math.ceil(ids_all.length / config.articles_per_page);
    return {
        ids_all,
        mds_all,
        previews_all,
        pageIndex_max,
        count_pages
    };
});
function get_title(pageIndex, pageIndex_max) {
    return `url-notes | all | page ${pageIndex + 1} of ${pageIndex_max + 1}`;
}
async function generateStaticParams() {
    const { count_pages } = await getCachedData();
    const ps = [];
    for(let i = 0; i < count_pages; i++){
        ps.push({
            pageIndex: `${i}`
        });
    }
    return ps;
}
async function generateMetadata(props) {
    const params = await props.params;
    const pageIndex = Number(params.pageIndex);
    const { pageIndex_max } = await getCachedData();
    return {
        title: get_title(pageIndex, pageIndex_max)
    };
}
async function Page(props) {
    const params = await props.params;
    const pageIndex = Number(params.pageIndex);
    const { previews_all, pageIndex_max } = await getCachedData();
    const previews = previews_all.slice(pageIndex * config.articles_per_page, (pageIndex + 1) * config.articles_per_page);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$all$2f5b$pageIndex$5d2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].Page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                path: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/all/0",
                        children: "all"
                    }, 0, false, {
                        fileName: "[project]/src/app/all/[pageIndex]/page.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, void 0),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "page ",
                            pageIndex + 1,
                            " of ",
                            pageIndex_max + 1
                        ]
                    }, 1, true, {
                        fileName: "[project]/src/app/all/[pageIndex]/page.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, void 0)
                ]
            }, void 0, false, {
                fileName: "[project]/src/app/all/[pageIndex]/page.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$all$2f5b$pageIndex$5d2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].content,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$all$2f5b$pageIndex$5d2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].previews,
                    children: previews.map((preview, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$ArticlePreview$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            preview: preview
                        }, i, false, {
                            fileName: "[project]/src/app/all/[pageIndex]/page.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/all/[pageIndex]/page.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/all/[pageIndex]/page.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$all$2f5b$pageIndex$5d2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].controls,
                children: [
                    0 < Number(params.pageIndex) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$all$2f5b$pageIndex$5d2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].button,
                        href: `/all/${Number(params.pageIndex) - 1}`,
                        children: "newer"
                    }, void 0, false, {
                        fileName: "[project]/src/app/all/[pageIndex]/page.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$all$2f5b$pageIndex$5d2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].button,
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$all$2f5b$pageIndex$5d2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].disabled
                        ].join(" "),
                        children: "newer"
                    }, void 0, false, {
                        fileName: "[project]/src/app/all/[pageIndex]/page.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this),
                    Number(params.pageIndex) < pageIndex_max ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$all$2f5b$pageIndex$5d2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].button,
                        href: `/all/${Number(params.pageIndex) + 1}`,
                        children: "older"
                    }, void 0, false, {
                        fileName: "[project]/src/app/all/[pageIndex]/page.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$all$2f5b$pageIndex$5d2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].button,
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$all$2f5b$pageIndex$5d2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].disabled
                        ].join(" "),
                        children: "older"
                    }, void 0, false, {
                        fileName: "[project]/src/app/all/[pageIndex]/page.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/all/[pageIndex]/page.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/all/[pageIndex]/page.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/all/[pageIndex]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/all/[pageIndex]/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__fe7adf74._.js.map