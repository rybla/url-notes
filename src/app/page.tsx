import AppPage from "@/component/AppPage";
import LinkButton from "@/component/LinkButton";
import styles from "./page.module.css";
import { trim } from "@/analysis/utility";

export default async function Page() {
  return (
    <AppPage
      path={[
        <LinkButton href="/" vertical={true} key={0}>
          index
        </LinkButton>,
      ]}
    >
      <div className={styles.title}>rybla/url-notes</div>
      <div className={styles.description}>
        <p>
          {trim(`
This web app is the interface for viewing the compiled results from an automated process that collects URLs (to articles or PDFs) from my various feeds and bookmark lists into a single feed. It also performs some simple analysis to extract a preview about the content. I've designed the UI for primarily mobile viewing.
`)}
        </p>
        <br />
        <p>
          {trim(`
My intended use for this setup is to have a central feed that I can fully configure (both manually and automatically) to fill with content I'm interested in but also do some specialized analysis so that I can get a preview of the content before spending the time to start reading it. It just takes too much time to wade through my RSS feeds one item at a time, so this is my solution.
`)}
        </p>
        <br />
        <p>
          {trim(`
Currently, the process populates a summary and set of tags for each item. This is either extracted from associated metadata from the item's original source, or generated via LLM.
`)}
        </p>
      </div>
      <div className={styles.links}>
        <LinkButton href="https://github.com/rybla/url-notes">
          source
        </LinkButton>
        <LinkButton href="/tags">tags</LinkButton>
        <LinkButton href="/all/0">all</LinkButton>
      </div>
    </AppPage>
  );
}
