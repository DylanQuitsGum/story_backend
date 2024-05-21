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