import styles from "./Tag.module.css";

export default function Tag(props: { tag: string }) {
  return <div className={styles.Tag}>{props.tag}</div>;
}
