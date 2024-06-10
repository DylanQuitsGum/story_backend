module.exports = (sequelize, Sequelize) => {
  const StoryCharacter = sequelize.define("storyCharacter", {
    characterId: {
      type: Sequelize.INTEGER,
    },
    firstName: {
      type: Sequelize.STRING,
      allowEmpty: true,
    },
    lastName: {
      type: Sequelize.STRING,
      allowEmpty: true,
    },
    role: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    storyId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "stories", // This refers to the table name
        key: "id",
      },
    },
  });
  return StoryCharacter;
};
