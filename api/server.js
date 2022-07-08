const express = require("express");
const helmet = require("helmet");

const server = express();

function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get(
      "Origin"
    )}`
  );

  next();
}

function logServerStatus(req, res, next) {
  console.log("Next Meal Service up and running...");

  next();
}

function auth(req, res, next) {
  if (req.url === "/meal") {
    next();
  } else {
    res.status(403).send("Not authorized!");
  }
}
server.use(helmet());
server.use(express.json());
server.use(logServerStatus);
server.use(logger);
server.get("/", (req, res) => {
  res.status(200).send("Welcome to Next Meal Service");
});

server.get("/meal", auth, (req, res) => {
  console.log("Getting a meal...");
  res.send("Here's your next meal suggestion");
});

server.get("/authcheckfails", auth, (req, res) => {
  res.send("auth is not working");
});

server.use(function (req, res) {
  res.status(404).send("Oops that resource is not found!");
});

module.exports = server;
