const Compiler = require("./compilers/Compiler")
const ch = new Compiler({
    src_dir: "./src",
    out_dir: "./out"
})

ch.convert()