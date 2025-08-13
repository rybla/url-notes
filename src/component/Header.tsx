import { ReactNode } from "react";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header(props: { path: ReactNode[] }) {
  return (
    <div className={styles.Header}>
      <div className={styles.item}>
        <Link href="/">url-notes</Link>
      </div>
      {props.path.map((item, i) => [
        <div className={styles.separator} key={`separator-${i}`}>
          {"|"}
        </div>,
        <div className={styles.item} key={`item-${i}`}>
          {item}
        </div>,
      ])}
    </div>
  );
}
