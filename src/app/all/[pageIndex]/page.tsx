import {
  readArticleMetadata,
  readArticleSummary,
  readArticleTags,
} from "@/analysis/article";
import paths from "@/analysis/paths";
import ArticlePreviewComponent from "@/component/ArticlePreview";
import { Metadata } from "next";
import Link from "next/link";
import "./page.global.css";
import styles from "./page.module.css";
import { ArticlePreview } from "@/analysis/ontology";

const config = {
  articles_per_page: 2,
};

type Params = {
  pageIndex: string;
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

const pageIndex_max = Math.ceil(ids_all.length / config.articles_per_page) - 1;

const count_pages = Math.ceil(ids_all.length / config.articles_per_page);

function get_title(pageIndex: number, pageIndex_max: number) {
  return `url-notes | all | page ${pageIndex} of ${pageIndex_max}`;
}

export async function generateStaticParams(): Promise<Params[]> {
  const ps: Params[] = [];
  for (let i = 0; i < count_pages; i++) {
    ps.push({ pageIndex: `${i}` });
  }
  return ps;
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const pageIndex = Number(params.pageIndex);
  return {
    title: get_title(pageIndex, pageIndex_max),
  };
}

export default async function Page(props: Props) {
  const params = await props.params;
  const pageIndex = Number(params.pageIndex);
  const previews = previews_all.slice(
    pageIndex * config.articles_per_page,
    (pageIndex + 1) * config.articles_per_page,
  );

  return (
    <div className={styles.page}>
      <div className={styles.header}>{get_title(pageIndex, pageIndex_max)}</div>
      <div className={styles.content}>
        <div className={styles.previews}>
          {previews.map((preview, i) => (
            <ArticlePreviewComponent key={i} preview={preview} />
          ))}
        </div>
      </div>
      <div className={styles.controls}>
        {0 < Number(params.pageIndex) ? (
          <Link
            className={styles.button}
            href={`/all/${Number(params.pageIndex) - 1}`}
          >
            newer
          </Link>
        ) : (
          <div className={[styles.button, styles.disabled].join(" ")}>
            newer
          </div>
        )}
        {Number(params.pageIndex) < pageIndex_max ? (
          <Link
            className={styles.button}
            href={`/all/${Number(params.pageIndex) + 1}`}
          >
            older
          </Link>
        ) : (
          <div className={[styles.button, styles.disabled].join(" ")}>
            older
          </div>
        )}
      </div>
    </div>
  );
}
