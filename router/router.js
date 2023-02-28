class Router {
    constructor(routes){
        this.ROUTES = {
            "/": "/index.html",
            ...routes
        }
        this.re_route()
        window.onpopstate = this.re_route
        
    }

    router_main(event){

        event = event || window.event
        event.preventDefault()
        event.stopPropagation()
        window.history.pushState({}, '', event.target.href)
        this.re_route()
        
    }

    async re_route(){
        const PATH = window.location.pathname
        const ROUTE = this.ROUTES[PATH] || this.ROUTES[404]
        const CONTENT = await fetch(ROUTE).then(data=>data.text())
        this.#re_route_content(CONTENT)
    }

    #re_route_content(CONTENT){
        if(document.getElementById("root")) document.getElementById("root").remove()
        const ROOT = document.createElement("div")
        ROOT.id = "root"
        ROOT.innerHTML = CONTENT
        document.body.appendChild(ROOT)
    }
}

const r = new Router(routes)