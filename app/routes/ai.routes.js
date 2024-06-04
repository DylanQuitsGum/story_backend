module.exports = (app) => {
  const ai = require("../controllers/ai.controller.js");
  var router = require("express").Router();

  // generate story
  router.post("/", ai.generateStory);

  app.use("/api/ai", router);
};
