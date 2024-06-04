const db = require("../models");
const Story = db.story;
const Op = db.Sequelize.Op;

const { CohereClient } = require("cohere-ai");
const { v4: uuidv4 } = require("uuid");

exports.generateStory = async (req, res) => {
  console.log(req.body);

  if (req.body.preamble == undefined) {
    const error = new Error("Preamble cannot be empty!");
    error.statusCode = 400;
    throw error;
  }
  if (req.body.prompt == undefined) {
    const error = new Error("Prompt cannot be empty!");
    error.statusCode = 400;
    throw error;
  }

  let title = req.body.title == undefined ? "" : req.body.title;
  const conversationId =
    req.body.conversationId == undefined ? uuidv4() : req.body.conversationId;

  let cohere = new CohereClient({
    token: process.env.COHERE_KEY,
  });

  const chat = await cohere.chat({
    conversationId: conversationId,
    preamble: req.body.preamble,
    message: req.body.prompt,
  });

  const storyBody = chat.text;

  if (title == "") {
    const storyTitleChat = await cohere.chat({
      conversationId: conversationId,
      message: "What is the title of the story? Just return me the title",
    });

    title = storyTitleChat.text;
  }

  const story = {
    story: storyBody,
    conversationId: conversationId,
    title: title,
  };

  res.status(201).send({
    response: story,
  });
};
