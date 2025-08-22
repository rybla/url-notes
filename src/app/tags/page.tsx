import { readArticleTags } from "@/analysis/article/read";
import paths from "@/analysis/paths";
import AppPage from "@/component/AppPage";
import LinkButton from "@/component/LinkButton";
import styles from "./page.module.css";

export default async function Page() {
  const ids_all = await paths.get_articleIds();
  const tags_all: Set<string> = new Set();
  for (const id of ids_all) {
    const tags = await readArticleTags(id);
    if (!tags) continue;
    for (const tag of tags) {
      tags_all.add(tag);
    }
  }

  return (
    <AppPage
      path={[
        <LinkButton href="/" vertical={true} key={0}>
          index
        </LinkButton>,
        <LinkButton href="/tags" vertical={true} key={1}>
          tags
        </LinkButton>,
      ]}
    >
      <div className={styles.tags}>
        {Array.from(tags_all).map((tag, i) => (
          <div className={styles.tag} key={i}>
            <LinkButton href={`/tag/${tag}`}>{tag}</LinkButton>
          </div>
        ))}
      </div>
    </AppPage>
  );
}
