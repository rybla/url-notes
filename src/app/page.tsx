import Link from "next/link";
import styles from "./page.module.css";
import Header from "@/component/Header";

export default async function Page() {
  return (
    <div className={styles.Page}>
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
      <Header path={[<span key={0}>index</span>]} />
    </div>
  );
}
