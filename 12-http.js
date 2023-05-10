const http = require("http");

const server = http.createServer((request, response) => {
    if (request.url === "/") {
        response.end("Welcome to homepage");
    }
    if (request.url === "/about") {
        response.end("Welcome to about page");
    }
    response.end(`
  <h1>Oops</h1>
  <p>The is no page like that</p>
  <a href='/'> back home</a>
  `);
});

server.listen(5000);
