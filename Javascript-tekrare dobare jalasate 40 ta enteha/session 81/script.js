const http = require("http");

const server = http.createServer((request, response) => {
  response.write("I am Mamali");
  response.end();
});

server.listen(5000);
