/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("foods", (tbl) => {
    tbl.increments();
    tbl.string("name", 128).unique().notNullable();
    tbl.string("serving size", 128).notNullable();
    tbl.integer("protein").notNullable();
    tbl.integer("carbohydrate").notNullable();
    tbl.integer("fat").notNullable();
    tbl.integer("fiber").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("foods");
};
