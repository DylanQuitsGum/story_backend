module.exports = (sequelize, Sequelize) => {
  const StoryCharacter = sequelize.define("storyCharacter", {
    role: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  return StoryCharacter;
};
