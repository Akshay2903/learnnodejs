const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.write("Welcome to the Home")
        res.end()
    }
    if(req.url === "/about"){
        res.write("Welcome to About us Page")
        res.end()
    }
    if(req.url === "/node"){
        res.write("Welcome to NodeJs")
        res.end()
    }
    res.write("wrogn url")
    res.end()
})

server.listen(3000)