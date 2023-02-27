const CompilerI = require('./CompilerI')
const babel = require('@babel/core')
const path = require("path")

class Compiler extends CompilerI {
  compile_proc(file_string, comp_name) {
    if (this.Ext_equals(comp_name, "html") || this.Ext_equals(comp_name, "htm"))
    return this.Compiler_HTML(file_string, path.parse(comp_name).name)
    else if (this.Ext_equals(comp_name, ".js"))
    return this.Compiler_JSX(file_string)
  }
  
  Compiler_HTML(file_string, comp_name) {
    file_string = "const " + comp_name + "= `" + file_string + "`"
    return file_string
  }
  Compiler_JSX(file_string) {
    file_string = "//@jsx make_comp\n//@jsxFrag jsx_frag\n" + file_string
    return babel.transformSync(file_string, {
      presets: ["@babel/preset-react"],
    }).code
  }
  Ext_equals(name, ext) {
    if (path.extname(name) == ext) return true
    return false
  }
}

module.exports = Compiler
