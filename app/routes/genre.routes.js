module.exports = app => {
    const genres = require("../controllers/genre.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Genre
    router.post("/", genres.create);
  
    // Retrieve all Genre
    router.get("/", genres.findAll);
  
    // Retrieve a single Genre with id
    router.get("/:id", genres.findOne);
  
    // Update a Genre with id
    router.put("/:id", genres.update);
  
    // Delete a Genre with id
    router.delete("/:id", genres.delete);
  
    // Delete all Genre
    router.delete("/", genres.deleteAll);
  
    app.use('/storyapi/genres', router);
  };