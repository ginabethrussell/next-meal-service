const express = require("express");
const helmet = require("helmet");

const Foods = require("../data/foods-model.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).send("Welcome to the Next Meal Service");
});

server.get("/foods", (req, res) => {
  Foods.find()
    .then((foods) => {
      res.status(200).json(foods);
    })
    .catch((error) => {
      console.error("\nERROR", error);
      res.status(500).json({ error: "Cannot retrieve the foods" });
    });
});

server.put("/foods/:id", (req, res) => {
  const { id } = req.params;
  Foods.updateFoodById(id)
    .then((food) => {
      res.status(200).json(food);
    })
    .catch((error) => {
      console.error("\nERROR", error);
      res
        .status(401)
        .json({ error: `Cannot update the food with the id ${id}` });
    });
});

server.delete("/foods/:id", (req, res) => {
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

server.get("/foods/:id", (req, res) => {
  const { id } = req.params;
  Foods.findFoodById(id)
    .then((food) => {
      res.status(200).json(food);
    })
    .catch((error) => {
      console.error("\nERROR", error);
      res.status(401).json({ error: `Cannot find the food with the id ${id}` });
    });
});

server.post("/foods/add", (req, res) => {
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
