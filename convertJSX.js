class convert{

    src
    out

    constructor({
        src_dir,
        out_dir,
        
    }){
        this.src = src_dir
        this.out = out_dir
    }
}

let c = new convert({src_dir : "something", out_dir : "something else"})

console.log(c)