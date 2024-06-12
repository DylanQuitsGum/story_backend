const db = require("../models");
const Story = db.story;
const Op = db.Sequelize.Op;

const { CohereClient } = require("cohere-ai");
const { v4: uuidv4 } = require("uuid");

exports.generateStory = async (req, res) => {
  let cohere = new CohereClient({
    token: process.env.COHERE_KEY,
  });

  console.log(req.body);

  const { preamble, prompt, conversationId } = req.body;

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

  //update existing story
  if (conversationId) {
    console.log("update", conversationId);

    const updatedStory = await cohere.chat({
      conversationId: conversationId,
      preamble: preamble,
      message: prompt,
    });

    return res.status(201).send(updatedStory);
  }

  let title = req.body.title == undefined ? "" : req.body.title;

  const chatId = uuidv4();

  console.log("chatId", chatId);
  //new story
  const chat = await cohere.chat({
    conversationId: chatId,
    preamble: req.body.preamble,
    message: req.body.prompt,
  });

  const storyBody = chat.text;

  if (title == "") {
    const storyTitleChat = await cohere.chat({
      conversationId: chatId,
      message: "Create the title of this story, I just want the title",
    });

    title = storyTitleChat.text;
  }

  const story = {
    story: storyBody,
    conversationId: chatId,
    title: title,
  };

  res.status(201).send({
    response: story,
  });
};
