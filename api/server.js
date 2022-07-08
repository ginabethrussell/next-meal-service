const express = require("express");
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).send("Welcome to Next Meal Service");
});

server.get("/meal", auth, (req, res) => {
  console.log("Getting a meal...");
  res.send("Here's your next meal suggestion");
});

server.use(function (req, res) {
  res.status(404).send("Oops that resource is not found!");
});

module.exports = server;
