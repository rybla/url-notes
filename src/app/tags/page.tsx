import Link from "next/link";
import styles from "./page.module.css";
import paths from "@/analysis/paths";
import { readArticleTags } from "@/analysis/article";

function get_title() {
  return "url-notes | tags";
}

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
      <div className={styles.header}>
        <div className={styles.item}>
          <Link href="/">url-notes</Link>
        </div>
        <div className={styles.separator}>{"|"}</div>
        <div className={styles.item}>tags</div>
      </div>
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
