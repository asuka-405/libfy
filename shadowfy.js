const Compiler_HTML = require("./compilers/Compiler_HTML")
const Compiler_JSX = require("./compilers/Compiler_JSX")

const ch = new Compiler_HTML({
    src_dir: "./src",
    out_dir: "./out"
})

const cj = new Compiler_JSX({
    src_dir: "./sj",
    out_dir: "./oj"
})

ch.convert()
cj.convert()