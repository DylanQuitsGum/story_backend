const { isAuthorized } = require("../authentication/authentication");

module.exports = (app) => {
  const User = require("../controllers/user.controller.js");
  const Story = require("../controllers/story.controller.js");
  const Character = require("../controllers/character.controller.js");
  const StoryCharacter = require("../controllers/storycharacter.controller.js");

  var router = require("express").Router();

  router.post("/", User.create);

  router.get("/:id/stories", [isAuthorized], Story.findAll);
  router.get("/:id/stories/:storyId", [isAuthorized], Story.findOne);
  router.put("/:id/stories/:storyId", [isAuthorized], Story.update);
  router.delete("/:id/stories/:storyId", Story.delete);

  router.get("/:id/characters", [isAuthorized], Character.findAll);
  router.get("/:id/characters", [isAuthorized], Character.create);
  router.delete("/:id/characters", [isAuthorized], Character.deleteAll);
  router.delete(
    "/:id/characters/:characterId",
    [isAuthorized],
    Character.delete
  );

  router.post(
    "/:id/stories/:storyId/characters",
    [isAuthorized],
    StoryCharacter.createStoryCharacter
  );
  router.get(
    "/:id/stories/:storyId/characters",
    [isAuthorized],
    StoryCharacter.findAll
  );

  router.delete("/:id/stories/:storyId/characters", StoryCharacter.deleteAll);
  app.use("/api/users", router);
};
