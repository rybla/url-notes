import {
  readArticleMetadata,
  readArticleSummary,
  readArticleTags,
} from "@/analysis/article";
import { ArticlePreview } from "@/analysis/ontology";
import paths from "@/analysis/paths";
import AppPage from "@/component/AppPage";
import ArticlePreviewComponent from "@/component/ArticlePreview";
import LinkButton from "@/component/LinkButton";
import { Metadata } from "next";
import { cache } from "react";
import styles from "./page.module.css";
import FocusSpan from "@/component/FocusSpan";

const config = {
  articles_per_page: 10,
};

type Params = {
  pageIndex: string;
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

  const pageIndex_max =
    Math.ceil(ids_all.length / config.articles_per_page) - 1;

  const count_pages = Math.ceil(ids_all.length / config.articles_per_page);

  return { ids_all, mds_all, previews_all, pageIndex_max, count_pages };
});

function get_title(pageIndex: number, pageIndex_max: number) {
  return `url-notes | all | page ${pageIndex + 1} of ${pageIndex_max + 1}`;
}

export async function generateStaticParams(): Promise<Params[]> {
  const { count_pages } = await getCachedData();
  const ps: Params[] = [];
  for (let i = 0; i < count_pages; i++) {
    ps.push({ pageIndex: `${i}` });
  }
  return ps;
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const pageIndex = Number(params.pageIndex);
  const { pageIndex_max } = await getCachedData();
  return {
    title: get_title(pageIndex, pageIndex_max),
  };
}

export default async function Page(props: Props) {
  const params = await props.params;
  const pageIndex = Number(params.pageIndex);
  const { previews_all, pageIndex_max } = await getCachedData();
  const previews = previews_all.slice(
    pageIndex * config.articles_per_page,
    (pageIndex + 1) * config.articles_per_page,
  );

  return (
    <AppPage
      path={[
        <LinkButton href="/" vertical={true} key={0}>
          index
        </LinkButton>,
        <LinkButton href="/all/0" vertical={true} key={0}>
          all
        </LinkButton>,
      ]}
    >
      <div className={styles.previews}>
        {previews.flatMap((preview, i) => [
          <div className={styles.addedDate} key={`sep-${i}`}>
            {preview.metadata.addedDate}
          </div>,
          <ArticlePreviewComponent key={i} preview={preview} />,
        ])}
      </div>
      <div className={styles.toolbar}>
        <div className={styles.navigation}>
          <LinkButton
            href={`/all/${Number(params.pageIndex) - 1}`}
            disabled={!(0 < Number(params.pageIndex))}
          >
            newer
          </LinkButton>
          <LinkButton
            href={`/all/${Number(params.pageIndex) + 1}`}
            disabled={!(Number(params.pageIndex) < pageIndex_max)}
          >
            older
          </LinkButton>
        </div>
        <div className={styles.location}>
          page <FocusSpan>{pageIndex + 1}</FocusSpan> of {pageIndex_max + 1}
        </div>
      </div>
    </AppPage>
  );
}
