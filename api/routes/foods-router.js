// Endpoints for food resources
const Foods = require("../../data/foods-model.js");
const router = require("express").Router();

// returns all food items
router.get("/", (req, res) => {
  Foods.find()
    .then((foods) => {
      res.status(200).json(foods);
    })
    .catch((error) => {
      console.error("\nERROR", error);
      res.status(500).json({ error: "Cannot retrieve the foods" });
    });
});

// adds one food item and returns the item with id
router.post("/", (req, res) => {
  Foods.add(req.body)
    .then((food) => {
      res.status(201).json(food);
    })
    .catch((error) => {
      console.error("\nERROR", error);
      res.status(500).json({ error: `Cannot add the food ${req.body.name}` });
    });
});

// updates one food item by id
// returns the number of rows modified
router.put("/:id", (req, res) => {
  const { id } = req.params;
  Foods.updateFoodById(id, req.body)
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

// deletes one food item by id
// returns number of rows modified
router.delete("/:id", (req, res) => {
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

// returns one food by id
router.get("/:id", (req, res) => {
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

// returns one food by name
router.get("/name/:name", (req, res) => {
  const { name } = req.params;
  Foods.findByName(name)
    .then((food) => {
      res.status(200).json(food);
    })
    .catch((error) => {
      console.error("\nERROR", error);
      res
        .status(401)
        .json({ error: `Cannot find the food with the name ${name}` });
    });
});

module.exports = router;
