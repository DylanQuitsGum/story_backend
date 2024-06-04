module.exports = (sequelize, Sequelize) => {
  const Character = sequelize.define("character", {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  return Character;
};
