const db = require("./db.js");

module.exports = {
  find,
  findById,
  findByName,
  add,
  updateFoodById,
  deleteFoodById,
  deleteFoodByName,
};

function find() {
  return db("foods");
}

function findById(id) {
  return db("foods").where({ id }).first();
}

function findByName(name) {
  console.log(name);
  return db("foods").where({ name }).first();
}

function updateFoodById(id, food) {
  return db("foods").where({ id }).update(food);
}

function deleteFoodById(id) {
  return db("foods").where({ id }).del();
}

function deleteFoodByName(name) {
  return db("foods").where({ name }).del();
}

function add(food) {
  return db("foods")
    .insert(food)
    .then((ids) => {
      return findById(ids[0]);
    });
}
