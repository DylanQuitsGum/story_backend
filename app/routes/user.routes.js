module.exports = (app) => {
  const User = require("../controllers/user.controller.js");
  var router = require("express").Router();

  router.post("/", User.create);

  app.use("/api/users", router);
};
