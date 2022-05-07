//step 1: Import Express.

const express = require("express");
const userRoutes = require("./src/user/routes/user");
const restaurantRoutes = require("./src/restaurant/routes/restaurant");
const mongodb = require("./config/mongodb");
const bodyParser = require("body-parser");
//Create server and listen
const server = express();
server.listen(4400);

//connect to database
mongodb.connect();
//configure routes.
server.use(bodyParser.json());

server.use("/api/user", userRoutes);
server.use("/api/restaurant", restaurantRoutes);

//3. create default response.

server.get("/", (req, res) => {
  res.end("Hello world from Express");
});

console.log("server is listening on 4400");
