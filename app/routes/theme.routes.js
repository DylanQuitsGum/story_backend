module.exports = (app) => {
  const themes = require("../controllers/theme.controller.js");

  var router = require("express").Router();

  // Create a new Theme
  router.post("/", themes.create);

  // Retrieve all Themes
  router.get("/", themes.findAll);

  // Retrieve a single Theme with id
  router.get("/:id", themes.findOne);

  // Update a Theme with id
  router.put("/:id", themes.update);

  // Delete a Theme with id
  router.delete("/:id", themes.delete);

  // Delete all Theme
  router.delete("/", themes.deleteAll);

  app.use("/api/themes", router);
};
