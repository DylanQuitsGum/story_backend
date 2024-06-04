const db = require("../models");
const Story = db.story;
const Op = db.Sequelize.Op;

const { CohereClient } = require("cohere-ai");
const { v1: uuidv1, v4: uuidv4 } = require("uuid");

exports.createStory = async (req, res) => {
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

// Create and Save a new Story
exports.create = (req, res) => {
  // Validate request
  if (req.body.story === undefined) {
    const error = new Error("Story cannot be empty!");
    error.statusCode = 400;
    throw error;
  }

  // Create a Story
  const story = {
    story: req.body.story,
  };

  // Save Story in the database
  Story.create(story)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Story.",
      });
    });
};

// Retrieve all Genres from the database.
exports.findAll = (req, res) => {
  const story = req.query.storyId;
  var condition = storyId
    ? {
        id: {
          [Op.like]: `%${storyId}%`,
        },
      }
    : null;

  Story.findAll({ where: condition, order: [["story", "ASC"]] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving stories.",
      });
    });
};

// Find a single Story with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Story.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error retrieving Story with id=" + id,
      });
    });
};

// Update a Story by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Story.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Story was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Story with id=${id}. Maybe Story was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error updating Story with id=" + id,
      });
    });
};

// Delete a Story with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Genre.destroy({
    where: { id: id },
  })
    .then((number) => {
      if (number == 1) {
        res.send({
          message: "Story was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Story with id=${id}. Maybe Story was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Could not delete Story with id=" + id,
      });
    });
};

// Delete all Stories from the database.
exports.deleteAll = (req, res) => {
  Story.destroy({
    where: {},
    truncate: false,
  })
    .then((number) => {
      res.send({ message: `${number} Stories were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all stories.",
      });
    });
};
