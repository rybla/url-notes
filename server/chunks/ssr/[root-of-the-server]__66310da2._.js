module.exports = {

"[project]/.next-internal/server/app/page/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/component/AppPage.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "AppPage": "AppPage-module__r3Htna__AppPage",
  "cornerstone": "AppPage-module__r3Htna__cornerstone",
  "item": "AppPage-module__r3Htna__item",
  "main": "AppPage-module__r3Htna__main",
  "navigation": "AppPage-module__r3Htna__navigation",
  "toolbar": "AppPage-module__r3Htna__toolbar",
});
}),
"[project]/src/analysis/utility.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s({
    "do_": ()=>do_,
    "encodeURIComponent_v2": ()=>encodeURIComponent_v2,
    "formatDate": ()=>formatDate,
    "formatDateTime": ()=>formatDateTime,
    "fromFormattedDateTime": ()=>fromFormattedDateTime,
    "intercalate": ()=>intercalate,
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
}
function intercalate(sep, xs) {
    const ys = [];
    for(let i = 0; i < xs.length; i++){
        if (i > 0) ys.push(...sep(i - 1));
        ys.push(xs[i]);
    }
    return ys;
}
}),
"[project]/src/component/AppPage.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>AppPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$AppPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/component/AppPage.module.css [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$utility$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analysis/utility.ts [app-rsc] (ecmascript)");
;
;
;
function AppPage(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$AppPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].AppPage,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$AppPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].toolbar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$AppPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].navigation,
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$utility$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["intercalate"])((i)=>[
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$AppPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].item,
                                    children: "←"
                                }, `sep-${i}`, false, {
                                    fileName: "[project]/src/component/AppPage.tsx",
                                    lineNumber: 15,
                                    columnNumber: 15
                                }, this)
                            ], props.path.map((x, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$AppPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].item,
                                children: x
                            }, `item-${i}`, false, {
                                fileName: "[project]/src/component/AppPage.tsx",
                                lineNumber: 20,
                                columnNumber: 15
                            }, this)))
                    }, void 0, false, {
                        fileName: "[project]/src/component/AppPage.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$AppPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].cornerstone
                    }, void 0, false, {
                        fileName: "[project]/src/component/AppPage.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/component/AppPage.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$AppPage$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].main,
                children: props.children
            }, void 0, false, {
                fileName: "[project]/src/component/AppPage.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/component/AppPage.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/component/LinkButton.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "LinkButton": "LinkButton-module___dH1Ra__LinkButton",
  "disabled": "LinkButton-module___dH1Ra__disabled",
  "vertical": "LinkButton-module___dH1Ra__vertical",
});
}),
"[project]/src/component/LinkButton.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>LinkButton
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$LinkButton$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/component/LinkButton.module.css [app-rsc] (css module)");
;
;
;
function LinkButton(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        className: [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$LinkButton$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].LinkButton
            ],
            props.disabled ? [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$LinkButton$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].disabled
            ] : [],
            props.vertical ? [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$LinkButton$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].vertical
            ] : []
        ].flatMap((s)=>s).join(" "),
        href: props.disabled ? "#" : props.href,
        children: props.children
    }, void 0, false, {
        fileName: "[project]/src/component/LinkButton.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/page.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "description": "page-module___8aEwW__description",
  "links": "page-module___8aEwW__links",
  "title": "page-module___8aEwW__title",
});
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>Page
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$AppPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/component/AppPage.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$LinkButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/component/LinkButton.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/page.module.css [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$utility$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/analysis/utility.ts [app-rsc] (ecmascript)");
;
;
;
;
;
async function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$AppPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        path: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$LinkButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                vertical: true,
                children: "index"
            }, 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 10,
                columnNumber: 9
            }, void 0)
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].title,
                children: "rybla/url-notes"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].description,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$utility$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["trim"])(`
This web app is the interface for viewing the compiled results from an automated process that collects URLs (to articles or PDFs) from my various feeds and bookmark lists into a single feed. It also performs some simple analysis to extract a preview about the content. I've designed the UI for primarily mobile viewing.
`)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$utility$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["trim"])(`
My intended use for this setup is to have a central feed that I can fully configure (both manually and automatically) to fill with content I'm interested in but also do some specialized analysis so that I can get a preview of the content before spending the time to start reading it. It just takes too much time to wade through my RSS feeds one item at a time, so this is my solution.
`)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$analysis$2f$utility$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["trim"])(`
Currently, the process populates a summary and set of tags for each item. This is either extracted from associated metadata from the item's original source, or generated via LLM.
`)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].links,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$LinkButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "https://github.com/rybla/url-notes",
                        children: "source"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$LinkButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/tags",
                        children: "tags"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$LinkButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/all/0",
                        children: "all"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__66310da2._.js.map