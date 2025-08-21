import { ArticlePreview } from "@/analysis/ontology";
import Link from "next/link";
import Markdown from "react-markdown";
import styles from "./ArticlePreview.module.css";
import { formatDate } from "@/analysis/utility";
import Tag from "./Tag";
import LinkButton from "./LinkButton";

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
            <Tag tag={tag} key={j} />
          ))}
        </div>
      )}
      {props.preview.metadata.publishedTime && (
        <div className={styles.publishedTime}>
          {"published: "}
          {props.preview.metadata.publishedTime instanceof Date
            ? formatDate(props.preview.metadata.publishedTime)
            : props.preview.metadata.publishedTime}
        </div>
      )}
      {props.preview.summary && (
        <div className={styles.summary}>
          <Markdown>{props.preview.summary}</Markdown>
        </div>
      )}
      <div className={styles.footer}>
        <LinkButton href={props.preview.metadata.url} target="_blank">
          🔗
        </LinkButton>
      </div>
    </div>
  );
}
