const { isAuthorized } = require("../authentication/authentication");

module.exports = (app) => {
  const languages = require("../controllers/language.controller.js");

  var router = require("express").Router();

  router.get("/", languages.findAll);

  app.use("/api/languages", [isAuthorized], router);
};
