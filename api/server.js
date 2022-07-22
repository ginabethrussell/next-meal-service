const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const foodsRouter = require("./routes/foods-router");
const server = express();

server.use(express.json());
server.use(cors());
server.use(morgan("tiny"));
server.use("/api/foods", foodsRouter);

// service health check
server.get("/api", (req, res) => {
  res.status(200).send("Welcome to Next Meal Service");
});

module.exports = server;
