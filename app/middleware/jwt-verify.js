const jwt = require("jsonwebtoken");

const secretKey = process.env.JWT_SECRET_KEY;

function verifyJWTMiddleware(req, res, next) {
  console.log(req);
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }

    req.user = decoded;
    next();
  });
}
