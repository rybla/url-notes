import config from "@/config";
import { Note } from "@/ontology";
import { do_, encodeURIComponent_better } from "@/utility";
import { Readability } from "@mozilla/readability";
import * as fs from "fs/promises";
import { JSDOM } from "jsdom";
import { generateMetadataOfArticle } from "./ai";
import favicon from "@victr/favicon-fetcher";

export async function fetchNotes(): Promise<Note[]> {
  const getFilenameOfURL = (href: string) =>
    `${encodeURIComponent_better(href)}.json`;

  if (!(await fs.exists(config.notes_dirpath)))
    await fs.mkdir(config.notes_dirpath);

  const urls_failed: string[] = [];

  const content = await fs.readFile(config.input_filepath, {
    encoding: "utf8",
  });
  const lines = content.split("\n").filter((s) => s.length > 0);

  console.log(`lines to process: ${lines.length}`);

  for (const line of lines) {
    console.log(`processing ${line}`);

    const url_parsed = do_(() => {
      try {
        return new URL(line);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.warn(`Invalid URL: ${line}\n${error.toString()}`);
          urls_failed.push(line);
          return undefined;
        } else throw error;
      }
    });

    if (url_parsed === undefined) continue;

    const url = `${url_parsed.origin}${url_parsed.pathname}`;

    const note_filepath = `${config.notes_dirpath}/${getFilenameOfURL(url)}`;
    if (!(await fs.exists(note_filepath))) {
      const note = await generateNote(url);
      await fs.writeFile(note_filepath, JSON.stringify(note), {
        encoding: "utf8",
      });
    }
  }

  await fs.writeFile(config.input_filepath, urls_failed.join("\n"));

  const notes: Note[] = [];
  const note_filenames = await fs.readdir(config.notes_dirpath);
  for (const note_filename of note_filenames) {
    const note_filepath = `${config.notes_dirpath}/${note_filename}`;
    try {
      const text = await fs.readFile(note_filepath, "utf8");
      const note_data = JSON.parse(text);
      const note = Note.parse(note_data);
      notes.push(note);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.warn(
          `Error reading note: ${note_filepath}\n${error.toString()}`,
        );
      } else throw error;
    }
  }

  return notes;
}

async function generateNote(url: string): Promise<Note> {
  console.log(`generateNote("${url}")`);

  const faviconUrl = await fetchFavicon(url);

  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const dateString = `${year}-${month}-${day}`;
  console.log(`• dateString = ${dateString}`);

  const article = await fetchArticle(url);
  article.textContent = article.textContent?.trim();
  console.log(
    `• article.textContent = ${article.textContent === undefined ? "undefined" : `${article.textContent.slice(0, 40)} ...`}`,
  );

  const { abstract, tags } = await do_(async () => {
    if (article.textContent === undefined)
      return { abstract: undefined, tags: undefined };

    return await generateMetadataOfArticle({
      url,
      content: article.textContent,
    });
  });

  console.log(
    `• abstract = ${abstract === undefined ? "undefined" : `${abstract.slice(0, 40)} ...`}`,
  );
  console.log(
    `• tags = ${tags === undefined ? "undefined" : `${tags.join(", ")}`}`,
  );

  return {
    url,
    faviconUrl,
    date: dateString,
    name: article.title,
    tags,
    abstract,
  };
}

type Article = {
  /** article title */
  title?: string;

  /** HTML string of processed article content */
  content?: string;

  /** text content of the article, with all the HTML tags removed */
  textContent?: string;

  /** length of an article, in characters */
  length?: number;

  /** article description, or short excerpt from the content */
  excerpt?: string;

  /** author metadata */
  byline?: string;

  /** content direction */
  dir?: string;

  /** name of the site */
  siteName?: string;

  /** content language */
  lang?: string;

  /** published time */
  publishedTime?: string;
};

async function fetchArticle(url: string): Promise<Article> {
  try {
    const res = await fetch(url);
    const dom = new JSDOM(await res.text(), { url });
    const reader = new Readability(dom.window.document);
    const article = reader.parse();
    if (article === null) throw new Error(`Failed to parse article`);
    return Object.entries(article).reduce(
      (acc, [k, v]) => ({ ...acc, [k]: v === null ? undefined : v }),
      {} as Article,
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.toString());
      return {};
    } else {
      throw error;
    }
  }
}

async function fetchFavicon(url: string): Promise<string> {
  try {
    return await favicon.text(url);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.toString());
      return config.default_favicon_url;
    } else {
      throw error;
    }
  }
}
