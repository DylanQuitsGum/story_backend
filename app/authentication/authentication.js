const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET_KEY;

function isAuthorized(req, res, next) {
  console.log("req", req);
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    console.log("decoded", decoded);
    if (err) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }

    req.user = decoded;
    next();
  });
}

module.exports = {
  isAuthorized,
};
