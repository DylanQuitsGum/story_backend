process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // Disable SSL validation (not recommended)

require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const fs = require("fs");
const cors = require("cors");
const db = require("./app/models");
const https = require("https");
const http = require("http");
const app = express();

const run = async () => {
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
    multipleStatements: true,
  });

  connection.connect((err) => {
    console.log("Connecting");

    if (err) return console.error(err.message);

    console.log("Connected");

    let sql = Buffer.from(fs.readFileSync("./db/seeding.sql")).toString(
      "ascii"
    );

    connection.query(sql, (queryErr, results) => {
      if (queryErr) {
        console.error("Query error:", queryErr.message);
      } else {
        console.log("Query results:", results);
      }
      connection.end();
    });

    connection.end();
  });
};

db.sequelize.sync().then(() => {
  console.log("re-sync db.");
  run();
});

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

require("./app/routes/auth.routes.js")(app);

require("./app/routes/user.routes")(app);
require("./app/routes/country.routes.js")(app);
require("./app/routes/genre.routes.js")(app);
require("./app/routes/theme.routes.js")(app);
require("./app/routes/language.routes.js")(app);
require("./app/routes/story.routes.js")(app);
require("./app/routes/ai.routes.js")(app);
require("./app/routes/character.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3201;

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server is running on HTTPS port ${PORT}.`);
  });
}

module.exports = app;
