import { fetchArticle } from "@/analysis/article";
import { cacheJson } from "@/analysis/cache";
import { makeConsole } from "@/analysis/console";
import { fetchFeed } from "@/analysis/feed";
import { readJsonFile } from "@/analysis/file";
import { Article, ArticleMetadata, RssFeedConfig } from "@/analysis/ontology";
import paths from "@/analysis/paths";
import { do_, formatDate, normString } from "@/analysis/utility";
import filenamifyUrl from "filenamify-url";
import z from "zod";
const { error, log } = makeConsole({ __filename });

// -----------------------------------------------------------------------------

const articleIds_ignored = cacheJson(
  paths.filepath_articeIds_ignored,
  z.array(z.string()),
  async () => [],
);
