// const babel = require('@babel/core')
// const Compiler = require("./compiler.js")

// class Compiler_JSX extends Compiler {
//   compile_proc(file_string) {
//     return this.babel_proc(file_string)
//   }

//   babel_proc(file_string) {
//     file_string = "//@jsx make_comp\n//@jsxFrag jsx_frag\n" + file_string
//     return babel.transformSync(file_string, {
//       presets: ["@babel/preset-react"],
//     }).code
//   }
//   // delete_comments(file_string){
//   //   return file_string
//   //     .replace(/\/\*.+?\*\/.*(?=[\n\r])/g, "")
//   //     .split(/\r?\n/)
//   //     .filter((line) => line.trim() !== "")
//   //     .join("\n")
//   //   // .replace(/\/\*.+?\*\/|\/\/.*(?=[\n\r])/g, "")
//   // }
// }

// module.exports = Compiler_JSX