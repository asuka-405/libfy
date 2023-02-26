const fs = require("fs")

class compiler {
  constructor({ src_dir, out_dir }) {
    this.src = src_dir
    this.out = out_dir
    this.queue = [
      {
        src: src_dir,
        out: out_dir,
        out_name: this.getName(out_dir)
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
  compile_proc(){}

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
    cur_file = this.compile_proc(cur_file)
    if(cur_file === undefined) cur_file = "//empty file if waste of computation 💀"
    fs.writeFileSync(`${this.queue[0].out}/${item.name}`, cur_file) //==============
  }
}

const comp = new compiler({
    src_dir:"./srcc",
    out_dir: "./outt",
})

comp.convert()