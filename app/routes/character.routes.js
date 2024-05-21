module.exports = (app) => {
    const Character = require("../controllers/character.controller.js");
    const { authenticateRoute } = require("../authentication/authentication");
    var router = require("express").Router();
  
    // Create a new Character
    router.post("/characters/", [authenticateRoute], Character.create);
  
    // Retrieve all Characters for user
    router.get(
      "/characters/user/:userId",
      [authenticateRoute],
      Character.findAllForUser
    );

};

exports.findAllForUser = (req, res) => {
  const userId = req.params.userId;
  Character.findAll({
    where: { userId: userId },
    include: [
      {
        model: StoryCharacter,
        as: "storyCharacter",
        required: false,
      },
    ],
  })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Characters for user with id=${userId}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Error retrieving Characters for user with id=" + userId,
      });
    });
};