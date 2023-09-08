const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("<html>");
        res.write("<head><title>akshay</title></head>");
        res.write("<body>");
        // Read the content of the message.txt file and display it above the input form
        fs.readFile("message.txt", (err, data) => {
            if (!err) {
                const message = data.toString();
                res.write(`<div>Message from file: ${message}</div>`);
            }
            res.write("<form action='/message' method='POST'><input type='text' name='message'/><button type='submit'>Send</button></form>");
            res.write("</body>");
            res.write("</html>");
            return res.end();
        });
    } else if (req.url === "/message" && req.method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFile("message.txt", message, (err) => {
                if (!err) {
                    res.statusCode = 302;
                    res.setHeader('Location', '/');
                    return res.end();
                } else {
                    res.statusCode = 500; // Internal Server Error
                    return res.end("Error writing to file.");
                }
            });
        });
    } else {
        res.end();
    }
});

server.listen(3000);
