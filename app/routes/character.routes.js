const { isAuthorized } = require("../authentication/authentication");

module.exports = (app) => {
  const characters = require("../controllers/character.controller.js");

  var router = require("express").Router();

  // Create a new Character
  router.post("/", characters.create);

  // Retrieve all Characters
  router.get("/", characters.findAll);

  // Retrieve a single Character with id
  router.get("/:id", characters.findOne);

  // Update a Character with id
  router.put("/:id", characters.update);

  // Delete a Character with id
  router.delete("/:id", characters.delete);

  // Delete all Characters
  router.delete("/", characters.deleteAll);

  app.use("/api/characters", [isAuthorized], router);
};
