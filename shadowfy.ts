/**
 *
 *
 * @file shadowfy.ts
 * @module shadowfy
 * @description Implementation of the main algorithm to process pages and write them to output directory. Main logic is implemented the respective helper functions.
 * @requires module:helpers/extractor
 * @requires module:helpers/preProcess
 * @requires module:helpers/processor
 * @requires module:helpers/writer
 * @requires module:types
 *
 */

import { extractPagesFromDir } from "./helpers/extractor"
import preProcessPages from "./helpers/preProcess"
import { processPage } from "./helpers/processor"
import { writePagesToOutputDir } from "./helpers/writer"
import { page } from "./types"

/**
 *
 * @constant PAGES_TO_PROCESS - Array of pages to process
 *
 * @example
 * PAGES_TO_PROCESS = [
 *  {
 *    name: "index",
 *    path: "./src/pages/index.tsx",
 *    content: `const`,
 *    id: "index",
 *  },
 * ]
 */

const PAGES_TO_PROCESS: Array<page> = []

/**
 *
 * @function shadowfy - Main function to process pages and write them to output directory
 * @param {Array<string>} dirs - Array of directory paths to extract pages from
 * @param {Array<string>} pages - Array of pages' paths to process
 * @param {object} options - Options object to configure shadowfy behavior
 * @returns {void} - Returns nothing
 *
 * @example
 * shadowfy(["./src/pages"], ["./src/pages/index.tsx"], {})
 *
 */

const shadowfy = (
  dirs: Array<string>,
  pages: Array<string>,
  options: object
) => {
  /**
   * @task Extraction - Extract .html/.htm/.md/.mdx pages from directories
   */
  dirs.forEach((dir) => pages.push(...extractPagesFromDir(dir)))

  /**
   * @task Pre-process pages - extract name, path, content from page and assign an ID
   */
  pages.forEach((page) => PAGES_TO_PROCESS.push(...preProcessPages([page])))

  /**
   * @task Process pages - do a DFS and combine all the components used and write them in the main page
   */
  PAGES_TO_PROCESS.forEach((page, index) => {
    PAGES_TO_PROCESS[index] = processPage(page)
  })

  /**
   * @task Write pages to output directory - write the processed pages to output directory
   * @todo Add support for writing to a custom directory
   * @todo Add support for writing to a custom file name and extension
   */
  writePagesToOutputDir(PAGES_TO_PROCESS)
}

export default shadowfy
