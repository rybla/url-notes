module.exports = {

"[project]/.next-internal/server/app/all/[pageIndex]/page/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
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
    "formatDate": ()=>formatDate,
    "formatDateTime": ()=>formatDateTime,
    "fromFormattedDateTime": ()=>fromFormattedDateTime,
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
"[project]/src/analysis/ai.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "gemini": ()=>gemini
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/child_process [external] (child_process, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/util [external] (util, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$console$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analysis/console.ts [app-rsc] (ecmascript)");
;
;
;
const execFileAsync = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["promisify"])(__TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__["execFile"]);
async function gemini(prompt, opts) {
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
    "writeJsonFile": ()=>writeJsonFile,
    "writeTextFile": ()=>writeTextFile
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
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
    return schema.safeParseAsync(JSON.parse(content));
}
async function writeJsonFile(filepath, data) {
    await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["writeFile"](filepath, JSON.stringify(data, null, 4), {
        encoding: "utf8"
    });
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
    url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].url().optional().describe("The URL of the article")
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
    maxItems: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].optional(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].number().min(1))
});
}),
"[project]/src/analysis/paths.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__,
    "paths": ()=>paths
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$console$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analysis/console.ts [app-rsc] (ecmascript)");
;
;
;
// input
const dirpath_feed = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join("input", "feed");
// output-1
const dirpath_article = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join("output-1", "article");
const dirpath_article_metadata = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join("output-1", "article_metadata");
// output-2
const dirpath_article_content = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join("output-2", "article_content");
const dirpath_article_summary = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join("output-2", "article_summary");
const dirpath_article_tags = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join("output-2", "article_tags");
const paths = {
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
    dirpath_article,
    dirpath_article_metadata,
    dirpath_article_content,
    dirpath_article_summary,
    dirpath_article_tags,
    async get_ids_of_articles () {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$console$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["log"])("[get_ids_of_articles]");
        return (await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["readdir"](dirpath_article, {
            encoding: "utf8",
            recursive: false
        })).flatMap((fn)=>fn.endsWith(".json") ? [
                __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].basename(fn, ".json")
            ] : []);
    },
    filepath_article (id_article) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(dirpath_article, `${id_article}.json`);
    },
    filepath_article_metadata (id_article) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(dirpath_article_metadata, `${id_article}.json`);
    },
    filepath_article_content (id_article) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(dirpath_article_content, `${id_article}.md`);
    },
    filepath_article_summary (id_article) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(dirpath_article_summary, `${id_article}.md`);
    },
    filepath_article_tags (id_article) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(dirpath_article_tags, `${id_article}.csv`);
    }
};
const __TURBOPACK__default__export__ = paths;
}),
"[project]/src/analysis/article.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "fetchArticle": ()=>fetchArticle,
    "generateSummary": ()=>generateSummary,
    "generateTags": ()=>generateTags,
    "getMarkdownContent": ()=>getMarkdownContent,
    "readArticle": ()=>readArticle,
    "readArticleContent": ()=>readArticleContent,
    "readArticleMetadata": ()=>readArticleMetadata,
    "readArticlePlus": ()=>readArticlePlus,
    "readArticleSummary": ()=>readArticleSummary,
    "readArticleTags": ()=>readArticleTags
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mozilla$2f$readability$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mozilla/readability/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$jsdom__$5b$external$5d$__$28$jsdom$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/jsdom [external] (jsdom, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$turndown$2f$lib$2f$turndown$2e$es$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/turndown/lib/turndown.es.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analysis/ai.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$file$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analysis/file.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$ontology$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analysis/ontology.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$paths$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analysis/paths.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function fetchArticle(url) {
    try {
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
    } catch  {
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
Write a very concise and technical bullet-point overview of the following article. Respond with JUST the overview.

${content}
`);
}
async function generateTags(title, summary) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gemini"](`
Consider the following article summary. Your task is to come up with the tags that best categorize the content. You may use as many tags as you want. Respond with JUST the comma-separated list of tags.

${title ? `Summary of "${title}":` : "Summary:"}

${summary}
`, {
        model: "gemini-2.5-flash"
    });
}
async function readArticle(id_article) {
    const parseResult_article = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$file$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readJsonFile"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$paths$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].filepath_article(id_article), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$ontology$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Article"]);
    if (!parseResult_article) return null;
    if (!parseResult_article.data) return null;
    const article = parseResult_article.data;
    return article;
}
async function readArticleMetadata(id_article) {
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$file$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readJsonFile"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$paths$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].filepath_article_metadata(id_article), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$ontology$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ArticleMetadata"]);
    if (!result) return null;
    return result.success ? result.data : null;
}
async function readArticleContent(id_article) {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$file$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readTextFile"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$paths$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].filepath_article_content(id_article));
}
async function readArticleSummary(id_article) {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$file$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readTextFile"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$paths$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].filepath_article_summary(id_article));
}
async function readArticleTags(id_article) {
    const tags_string = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$file$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readTextFile"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$paths$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].filepath_article_tags(id_article));
    if (!tags_string) return null;
    return tags_string.split(",").map((s)=>s.trim());
}
async function readArticlePlus(id_article) {
    const article = await readArticle(id_article);
    if (!article) return null;
    const metadata = await readArticleMetadata(id_article);
    if (!metadata) return null;
    const content = await readArticleContent(id_article) ?? undefined;
    const summary = await readArticleSummary(id_article) ?? undefined;
    const tags = await readArticleTags(id_article) ?? undefined;
    const articlePlus = {
        id: id_article,
        article,
        metadata,
        content,
        summary,
        tags
    };
    return articlePlus;
}
}),
"[project]/src/component/ArticlePreview.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "ArticlePreview": "ArticlePreview-module__rjMMPa__ArticlePreview",
  "fadeInSlideUp": "ArticlePreview-module__rjMMPa__fadeInSlideUp",
  "summary": "ArticlePreview-module__rjMMPa__summary",
  "tags": "ArticlePreview-module__rjMMPa__tags",
  "title": "ArticlePreview-module__rjMMPa__title",
});
}),
"[project]/src/component/ArticlePreview.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>ArticlePreviewComponent
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$ArticlePreview$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/component/ArticlePreview.module.css [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
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
                children: props.preview.tags.map((tag, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                children: props.preview.summary
            }, void 0, false, {
                fileName: "[project]/src/component/ArticlePreview.tsx",
                lineNumber: 24,
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
  "button": "page-module__kXvtoq__button",
  "content": "page-module__kXvtoq__content",
  "controls": "page-module__kXvtoq__controls",
  "fade-in-up": "page-module__kXvtoq__fade-in-up",
  "fluid-background": "page-module__kXvtoq__fluid-background",
  "header": "page-module__kXvtoq__header",
  "page": "page-module__kXvtoq__page",
  "previews": "page-module__kXvtoq__previews",
});
}),
"[project]/src/app/all/[pageIndex]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
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
;
;
;
;
;
;
;
const config = {
    articles_per_page: 2
};
const ids_all = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$paths$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].get_ids_of_articles();
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
function get_title(pageIndex, pageIndex_max) {
    return `url-notes | all | page ${pageIndex} of ${pageIndex_max}`;
}
async function generateStaticParams() {
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
    return {
        title: get_title(pageIndex, pageIndex_max)
    };
}
async function Page(props) {
    const params = await props.params;
    const pageIndex = Number(params.pageIndex);
    const previews = previews_all.slice(pageIndex * config.articles_per_page, (pageIndex + 1) * config.articles_per_page);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$all$2f5b$pageIndex$5d2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$all$2f5b$pageIndex$5d2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].header,
                children: get_title(pageIndex, pageIndex_max)
            }, void 0, false, {
                fileName: "[project]/src/app/all/[pageIndex]/page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$all$2f5b$pageIndex$5d2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].controls,
                children: [
                    0 < Number(params.pageIndex) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$all$2f5b$pageIndex$5d2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].button,
                        href: `/all/${Number(params.pageIndex) - 1}`,
                        children: "prev"
                    }, void 0, false, {
                        fileName: "[project]/src/app/all/[pageIndex]/page.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false),
                    Number(params.pageIndex) < pageIndex_max ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$all$2f5b$pageIndex$5d2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].button,
                        href: `/all/${Number(params.pageIndex) + 1}`,
                        children: "next"
                    }, void 0, false, {
                        fileName: "[project]/src/app/all/[pageIndex]/page.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/all/[pageIndex]/page.tsx",
                lineNumber: 79,
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
                            lineNumber: 104,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/all/[pageIndex]/page.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/all/[pageIndex]/page.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/all/[pageIndex]/page.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
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

//# sourceMappingURL=%5Broot-of-the-server%5D__ad4b18d2._.js.map