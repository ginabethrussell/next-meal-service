if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const server = require("./api/server.js");

// Heroku will have the PORT environment variable set
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`\n*** Next Meal Service Server Running on port ${PORT} ***\n`);
});
