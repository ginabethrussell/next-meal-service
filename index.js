require("dotenv").config();

const server = require("./api/server.js");

// Heroku will have the PORT environment variable set
const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(
    `\n*** Next Meal Service Server Running on http://localhost:${port} ***\n`
  );
});
