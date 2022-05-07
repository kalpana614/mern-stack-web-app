// Responsible for creating a server
// Responsible for handle requests, and response.

//step-1 : Import http package/Library.(using require)
//require is used for input
const http = require("http");

//step-2: Create server using http.
http
  .createServer((req, res) => {
    res.end("Hello world from NodeJs");
  })
  .listen(400);

console.log("Server is listening on 400");
