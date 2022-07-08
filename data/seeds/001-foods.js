/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("foods").del();
  await knex("foods").insert([
    {
      id: 1,
      name: "old-fashioned oats",
      "serving size": "1/2 cup",
      protein: 5,
      carbohydrate: 27,
      fat: 3,
      fiber: 5,
    },
    {
      id: 2,
      name: "unsweetened oat milk",
      "serving size": "1 cup",
      protein: 1,
      carbohydrate: 8,
      fat: 1,
      fiber: 1,
    },
    {
      id: 3,
      name: "chia seeds",
      "serving size": "1 TBSP",
      protein: 3,
      carbohydrate: 5,
      fat: 5,
      fiber: 5,
    },
    {
      id: 4,
      name: "blackberries",
      "serving size": "1/2 cup",
      protein: 1,
      carbohydrate: 7,
      fat: 0,
      fiber: 4,
    },
  ]);
};
