const jwt = require("jsonwebtoken");

const secretKey = process.env.JWT_SECRET_KEY;

function generateJWT(user) {
  const { id, email } = user;

  const payload = {
    userId: id,
    email: email,
  };

  const options = {
    expiresIn: "1h", //expire in hour
  };

  return jwt.sign(payload, secretKey, options);
}

module.exports = {
  generateJWT,
};
