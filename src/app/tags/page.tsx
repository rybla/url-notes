import Link from "next/link";
import styles from "./page.module.css";
import paths from "@/analysis/paths";
import { readArticleTags } from "@/analysis/article";
import Header from "@/component/Header";

export default async function Page() {
  const ids_all = await paths.get_ids_of_articles();
  const tags_all: Set<string> = new Set();
  for (const id of ids_all) {
    const tags = await readArticleTags(id);
    if (!tags) continue;
    for (const tag of tags) {
      tags_all.add(tag);
    }
  }

  return (
    <div className={styles.Page}>
      <Header path={[<span key={0}>tags</span>]} />
      <div className={styles.content}>
        <div className={styles.tags}>
          {Array.from(tags_all).map((tag, i) => (
            <div className={styles.tag} key={i}>
              <Link href={`/tag/${encodeURIComponent(tag)}`}>{tag}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
