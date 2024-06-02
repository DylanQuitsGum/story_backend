const { isAuthorized } = require("../authentication/authentication");

module.exports = (app) => {
  const countries = require("../controllers/country.controller.js");

  var router = require("express").Router();

  router.get("/", countries.findAll);

  app.use("/storyapi/countries", [isAuthorized], router);
};
