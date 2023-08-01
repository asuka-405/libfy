import { page } from "../types"

export const processPage = (page: page): page => {
  return {
    ...page,
    content: `const`,
  }
}
