# Next Meal Service API

A REST CRUD API using a sqlite in-app db to store the nutritional value of ingredients with the ultimate goal of providing the user a meal using the user's favorite foods meeting given nutritional goals.

## A React Native App will provide the frontend user interface for this service.

- A user will be able to enter a favorite food to build a personalized ingredient db.
- Foods will be entered with name, and nutritional information for protein, carbohydrates, fat, and fiber.
- The user will be able to tag this food with meal time.
- Meal tags will be breakfast, lunch, dinner, and snack.
- The user will be able to enter a meal tag and a set of nutritional goals and the backend service will generate a meal suggestion.
- The user can shuffle the entire meal to get a new suggestion or hold specific ingredients and shuffle for a different combination.

## Tech Stack

This API is built with node and express and packaged with npm.
The Service is deployed using Heroku and may be accessed with Postman using the [deployed app url](https://next-meal-service.herokuapp.com/api/)
SQLite is currently being used for an in-app db. This may be migrated to Postgresql using Heroku.
Knex is being used as a SQL query builder to interface with the database.
Migrations and Seeds set up the db structure and sample data.

## To Run the Server

You can run a local version using `npm start`. The server will listen on `http://localhost:4000`.
To run the server with hot reloading using `npm run server`. This will automatically restart the server instance with saved changes.

## A Collection of Sample Postman Queries

[Next Meal Service](https://www.postman.com/gbrussell/workspace/fin-serv/collection/19021592-29a08d1d-447f-4710-a628-9c10978aca19?action=share&creator=19021592)

## API ROUTES

### URL_BASE

- Local server: `http://localhost:4000`
- Deployed server: `https://next-meal-service.herokuapp.com/api/`

### Route Table

| TYPE   | ROUTE                   | PARAMS | BODY        | Returns                        |
| ------ | ----------------------- | ------ | ----------- | ------------------------------ |
| GET    | `/api`                  | none   | none        | `Welcome to Next Meal Service` |
| GET    | `/api/foods`            | none   | none        | JSON array of all food objects |
| GET    | `/api/foods/:id`        | id     | none        | JSON food object               |
| GET    | `/api/foods/name/:name` | name   | none        | JSON food object               |
| POST   | `/api/foods`            | none   | food object | JSON food object with id       |
| PUT    | `/api/foods/:id`        | id     | food object | Number of rows modified        |
| DELETE | `/api/foods/:id`        | id     | none        | Number of rows modified        |
