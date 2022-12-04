const http = require("http");

const server = http.createServer((request, response) => {
        response.write("I am Milad");
        response.end();
});

server.listen(11000);