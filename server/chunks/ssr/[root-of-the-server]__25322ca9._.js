module.exports = {

"[project]/.next-internal/server/app/tag/[tag]/page/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
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
    "readArticle": ()=>readArticle,
    "readArticleContent": ()=>readArticleContent,
    "readArticleMetadata": ()=>readArticleMetadata,
    "readArticlePlus": ()=>readArticlePlus,
    "readArticleSummary": ()=>readArticleSummary,
    "readArticleTags": ()=>readArticleTags,
    "readArticle_new": ()=>readArticle_new
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$console$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analysis/console.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$file$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analysis/file.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$ontology$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analysis/ontology.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$paths$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analysis/paths.ts [app-rsc] (ecmascript)");
;
;
;
;
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
"[externals]/node:path [external] (node:path, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:path", () => require("node:path"));

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
"[project]/src/app/tag/[tag]/page.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "page-module__BlBJeG__button",
  "content": "page-module__BlBJeG__content",
  "controls": "page-module__BlBJeG__controls",
  "disabled": "page-module__BlBJeG__disabled",
  "header": "page-module__BlBJeG__header",
  "page": "page-module__BlBJeG__page",
  "previews": "page-module__BlBJeG__previews",
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
"[project]/src/app/tag/[tag]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$tag$2f5b$tag$5d2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/tag/[tag]/page.module.css [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/component/Header.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
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
    return {
        ids_all,
        mds_all,
        previews_all
    };
});
async function generateStaticParams() {
    const { previews_all } = await getCachedData();
    const tags = new Set();
    for (const preview of previews_all){
        if (preview.tags) {
            for (const tag of preview.tags){
                tags.add(tag);
            }
        }
    }
    return Array.from(tags).map((tag)=>({
            tag: encodeURIComponent(tag)
        }));
}
async function generateMetadata(props) {
    const params = await props.params;
    const tag = decodeURIComponent(params.tag);
    return {
        title: `url-notes | tag | ${tag}`
    };
}
async function Page(props) {
    const params = await props.params;
    const tag = decodeURIComponent(params.tag);
    const { previews_all } = await getCachedData();
    const previews = previews_all.filter((preview)=>preview.tags?.includes(tag));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$tag$2f5b$tag$5d2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].Page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                path: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/tags",
                        children: "tag"
                    }, 0, false, {
                        fileName: "[project]/src/app/tag/[tag]/page.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, void 0),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/tags",
                        children: "tag"
                    }, 1, false, {
                        fileName: "[project]/src/app/tag/[tag]/page.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, void 0),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: tag
                    }, 2, false, {
                        fileName: "[project]/src/app/tag/[tag]/page.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, void 0)
                ]
            }, void 0, false, {
                fileName: "[project]/src/app/tag/[tag]/page.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$tag$2f5b$tag$5d2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].content,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$tag$2f5b$tag$5d2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].previews,
                    children: previews.map((preview, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$ArticlePreview$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            preview: preview
                        }, i, false, {
                            fileName: "[project]/src/app/tag/[tag]/page.tsx",
                            lineNumber: 91,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/tag/[tag]/page.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/tag/[tag]/page.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/tag/[tag]/page.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/tag/[tag]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/tag/[tag]/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__25322ca9._.js.map