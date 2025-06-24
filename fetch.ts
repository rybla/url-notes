import config from "@/config";
import { Note } from "@/ontology";
import { do_, encodeURIComponent_better } from "@/utility";
import * as fs from "fs/promises";

do_(async () => {
  const urls: Set<string> = new Set();
  for (const filepath of config.input_filepaths) {
    try {
      const content = await fs.readFile(filepath, { encoding: "utf8" });
      const lines = content.split("\n");
      for (const line of lines) {
        if (line.length === 0) continue;
        try {
          const url = new URL(line);
          urls.add(`${url.origin}${url.pathname}`);
        } catch (error: unknown) {
          if (error instanceof Error) {
            console.warn(`Invalid URL: ${line}\n${error.toString()}`);
          } else throw error;
        }
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.warn(`Error reading file: ${filepath}\n${error.toString()}`);
      } else throw error;
    }

    const getFilenameOfURL = (href: string) =>
      `${encodeURIComponent_better(href)}.json`;

    if (!(await fs.exists(config.notes_dirpath)))
      await fs.mkdir(config.notes_dirpath);

    for (const url of urls) {
      const note_filepath = `${config.notes_dirpath}/${getFilenameOfURL(url)}`;
      try {
        if (await fs.exists(note_filepath)) {
          const note_content = await fs.readFile(note_filepath, {
            encoding: "utf8",
          });
          const note_data = JSON.parse(note_content);
          const note: Note = Note.parse(note_data);
        } else {
          // TODO: generate abstract
          const note: Note = {
            url,
          };
          await fs.writeFile(note_filepath, JSON.stringify(note), {
            encoding: "utf8",
          });
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.warn(
            `Error reading note: ${note_filepath}\n${error.toString()}`,
          );
        } else throw error;
      }
    }

    //     await fs.writeFile(
    //       `src/notes.ts`,
    //       `
    // ${urls
    //   .values()
    //   .map((url, i) => `import note_${i} from "./note/${getFilenameOfURL(url)}"`)
    //   .toArray()
    //   .join("\n")}
    // `.trim(),
    //       { encoding: "utf8" },
    //     );
  }
});
