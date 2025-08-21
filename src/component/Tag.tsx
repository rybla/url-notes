import Link from "next/link";
import styles from "./Tag.module.css";

export default function Tag(props: { tag: string }) {
  // return (
  //   <Link className={styles.Tag} href={`/tag/${encodeURIComponent(props.tag)}`}>
  //     {props.tag}
  //   </Link>
  // );

  return (
    <div className={styles.Tag}>
      {"#"}
      {props.tag}
    </div>
  );
}
