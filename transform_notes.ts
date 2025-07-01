/**
 * Apply transformations to _all_ saved notes
 */

import config from "@/config";
import { Note } from "@/ontology";
import * as fs from "fs/promises";

const note_filenames = await fs.readdir(config.notes_dirpath);
console.log(note_filenames);

for (const note_filename of note_filenames) {
  const note_filepath = `${config.notes_dirpath}/${note_filename}`;
  const text = await fs.readFile(note_filepath, "utf8");
  const note_data = JSON.parse(text);
  const note = Note.parse(note_data);

  // transformations
  note.tags = note.tags?.map((tag) => tag.toLowerCase());

  await fs.writeFile(note_filepath, JSON.stringify(note));
}
