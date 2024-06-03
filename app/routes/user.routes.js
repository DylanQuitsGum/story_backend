module.exports = (app) => {
  const User = require("../controllers/user.controller.js");
  var router = require("express").Router();

  router.post("/users/", User.create);

  app.use("/api", router);
};
