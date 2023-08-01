import { page } from "../types"

const preProcessPages = (pages: Array<string>): Array<page> => {
  return [
    {
      name: "preProcessPages",
      path: "helpers/preProcess.ts",
      content: `const`,
      id: "preProcessPages",
    },
  ]
}

export default preProcessPages
