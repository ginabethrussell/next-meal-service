const express = require("express");
const foodsRouter = require("./routes/foods-router");
const server = express();

server.use(express.json());
server.use("/api/foods", foodsRouter);

// service health check
server.get("/api", (req, res) => {
  res.status(200).send("Welcome to Next Meal Service");
});

module.exports = server;
