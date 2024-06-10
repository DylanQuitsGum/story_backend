const db = require("../models");
const StoryCharacter = db.storyCharacter;
const Character = db.character;
const Op = db.Sequelize.Op;

exports.createStoryCharacter = async (req, res) => {
  const userId = req.params.id;
  const storyId = req.params.storyId;
  console.log(req.body);

  try {
    const result = await StoryCharacter.bulkCreate(req.body);

    console.log(result);
    res.status(200).send(result);
  } catch (err) {
    return res.status(500).send({
      message: `Server Error: ${err}`,
    });
  }
};

// Retrieve all StoryCharacter from the database.
exports.findAll = async (req, res) => {
  console.log(req);
  const storyId = req.params.storyId;

  try {
    const storyCharacters = await StoryCharacter.findAll({
      where: {
        storyId: storyId,
      },
    });

    if (storyCharacters) {
      return res.status(200).send(storyCharacters);
    }
  } catch (err) {
    return res.status(500).send({
      message: `Server error: ${err}`,
    });
  }
};

exports.findAllForStory = (req, res) => {
  const storyId = req.params.storyId;
  StoryCharacter.findAll({
    where: { storyId: storyId },
    include: [
      {
        model: Story,
        as: "story",
        required: true,
      },
    ],
  })
    .then((data) => {
      res.send(data);
    })

    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving storyCharacters for a Story.",
      });
    });
};

// Find a single RecipeIngredient with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  RecipeIngredient.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Error retrieving RecipeIngredient with id=" + id,
      });
    });
};

// Delete a RecipeIngredient with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  RecipeIngredient.destroy({
    where: { id: id },
  })
    .then((number) => {
      if (number == 1) {
        res.send({
          message: "RecipeIngredient was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete RecipeIngredient with id=${id}. Maybe RecipeIngredient was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Could not delete RecipeIngredient with id=" + id,
      });
    });
};

// Delete all RecipeIngredients from the database.
exports.deleteAll = async (req, res) => {
  console.log("delete all story characters");
  const storyId = req.params.storyId;

  if (!storyId) {
    return res.status(400).send({
      message: `Bad Argument: need to provide storyId`,
    });
  }

  try {
    const result = await StoryCharacter.destroy({
      where: {
        storyId: storyId,
      },
    });

    return res.status(200).send({
      message: `Delete successfully`,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Server Error: ${err}`,
    });
  }
};
