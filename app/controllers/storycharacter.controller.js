const db = require("../models");
const StoryCharacter = db.storyCharacter;
const Character = db.character;
const Op = db.Sequelize.Op;

// Create and Save a new StoryCharacter
exports.create = (req, res) => {

  // Create a StoryCharacter
  const storyCharacter = {
    storyId: req.body.storyId,
    characterId: req.body.characterId ? req.body.characterId : null,
    characterId: req.body.characterId,
  };
  // Save StoryCharacter in the database
  StoryCharacter.create(storyCharacter)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the StoryCharacter.",
      });
    });
};

// Retrieve all StoryCharacter from the database.
exports.findAll = (req, res) => {
  const storyCharacterId = req.query.storyCharacterId;
  var condition = storyCharacterId
    ? {
        id: {
          [Op.like]: `%${storyCharacterId}%`,
        },
      }
    : null;

    StoryCharacter.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving StoryCharacters.",
      });
    });
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

// Update a RecipeIngredient by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  RecipeIngredient.update(req.body, {
    where: { id: id },
  })
    .then((number) => {
      if (number == 1) {
        res.send({
          message: "RecipeIngredient was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update RecipeIngredient with id=${id}. Maybe RecipeIngredient was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error updating RecipeIngredient with id=" + id,
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
exports.deleteAll = (req, res) => {
  RecipeIngredient.destroy({
    where: {},
    truncate: false,
  })
    .then((number) => {
      res.send({
        message: `${number} RecipeIngredients were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while removing all recipeIngredients.",
      });
    });
};
