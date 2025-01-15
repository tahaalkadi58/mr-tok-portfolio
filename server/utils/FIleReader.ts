import { readFile } from "node:fs/promises";
const FileReader = async function (filename: string) {
  try {
    return await readFile(filename, "utf8");
  } catch (err) {
    throw new Error(`can't read file: ${filename}`);
  }
};

export default FileReader;
