module.exports = app => {
    const themes = require("../controllers/theme.controller.js");
  
    var router = require("express").Router();

    router.get("/", themes.findAll);
  
    app.use('/storyapi/themes', router);
  };