const db = require("../models");
const Story = db.story;
const Op = db.Sequelize.Op;

// Create and Save a new Story
exports.create = (req, res) => {
  const {
    story,
    conversationId,
    title,
    userId,
    language,
    country,
    genre,
    theme,
    pageCount,
  } = req.body;

  // Validate request
  if (!story || !title) {
    return res.status(400).send({
      message: "Bad Request: Invalid Story",
    });
  }

  if (!language || !country || !genre || !theme || !pageCount) {
    return res.status(400).send({
      message:
        "Bad Request: Require language, country, genre, theme, pageCount",
    });
  }

  // Create a Story
  const newStory = {
    text: story,
    conversationId,
    title,
    userId: userId,
    language,
    country,
    genre,
    theme,
    pageCount,
  };

  // Save Story in the database
  Story.create(newStory)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Story.",
      });
    });
};

// Retrieve all Stories
exports.findAll = async (req, res) => {
  const id = req.params.id;

  try {
    const stories = await Story.findAll({
      where: {
        userId: {
          [Op.eq]: id,
        },
      },
    });

    if (stories) {
      return res.status(200).send(stories);
    }
  } catch (err) {
    return res.status(500).send({
      message: `Server Error: ${err}`,
    });
  }
};

// Find a single Story with an id
exports.findOne = async (req, res) => {
  const id = req.params.id;
  const storyId = req.params.storyId;

  console.log("Get user story");

  try {
    const story = await Story.findOne({
      where: {
        id: storyId,
        userId: id,
      },
    });

    console.log(story);

    if (story) {
      return res.status(200).send(story);
    }
  } catch (err) {
    console.error(`Error: ${err}`);
    return res.status(500).send({
      message: `Server Error: Unable to retrieve story with id ${id}`,
    });
  }
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
exports.delete = async (req, res) => {
  const id = req.params.id;
  const storyId = req.params.storyId;

  console.log(`delete ${id} ${storyId}`);

  try {
    const result = await Story.destroy({
      where: {
        id: storyId,
      },
    });

    if (result) {
      return res.status(200).send({
        message: "Successfully deleted",
      });
    }
  } catch (err) {
    return res.status(500).send({
      message: `Server Error: ${err}`,
    });
  }
  return res.send("ok");
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
