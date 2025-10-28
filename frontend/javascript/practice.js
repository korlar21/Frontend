const http = require('http');

// Basic Node.js script

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>My Web Page</title>
        </head>
        <body>
            <h1>Welcome to My Web Page</h1>
            <p>This is a simple web page.</p>
        </body>
        </html>
    `);
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
