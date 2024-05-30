const db = require("../models");
const { comparePassword } = require("../authentication/password-manager");
const { generateJWT } = require("./../authentication/jwt-manager");
const User = db.user;
const Session = db.session;

exports.login = async (req, res) => {
  const { email, password } = req.body;

  //check if account already exists
  let account = await User.findOne({
    where: {
      email: email,
    },
  });

  if (!account) {
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
  const { firstName, lastName } = account;

  let userInfo = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    token: token,
  };

  return res.send(userInfo);
};
