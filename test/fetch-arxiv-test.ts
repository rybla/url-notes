import { fetchArxivArticleData } from "@/analysis/article/fetch";
import { stringify } from "@/analysis/utility";

console.log(
  stringify(await fetchArxivArticleData("https://arxiv.org/pdf/2508.09856")),
);
console.log(
  stringify(await fetchArxivArticleData("https://arxiv.org/abs/2508.09856")),
);
