const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('welcome to our home page')
    }
    else if(req.url === '/about'){
        res.end('We are best among all')
    }
    else {res.end(`
    <h1>OOPS !</h1>
    <p> we can't seem to find the page you are looking for </p>
    <a href='/'> Back to home </a>
    `)
    }
})

server.listen(5000)




