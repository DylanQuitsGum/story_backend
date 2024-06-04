const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET_KEY;

function isAuthorized(req, res, next) {
  // //for dev
  // next();
  // return;

  const authorizationHeader = req.headers.authorization;

  let token = undefined;
  if (authorizationHeader && authorizationHeader.startsWith("Bearer ")) {
    token = authorizationHeader.slice(7); // Remove "Bearer " prefix
  }

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }

    next();
  });
}

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
  isAuthorized,
  generateJWT,
};
