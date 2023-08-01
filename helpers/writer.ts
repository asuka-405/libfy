import { page } from "../types"

export const writePagesToOutputDir = (pages: Array<page>) => {
  pages.forEach((page) => {
    console.log(page)
  })
}
