const db = require("../models");
const Character = db.character;
const Op = db.Sequelize.Op;

// Create and Save a new Character
exports.create = (req, res) => {
  // Validate request
  if (req.body.name === undefined) {
    const error = new Error("Character cannot be empty!");
    error.statusCode = 400;
    throw error;
  } 

  // Create a Character
  const character = {
    character: req.body.character,
  };

  // Save Character in the database
  Character.create(character)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Character.",
      });
    });
};

// Retrieve all Characters from the database.
exports.findAll = (req, res) => {
  const character = req.query.characterId;
  var condition = db.characterId
    ? {
        id: {
          [Op.like]: `%${characterId}%`,
        },
      }
    : null;

  Character.findAll({ where: condition, order: [["character", "ASC"]] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving characters.",
      });
    });
};

// Find a single Genre with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Character.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error retrieving Character with id=" + id,
      });
    });
};

// Update a Genre by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Character.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Character was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Character with id=${id}. Maybe Character was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error updating Character with id=" + id,
      });
    });
};

// Delete a Ingredient with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Character.destroy({
    where: { id: id },
  })
    .then((number) => {
      if (number == 1) {
        res.send({
          message: "Character was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Character with id=${id}. Maybe Character was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Could not delete Character with id=" + id,
      });
    });
};

// Delete all Character from the database.
exports.deleteAll = (req, res) => {
    Character.destroy({
    where: {},
    truncate: false,
  })
    .then((number) => {
      res.send({ message: `${number} Character were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all characters.",
      });
    });
};
