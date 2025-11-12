import fs from "node:fs/promises";
import path from "node:path";

/**
 *
 * @param {String} dir - The directory path to walk through
 * @returns {AsyncGenerator<String>} - An async generator yielding file paths
 *
 * This function recursively walks through a directory and yields the paths of all files found.
 *
 * @author https://github.com/midudev/la-velada-web-oficial
 */
async function* walkDirectory(dir) {
  const files = await fs.readdir(dir, { withFileTypes: true });
  for (const file of files) {
    const res = path.resolve(dir, file.name);
    if (file.isDirectory()) {
      yield* walkDirectory(res);
    } else {
      yield res;
    }
  }
}
