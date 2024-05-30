module.exports = (app) => {
  const { login, logout } = require("../controllers/auth.controller.js");
  var router = require("express").Router();

  router.post("/login", login);
  app.use("/storyapi", router);
};
