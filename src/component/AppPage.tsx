import { ReactNode } from "react";
import styles from "./AppPage.module.css";
import { intercalate } from "@/analysis/utility";

export default function AppPage(props: {
  path: ReactNode[];
  children: ReactNode;
}) {
  return (
    <div className={styles.AppPage}>
      <div className={styles.toolbar}>
        <div className={styles.navigation}>
          {intercalate(
            (i) => [
              <div className={styles.item} key={`sep-${i}`}>
                {"←"}
              </div>,
            ],
            props.path.map((x, i) => (
              <div className={styles.item} key={`item-${i}`}>
                {x}
              </div>
            )),
          )}
        </div>
        <div className={styles.cornerstone}></div>
      </div>
      <div className={styles.main}>{props.children}</div>
    </div>
  );
}
