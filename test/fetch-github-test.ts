import {
  fetchGithubRepositoryData,
  fetchGithubRepositoryReadme,
} from "@/analysis/article/fetch";
import { stringify } from "@/analysis/utility";

console.log(
  stringify({
    readme: await fetchGithubRepositoryReadme(
      "https://github.com/rerun-io/rerun#development",
    ),
  }),
);

console.log(
  stringify({
    data: await fetchGithubRepositoryData(
      "https://github.com/rerun-io/rerun#development",
    ),
  }),
);
