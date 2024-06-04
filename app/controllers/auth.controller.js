const db = require("../models");
const { comparePassword } = require("../authentication/password-manager");
const { generateJWT } = require("./../authentication/authentication");
const User = db.user;

exports.login = async (req, res) => {
  const { email, password } = req.body;

  //check if account already exists
  let account = await User.findOne({
    where: {
      email: email,
    },
  });

  if (!account || !password) {
    return res
      .status(400)
      .send({ message: "Incorrect email or password, please try again." });
  }

  const hashedPassword = account?.password.toString();
  const isValidPassword = await comparePassword(password, hashedPassword);

  if (!isValidPassword) {
    return res
      .status(400)
      .send({ message: "Incorrect email or password, please try again." });
  }

  //create jwt
  const token = await generateJWT(account);
  const { firstName, lastName, id } = account;

  let userInfo = {
    userId: id,
    firstName: firstName,
    lastName: lastName,
    email: email,
    token: token,
  };

  return res.status(200).send(userInfo);
};
