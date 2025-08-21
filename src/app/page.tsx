import AppPage from "@/component/AppPage";
import LinkButton from "@/component/LinkButton";
import styles from "./page.module.css";

export default async function Page() {
  return (
    <AppPage
      path={[
        <LinkButton href="/" vertical={true} key={0}>
          index
        </LinkButton>,
      ]}
    >
      <div className={styles.title}>url-notes</div>
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
