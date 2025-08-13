import {
  readArticleMetadata,
  readArticleSummary,
  readArticleTags,
} from "@/analysis/article";
import { ArticlePreview } from "@/analysis/ontology";
import paths from "@/analysis/paths";
import ArticlePreviewComponent from "@/component/ArticlePreview";
import { Metadata } from "next";
import "./page.global.css";
import styles from "./page.module.css";

type Params = {
  tag: string;
};

type Props = {
  params: Promise<Params>;
};

const ids_all = await paths.get_ids_of_articles();

const mds_all = (
  await Promise.all(ids_all.map(async (id) => await readArticleMetadata(id)))
).filter((md) => md !== null);
// sorted from newest (higher `addedTime` value) to oldest
mds_all.sort((x, y) => y.addedTime - x.addedTime);

const previews_all: ArticlePreview[] = await Promise.all(
  mds_all.map(async (md) => {
    return {
      metadata: md,
      summary: (await readArticleSummary(md.id)) ?? undefined,
      tags: (await readArticleTags(md.id)) ?? undefined,
    };
  }),
);

function get_title(tag: string) {
  return `url-notes | tag | ${tag}`;
}

export async function generateStaticParams(): Promise<Params[]> {
  const tags: Set<string> = new Set();
  for (const preview of previews_all) {
    if (preview.tags) {
      for (const tag of preview.tags) {
        tags.add(tag);
      }
    }
  }

  return Array.from(tags).map((tag) => ({ tag: encodeURIComponent(tag) }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const tag = decodeURIComponent(params.tag);
  return {
    title: get_title(tag),
  };
}

export default async function Page(props: Props) {
  const params = await props.params;
  const tag = decodeURIComponent(params.tag);
  const previews = previews_all.filter((preview) =>
    preview.tags?.includes(tag),
  );

  return (
    <div className={styles.page}>
      <div className={styles.header}>{get_title(tag)}</div>
      <div className={styles.content}>
        <div className={styles.previews}>
          {previews.map((preview, i) => (
            <ArticlePreviewComponent key={i} preview={preview} />
          ))}
        </div>
      </div>
    </div>
  );
}
