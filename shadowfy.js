const fs = require("fs")
const path = require("path")
const babel = require("@babel/core")
const {babel_proc, register_comp }= require("./utils.shadowfy.js")


const shadowfy = (root_path, root_name)=>{

    if(babel == undefined){
        console.error("@babel/core not found!!")
        return
    }
    else if(require("@babel/preset-react") == undefined){
        console.error("@babel/preset-react not found!!")
        return
    }

    let sf_queue = [
        {
            in_path: root_path,
            out_name: root_name,
            out_path: `./${root_name}`
        }
    ]
    if(!fs.existsSync(sf_queue[0].out_path))
    fs.mkdirSync(sf_queue[0].out_path)
    
    while(sf_queue.length > 0){
        let cur_item = sf_queue[0]
        fs.readdirSync(cur_item.in_path, {withFileTypes: true}).forEach( item => {
            if(item.isDirectory()){
                let sf_queue_item = {
                    in_path: `${cur_item.in_path}/${item.name}`,
                    out_name: item.name,
                    out_path: `${cur_item.out_path}/${item.name}`
                }
                sf_queue.push(sf_queue_item)
                if(!fs.existsSync(sf_queue_item.out_path))
                    fs.mkdirSync(sf_queue_item.out_path)
            } else{
                let cur_file = fs.readFileSync(`${cur_item.in_path}/${item.name}`).toString()
                cur_file = babel_proc(cur_file)
                cur_file = register_comp(cur_file, path.parse(item.name).name)
                fs.writeFileSync(`${cur_item.out_path}/${item.name}`, cur_file)
            }

        });

        sf_queue.shift()
    }

}

 module.exports = shadowfy