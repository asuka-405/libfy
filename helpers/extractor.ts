import { readdirSync, statSync } from "fs"

export const extractPagesFromDir = (dir: string): Array<string> => {
  if (!statSync(dir).isDirectory())
    throw new Error(
      `Path ${dir} is not a directory, check your directory paths array!`
    )
  const files = readdirSync(dir)
  for (const fileOrDir of files) {
    const path = `${dir}/${fileOrDir}`
    if (statSync(path).isDirectory()) files.push(...extractPagesFromDir(path))
    else if (
      fileOrDir.endsWith(".html") ||
      fileOrDir.endsWith(".htm") ||
      fileOrDir.endsWith(".md") ||
      fileOrDir.endsWith(".mdx")
    )
      files.push(path)
    files.shift()
  }
  return files
}
