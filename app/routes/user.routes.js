const { isAuthorized } = require("../authentication/authentication");

module.exports = (app) => {
  const User = require("../controllers/user.controller.js");
  const Story = require("../controllers/story.controller.js");
  var router = require("express").Router();

  router.post("/", User.create);
  router.get("/:id/stories", [isAuthorized], Story.findAll);
  router.get("/:id/stories/:storyId", [isAuthorized], Story.findOne);
  app.use("/api/users", router);
};
