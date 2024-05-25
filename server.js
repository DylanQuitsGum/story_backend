require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./app/models");

console.log("testing123");

const CharacterController = require("./app/controllers/character.controller.js");
const GenreController = require("./app/controllers/genre.controller.js");
const CountryController = require("./app/controllers/country.controller.js");
const ThemeController = require("./app/controllers/theme.controller.js");
const LanguageController = require("./app/controllers/language.controller.js");

const run = async () => {
  const englishLanguage = LanguageController.create({
    language: "English",
  });

  const spanishLanguage = LanguageController.create({
    language: "Spanish",
  });

  const germanLanguage = LanguageController.create({
    language: "German",
  });

  const frenchLanguage = LanguageController.create({
    language: "French",
  });

  const darkTheme = ThemeController.create({
    theme: "Dark",
  });

  const lightTheme = ThemeController.create({
    theme: "Light",
  });

  const usCountry = CountryController.create({
    country: "United States",
  });

  const horrorGenre = GenreController.create({
    genre: "Horror",
  });

  const adventureGenre = GenreController.create({
    genre: "Adventure",
  });

  const fantasyGenre = GenreController.create({
    genre: "Fantasy",
  });
};

//TODO:  This is for development purposes only.
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  run();
});

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
app.options("*", cors());

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

require("./app/routes/character.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3201;
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
}

module.exports = app;
