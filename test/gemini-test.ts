import * as ai from "@/analysis/ai";
import { log } from "@/analysis/console";

log(await ai.gemini(`What is 1 + 2?`, { model: "gemini-2.5-flash" }));
