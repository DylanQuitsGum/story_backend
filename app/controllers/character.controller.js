const db = require("../models");
const Character = db.character;

// Create and Save a new Character
exports.create = (req, res) => {
  // Validate request
  if (!req.body.firstName) {
    res.status(400).send({
      message: "First Name can not be empty!"
    });
    return;
  }
  if (!req.body.lastName) {
    res.status(400).send({
      message: "Last Name can not be empty!"
    });
    return;
  }

  // Create a Character
  const character = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userId: req.body.userId,
  };

  // Save Character in the database
  Character.create(character)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Character."
      });
    });
};

// Retrieve all Characters from the database.
exports.findAll = (req, res) => {
  const userId = req.body.userId;
  var condition = userId ? { userId: `${userId}` } : null;

  Character.findAll({ 
    where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving characters."
      });
    });
};

// Find a single Character with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Character.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Character with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Character with id=" + id
      });
    });
};

// Update a Character by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Character.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Character was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Character with id=${id}. Maybe Character was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Character with id=" + id
      });
    });
};

// Delete a Character with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Character.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Character was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Character with id=${id}. Maybe Character was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Character with id=" + id
      });
    });
};

// Delete all Characters from the database.
exports.deleteAll = (req, res) => {
  Character.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Characters were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all characters."
      });
    });
};



