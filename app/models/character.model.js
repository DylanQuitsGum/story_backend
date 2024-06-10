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
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "users", // This refers to the table name
        key: "id",
      },
    },
  });
  return Character;
};
