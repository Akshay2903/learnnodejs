const http = require('http')

const server = http.createServer((req,res) => {
    console.log("Akshay")
    process.exit()
})

server.listen(4000)
