const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.character = require("./character.model.js")(sequelize, Sequelize);
db.genre = require("./genre.model.js")(sequelize, Sequelize);
db.country = require("./country.model.js")(sequelize, Sequelize);
db.language = require("./language.model.js")(sequelize, Sequelize);
db.theme = require("./theme.model.js")(sequelize, Sequelize);

db.story = require("./story.model.js")(sequelize, Sequelize);
db.storyCharacter = require("./storyCharacter.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);

// foreign key for story
db.user.hasMany(
  db.story,
  { as: "story" },
  { foreignKey: "userId", as: "stories", onDelete: "CASCADE" }
);
db.story.belongsTo(
  db.user,
  { as: "user" },
  { foreignKey: "userId", as: "user", onDelete: "CASCADE" }
);

db.story.hasMany(
  db.storyCharacter,
  { as: "storyCharacter" },
  { foreignKey: { allowNull: false }, onDelete: "CASCADE" }
);
db.character.hasMany(
  db.storyCharacter,
  { as: "storyCharacter" },
  { foreignKey: { allowNull: false }, onDelete: "CASCADE" }
);

db.user.hasMany(
  db.character,
  { as: "character" },
  { foreignKey: { allowNull: false }, onDelete: "CASCADE" }
);
db.character.belongsTo(
  db.user,
  { as: "user" },
  { foreignKey: { allowNull: true }, onDelete: "CASCADE" }
);

module.exports = db;
