const express = require("express");
const helmet = require("helmet");

const Foods = require("../data/foods-model.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/api", (req, res) => {
  res.status(200).send("Welcome to the Next Meal Service");
});

server.get("/api/foods", (req, res) => {
  Foods.find()
    .then((foods) => {
      res.status(200).json(foods);
    })
    .catch((error) => {
      console.error("\nERROR", error);
      res.status(500).json({ error: "Cannot retrieve the foods" });
    });
});

server.put("/api/foods/:id", (req, res) => {
  const { id } = req.params;
  Foods.updateFoodById(id, req.body)
    .then((food) => {
      console.log(food);
      res.status(200).json(food);
    })
    .catch((error) => {
      console.error("\nERROR", error);
      res
        .status(401)
        .json({ error: `Cannot update the food with the id ${id}` });
    });
});

server.delete("/api/foods/:id", (req, res) => {
  const { id } = req.params;
  Foods.deleteFoodById(id)
    .then((food) => {
      res.status(200).json(food);
    })
    .catch((error) => {
      console.error("\nERROR", error);
      res
        .status(401)
        .json({ error: `Cannot delete the food with the id ${id}` });
    });
});

server.get("/api/foods/:id", (req, res) => {
  const { id } = req.params;
  Foods.findById(id)
    .then((food) => {
      res.status(200).json(food);
    })
    .catch((error) => {
      console.error("\nERROR", error);
      res.status(401).json({ error: `Cannot find the food with the id ${id}` });
    });
});

server.get("/api/foods/:name", (req, res) => {
  const { name } = req.params;
  console.log(name);
  Foods.findByName(name)
    .then((food) => {
      console.log("food", food);
      res.status(200).json(food);
    })
    .catch((error) => {
      console.error("\nERROR", error);
      res
        .status(401)
        .json({ error: `Cannot find the food with the name ${name}` });
    });
});

server.post("/api/foods", (req, res) => {
  console.log(req.body);
  Foods.add(req.body)
    .then((food) => {
      res.status(201).json(food);
    })
    .catch((error) => {
      console.error("\nERROR", error);
      res.status(500).json({ error: "Cannot add the food" });
    });
});

module.exports = server;
