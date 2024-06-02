require("dotenv").config();
const mysql = require('mysql2');
const fs = require('fs');

const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./app/models");

const CharacterController = require("./app/controllers/character.controller.js");
const GenreController = require("./app/controllers/genre.controller.js");
const CountryController = require("./app/controllers/country.controller.js");
const ThemeController = require("./app/controllers/theme.controller.js");
const LanguageController = require("./app/controllers/language.controller.js");



const run = async () => {
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME,
  multipleStatements: true,
});

connection.connect((err) => {
  console.log('Connecting');

  if(err) return console.error(err.message);

  console.log('Connected');

  let sql = Buffer.from( fs.readFileSync("./db/seeding.sql")).toString('ascii');

  connection.query(sql, [true]);

  connection.end();
});

};

db.sequelize.sync().then(() => {
  console.log("re-sync db.");
  run();
});

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the story backend." });
});

require("./app/routes/auth.routes.js")(app);

require("./app/routes/user.routes")(app);
require("./app/routes/country.routes.js")(app);
require("./app/routes/genre.routes.js")(app);
require("./app/routes/theme.routes.js")(app);
require("./app/routes/language.routes.js")(app);
require("./app/routes/story.routes.js")(app);
require("./app/routes/character.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3201;
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
}

module.exports = app;
