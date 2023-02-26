const fs = require("fs")
const babel = require("@babel/core")
const {convert }= require("./utils.shadowfy.js")


const shadowfy = (root_path, root_name)=>{

    if(babel == undefined){
        console.error("@babel/core not found!!")
        return
    }
    else if(require("@babel/preset-react") == undefined){
        console.error("@babel/preset-react not found!!")
        return
    }

    iterate

}

 module.exports = shadowfy