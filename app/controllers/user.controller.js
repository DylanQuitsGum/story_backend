const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
const { encryptPassword } = require("./../authentication/password-manager");
const { generateJWT } = require("./../authentication/authentication");

// Create and Save a new User
exports.create = async (req, res) => {
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

  if (account) {
    return res
      .status(400)
      .send({ message: "Email already exist, please try again." });
  }

  const hashedPassword = await encryptPassword(password);

  //account does not exist, create the account
  const user = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: hashedPassword,
  };

  const createdUser = await User.create(user);
  const token = await generateJWT(createdUser);

  let userInfo = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    token: token,
  };

  res.send(userInfo);
};
