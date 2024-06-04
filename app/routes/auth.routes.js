module.exports = (app) => {
  const { login } = require("../controllers/auth.controller.js");
  var router = require("express").Router();

  router.post("/login", login);
  app.use("/api", router);
};
