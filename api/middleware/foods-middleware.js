const yup = require("yup");
const { findById, findByName } = require("../models/foods-model");

const foodSchema = yup.object({
  name: yup.string().trim().min(3).required(),
  "serving size": yup.string().trim().min(3).required(),
  protein: yup.number().min(0).max(100).required(),
  carbohydrate: yup.number().min(0).max(100).required(),
  fat: yup.number().min(0).max(100).required(),
  fiber: yup.number().min(0).max(100).required(),
});

const checkFoodBody = async (req, res, next) => {
  try {
    const validatedBody = await foodSchema.validate(req.body);
    req.body = validatedBody;
    next();
  } catch (err) {
    next(err);
  }
};

const checkFoodId = (req, res, next) => {
  findById(req.params.id)
    .then((food) => {
      if (food) {
        req.food = food;
        next();
      } else {
        next({
          status: 404,
          message: `food with id ${req.params.id} not found`,
        });
      }
    })
    .catch(next);
};

const checkFoodName = (req, res, next) => {
  findByName(req.params.name)
    .then((food) => {
      if (food) {
        req.food = food;
        next();
      } else {
        next({
          status: 404,
          message: `food with name ${req.params.name} not found`,
        });
      }
    })
    .catch(next);
};

const handleErrors = (err, req, res, next) => {
  res.status(err.status || 500).json({
    custom: "something went wrong in the foods router",
    message: err.message,
    stack: err.stack,
  });
};

module.exports = {
  handleErrors,
  checkFoodBody,
  checkFoodId,
  checkFoodName,
};
