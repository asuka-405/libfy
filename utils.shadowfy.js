const fs = require("fs")
const path = require("path")
const babel = require("@babel/core")

const delete_comments = (file_string) => {
  return file_string
    .replace(/\/\*.+?\*\/.*(?=[\n\r])/g, "")
    .split(/\r?\n/)
    .filter((line) => line.trim() !== "")
    .join("\n")
  // .replace(/\/\*.+?\*\/|\/\/.*(?=[\n\r])/g, "")
}

const babel_proc = (file_string) => {
  file_string = "//@jsx make_comp\n//@jsxFrag jsx_frag\n" + file_string
  return babel.transformSync(file_string, {
    presets: ["@babel/preset-react"],
  }).code
}

const register_comp = (file_string, comp_name) => {
  file_string = delete_comments(file_string)
  const comp_class = require("./templates.js").only_connected.replace(
    /component_name/g,
    comp_name
  )
  return file_string + "\n" + comp_class
}

const dir_proc = (sf_queue) => {
  let sf_queue_item = {
    in_path: `${cur_item.in_path}/${item.name}`,
    out_name: item.name,
    out_path: `${cur_item.out_path}/${item.name}`,
  }
  sf_queue.push(sf_queue_item)
  if (!fs.existsSync(sf_queue_item.out_path))
    fs.mkdirSync(sf_queue_item.out_path)
}

const file_proc = (cur_item, item) => {
  let cur_file = fs.readFileSync(`${cur_item.in_path}/${item.name}`).toString()
  cur_file = babel_proc(cur_file)
  cur_file = register_comp(cur_file, path.parse(item.name).name)
  fs.writeFileSync(`${cur_item.out_path}/${item.name}`, cur_file)
}

const convert = (root_path, root_name) => {
  let sf_queue = [
    {
      in_path: root_path,
      out_name: root_name,
      out_path: `./${root_name}`,
    },
  ]
  if (!fs.existsSync(sf_queue[0].out_path)) fs.mkdirSync(sf_queue[0].out_path)

  while (sf_queue.length > 0) {
    let cur_item = sf_queue[0]
    fs.readdirSync(cur_item.in_path, { withFileTypes: true }).forEach(
      (item) => {
        if (item.isDirectory()) dir_proc(sf_queue)
        else file_proc(cur_item, item)
      }
    )
    sf_queue.shift()
  }
}

module.exports = {
  babel_proc,
  register_comp,
  convert,
}
