const { language } = require("googleapis/build/src/apis/language");
const db = require("../models");
const Language = db.language;

// Create and Save a new Language
exports.create = (req, res) => {
  // Validate request
  if (!req.body.language) {
    res.status(400).send({
      message: "Language can not be empty!",
    });
    return;
  }

  // Create a Language
  const language = {
    language: req.body.language,
  };

  // Save Language in the database
  Language.create(language)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Language.",
      });
    });
};

exports.findAll = (req, res) => {
  const language = req.query.language;
  var condition = language
    ? { language: { [Op.like]: `%${language}%` } }
    : null;

  Language.findAll({ where: condition })
    .then((data) => {
      res.setHeader("Content-Type", "application/json");
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving languages.",
      });
    });
};

// Find a single Language with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Language.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Language with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Language with id=" + id,
      });
    });
};

// Update a Language by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Language.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Language was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Language with id=${id}. Maybe Language was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Language with id=" + id,
      });
    });
};

// Delete a Language with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Language.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Language was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Language with id=${id}. Maybe Language was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Language with id=" + id,
      });
    });
};

// Delete all Languages from the database.
exports.deleteAll = (req, res) => {
  Language.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Language were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all languages.",
      });
    });
};
