const db = require("./db.js");

module.exports = {
  find,
  findFoodById,
  add,
};

function find() {
  return db("foods");
}

function findFoodById(id) {
  return db("foods").where({ id }).first();
}

function updateFoodById(id) {
  return db("foods").where({ id }).first();
}

function deleteFoodById(id) {
  return db("foods").where({ id }).first();
}

function add(food) {
  return db("foods")
    .insert(food)
    .then((ids) => {
      return db("foods").findFoodById(ids[0]);
    });
}
