/*
This script is designed to clean up a directory by deleting Markdown (.md) files
that are either completely empty or contain only whitespace characters (like spaces,
tabs, or newlines).

The script is organized into a few key parts:
1.  Imports: It imports the necessary built-in Node.js modules, `fs` for file
    system operations (reading directories, checking file stats, reading and
    deleting files) and `path` for handling and constructing file paths in a
    cross-platform way.

2.  The `processDirectory` function: This is the core of the script. It's a
    recursive function that takes a single argument: the path to the directory
    it should process.
    - It reads all the entries (files and subdirectories) within the given directory.
    - It then loops through each entry. For each one, it creates the full path.
    - It checks if the entry is a directory or a file.
    - If it's another directory, it calls itself (recursively) to process that
      subdirectory.
    - If it's a file and its name ends with `.md`, it proceeds to check the
      file's content. It reads the entire file into a string. If the string,
      after trimming all leading and trailing whitespace, has a length of 0,
      the file is considered empty.
    - If the file is deemed empty, the script deletes it using `fs.unlinkSync`
      and prints a confirmation message to the console.

3.  Execution Block: This is the part that runs when you execute the script.
    - It retrieves the target directory from the command-line arguments.
    - It performs basic validation to ensure a directory path was actually
      provided. If not, it prints a usage message and exits.
    - It checks if the provided path actually exists and is a directory. If not,
      it prints an error and exits.
    - If the path is valid, it kicks off the cleaning process by calling the
      `processDirectory` function with the target directory path and prints a
      final "Done" message when the process is complete.
*/

import fs from "fs";
import path from "path";

const targetDirectory = process.argv[2];

if (!targetDirectory) {
  console.error("Usage: delete-empty-files.ts <directory_path> <extension>");
  process.exit(1);
}

const extension = process.argv[3];

if (!extension) {
  console.error("Usage: delete-empty-files.ts <directory_path> <extension>");
  process.exit(1);
}

console.log(
  `Starting to scan ${targetDirectory} to delete empty files with extension ${extension}`,
);

if (
  !fs.existsSync(targetDirectory) ||
  !fs.statSync(targetDirectory).isDirectory()
) {
  console.error(
    `Error: The path "${targetDirectory}" is not a valid directory.`,
  );
  process.exit(1);
}

console.log(`Starting to scan directory: ${targetDirectory}`);

function processDirectory(directoryPath: string): void {
  try {
    const entries = fs.readdirSync(directoryPath);

    for (const entry of entries) {
      const fullPath = path.join(directoryPath, entry);
      const stats = fs.statSync(fullPath);

      if (stats.isDirectory()) {
        processDirectory(fullPath);
      } else if (path.extname(fullPath).endsWith(extension)) {
        const content = fs.readFileSync(fullPath, "utf-8");
        if (content.trim().length === 0) {
          fs.unlinkSync(fullPath);
          console.log(`Deleted empty file: ${fullPath}`);
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${directoryPath}:`, error);
  }
}

processDirectory(targetDirectory);
console.log("Scan complete.");
