import Link from "next/link";
import styles from "./page.module.css";

function get_title() {
  return "url-notes | index";
}

export default async function Page() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>{get_title()}</div>
      <div className={styles.content}>
        <div className={styles.links}>
          <div className={styles.link}>
            <Link href="https://github.com/rybla/url-notes">source</Link>
          </div>
          <div className={styles.link}>
            <Link href="/all/0">all</Link>
          </div>
          <div className={styles.link}>
            <Link href="/tags">tags</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
