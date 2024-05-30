const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET_KEY;

function isAuthorized(req, res, next) {
  console.log("req", req.headers);
  const authorizationHeader = req.headers.authorization;

  let token = undefined;
  if (authorizationHeader && authorizationHeader.startsWith("Bearer ")) {
    token = authorizationHeader.slice(7); // Remove "Bearer " prefix
  }

  console.log("token", token);

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    console.log("decoded", decoded);
    if (err) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }

    next();
  });
}

module.exports = {
  isAuthorized,
};
