const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url == '/'){
        res.end("Akshay")
    }
})

server.listen(4000)
