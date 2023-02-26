const Compiler = require("./compiler");

class Compiler_HTML extends Compiler{
    compile_proc(file_string, comp_name){
        file_string = "const " + comp_name + "= `" + file_string + "`" 
        return file_string
    }
}

module.exports = Compiler_HTML