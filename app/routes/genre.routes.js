const { isAuthorized } = require("../authentication/authentication");

module.exports = (app) => {
  const genres = require("../controllers/genre.controller.js");

  var router = require("express").Router();

  router.get("/", genres.findAll);

  app.use("/storyapi/genres", [isAuthorized], router);
};
