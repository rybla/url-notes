import {
  readArticleMetadata,
  readArticleSummary,
  readArticleTags,
} from "@/analysis/article";
import { ArticlePreview } from "@/analysis/ontology";
import paths from "@/analysis/paths";
import ArticlePreviewComponent from "@/component/ArticlePreview";
import { Metadata } from "next";
import styles from "./page.module.css";
import { cache } from "react";
import Link from "next/link";
import Header from "@/component/Header";

type Params = {
  tag: string;
};

type Props = {
  params: Promise<Params>;
};

const getCachedData = cache(async () => {
  const ids_all = await paths.get_articleIds();

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

  return { ids_all, mds_all, previews_all };
});

export async function generateStaticParams(): Promise<Params[]> {
  const { previews_all } = await getCachedData();
  const tags: Set<string> = new Set();
  for (const preview of previews_all) {
    if (preview.tags) {
      for (const tag of preview.tags) {
        tags.add(tag);
      }
    }
  }

  // TMP: disable tags
  if (true) {
    return Array.from(tags)
      .slice(0, 1)
      .map((tag) => ({ tag: encodeURIComponent(tag) }));
  } else {
    return Array.from(tags).map((tag) => ({ tag: encodeURIComponent(tag) }));
  }
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const tag = decodeURIComponent(params.tag);
  return {
    title: `url-notes | tag | ${tag}`,
  };
}

export default async function Page(props: Props) {
  const params = await props.params;
  const tag = decodeURIComponent(params.tag);
  const { previews_all } = await getCachedData();
  const previews = previews_all.filter((preview) =>
    preview.tags?.includes(tag),
  );

  return (
    <div className={styles.Page}>
      <Header
        path={[
          <Link key={0} href="/tags">
            tag
          </Link>,
          <Link key={1} href="/tags">
            tag
          </Link>,
          <span key={2}>{tag}</span>,
        ]}
      />
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
