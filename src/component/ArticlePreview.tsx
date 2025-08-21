import { ArticlePreview } from "@/analysis/ontology";
import Link from "next/link";
import Markdown from "react-markdown";
import styles from "./ArticlePreview.module.css";

export default function ArticlePreviewComponent(props: {
  preview: ArticlePreview;
}) {
  return (
    <div className={styles.ArticlePreview}>
      <div className={styles.title}>
        <Link href={props.preview.metadata.url} target="_blank">
          {props.preview.metadata.title ?? props.preview.metadata.url}
        </Link>
      </div>
      {props.preview.tags && (
        <div className={styles.tags}>
          {props.preview.tags.map((tag, j) => (
            <Link
              className={styles.tag}
              key={j}
              href={`/tag/${encodeURIComponent(tag)}`}
            >
              {tag}
            </Link>
          ))}
        </div>
      )}
      {props.preview.summary && (
        <div className={styles.summary}>
          <Markdown>{props.preview.summary}</Markdown>
        </div>
      )}
    </div>
  );
}
