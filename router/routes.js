const routes = {
    "/":"/index.html",
    "/1":"/1.html",
    "/2":"/2.html"
}

function addRoute(route, path){
    routes[route] = path
}