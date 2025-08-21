import styles from "./FocusSpan.module.css";

export default function FocusSpan({ children }: { children: React.ReactNode }) {
  return <span className={styles.FocusSpan}>{children}</span>;
}
