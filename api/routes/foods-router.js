// Endpoints for food resources
const Foods = require("../models/foods-model");
const router = require("express").Router();
const {
  handleErrors,
  checkFoodBody,
  checkFoodId,
  checkFoodName,
} = require("../middleware/foods-middleware");

router.get("/", (req, res, next) => {
  Foods.find()
    .then((foods) => {
      res.status(200).json(foods);
    })
    .catch(next);
});

router.post("/", checkFoodBody, (req, res, next) => {
  Foods.add(req.body)
    .then((food) => {
      res.status(201).json(food);
    })
    .catch(next);
});

router.put("/:id", checkFoodId, checkFoodBody, (req, res, next) => {
  Foods.updateFoodById(req.params.id, req.body)
    .then(() => {
      Foods.findById(req.params.id)
        .then((food) => {
          res.status(200).json(food);
        })
        .catch(next);
    })
    .catch(next);
});

router.delete("/:id", checkFoodId, (req, res, next) => {
  Foods.deleteFoodById(req.params.id)
    .then(() => {
      res
        .status(200)
        .json({ message: "Food has been deleted", food: req.food });
    })
    .catch(next);
});

router.get("/:id", checkFoodId, (req, res, next) => {
  res.status(200).json(req.food);
});

router.get("/name/:name", checkFoodName, (req, res, next) => {
  res.status(200).json(req.food);
});

router.use((err, req, res, next) => handleErrors(err, req, res, next));

module.exports = router;
