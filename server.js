require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./app/models");

const CharacterController = require('./app/controllers/character.controller.js');

//db.sequelize.sync();
const run = async () => {
  const character1 = await CharacterController.create({
    firstName: 'Greg',
    lastName: 'Satterlee',
  });
};

// db.sequelize.sync();
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
  res.json({ message: "Welcome to the recipe backend." });
});

require("./app/routes/auth.routes.js")(app);
require("./app/routes/ingredient.routes")(app);
require("./app/routes/recipe.routes")(app);
require("./app/routes/recipeStep.routes")(app);
require("./app/routes/recipeIngredient.routes")(app);
require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3201;
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
}

module.exports = app;
