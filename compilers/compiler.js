const fs = require("fs")
const path = require('path')

class Compiler {
  constructor(props={ src_dir, out_dir }) {
    this.src = props.src_dir
    this.out = props.out_dir
    this.queue = [
      {
        src: props.src_dir,
        out: props.out_dir,
        out_name: this.getName(props.out_dir)
      },
    ]
  }
  convert() {
    if (!fs.existsSync(this.queue[0].out)) fs.mkdirSync(this.queue[0].out)
    while (this.queue.length > 0) {
      fs.readdirSync(this.queue[0].src, { withFileTypes: true }).forEach(
        (item) => {
          if (item.isDirectory()) this.dir_proc(item)
          else this.file_proc(item)
        }
      )
      this.queue.shift()
    }
  }
  getName(path) {
    let split = path.split("/")
    if (split[split.length - 1] == "") return split[split.length - 2]
    return split[split.length - 1]
  }
  compile_proc(file_string, comp_name){}

  dir_proc(item) {
    let queue_item = {
      src: `${this.queue[0].src}/${item.name}`,
      out: `${this.queue[0].out}/${item.name}`,
      out_name: item.name,
    }
    this.queue.push(queue_item)
    if (!fs.existsSync(queue_item.out)) fs.mkdirSync(queue_item.out)
  }

  file_proc(item) {
    let cur_file = fs
      .readFileSync(`${this.queue[0].src}/${item.name}`)
      .toString()
    let comp_name = path.parse(item.name).name
    cur_file = this.compile_proc(cur_file, comp_name)
    cur_file = this.register_comp(cur_file, comp_name)
    if(cur_file === undefined) cur_file = "//empty file if waste of computation 💀"
    fs.writeFileSync(`${this.queue[0].out}/${comp_name}.js`, cur_file) //==============
  }

  register_comp(file_string, comp_name) {
    const comp_class = require("./templates.js").only_connected.replace(
      /component_name/g,
      comp_name
    )
    return file_string + "\n" + comp_class
  }
}

module.exports = Compiler