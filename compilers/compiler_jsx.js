const { compiler } = require("./compiler")

class compiler_jsx extends compiler {
  compile_proc(file_string) {
    return this.register_comp(this.babel_proc(file_string))
  }

  babel_proc(file_string) {
    file_string = "//@jsx make_comp\n//@jsxFrag jsx_frag\n" + file_string
    return babel.transformSync(file_string, {
      presets: ["@babel/preset-react"],
    }).code
  }

  register_comp(file_string, comp_name) {
    file_string = delete_comments(file_string)
    const comp_class = require("./templates.js").only_connected.replace(
      /component_name/g,
      comp_name
    )
    return file_string + "\n" + comp_class
  }
  delete_comments(file_string){
    return file_string
      .replace(/\/\*.+?\*\/.*(?=[\n\r])/g, "")
      .split(/\r?\n/)
      .filter((line) => line.trim() !== "")
      .join("\n")
    // .replace(/\/\*.+?\*\/|\/\/.*(?=[\n\r])/g, "")
  }
}

const c = new compiler_jsx('../src', '../out')