const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
// const { encrypt, getSalt, hashPassword } = require("../authentication/crypto");
const { encryptPassword } = require("./../authentication/password-manager");
const { generateJWT } = require("./../authentication/jwt-manager");

// Create and Save a new User
exports.create = async (req, res) => {
  console.log(req.body);

  const { firstName, lastName, email, password } = req.body;

  // Validate request
  if (!firstName) {
    return res
      .status(400)
      .send({ message: "Bad Request: First name cannot be empty for user!" });
  }

  if (!lastName) {
    return res
      .status(400)
      .send({ message: "Bad Request: Last name cannot be empty for user!" });
  }

  if (!email) {
    return res
      .status(400)
      .send({ message: "Bad Request: Email cannot be empty for user!" });
  }

  if (!password) {
    return res
      .status(400)
      .send({ message: "Bad Request: Password cannot be empty for user!" });
  }

  //check if account already exists
  let account = await User.findOne({
    where: {
      email: email,
    },
  });

  console.log("acccount", account);

  if (account) {
    res.send({ message: "Email already in error" });
  }

  const hashedPassword = await encryptPassword(password);
  console.log("hashed password", hashedPassword);

  //account does not exist, create the account
  const user = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: hashedPassword,
  };

  const createdUser = await User.create(user);

  //create jwt
  const token = await generateJWT(createdUser);

  let userInfo = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    token: token,
  };

  console.log(userInfo);
  res.send(userInfo);
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;

  User.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    });
};

// Find a single User with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with id = ${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error retrieving User with id = " + id,
      });
    });
};

// Find a single User with an email
exports.findByEmail = (req, res) => {
  const email = req.params.email;

  User.findOne({
    where: {
      email: email,
    },
  })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.send({ email: "not found" });
        /*res.status(404).send({
          message: `Cannot find User with email=${email}.`
        });*/
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error retrieving User with email=" + email,
      });
    });
};

// Update a User by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  User.update(req.body, {
    where: { id: id },
  })
    .then((number) => {
      if (number == 1) {
        res.send({
          message: "User was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update User with id = ${id}. Maybe User was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error updating User with id =" + id,
      });
    });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: { id: id },
  })
    .then((number) => {
      if (number == 1) {
        res.send({
          message: "User was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete User with id = ${id}. Maybe User was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Could not delete User with id = " + id,
      });
    });
};

// Delete all People from the database.
exports.deleteAll = (req, res) => {
  User.destroy({
    where: {},
    truncate: false,
  })
    .then((number) => {
      res.send({ message: `${number} People were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all people.",
      });
    });
};
