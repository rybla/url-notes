import Link from "next/link";
import styles from "./page.module.css";

function get_title() {
  return "url-notes | index";
}

export default function Page() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>{get_title()}</div>
      <div className={styles.content}>
        <Link href="/all/0">all</Link>
      </div>
    </div>
  );
}
