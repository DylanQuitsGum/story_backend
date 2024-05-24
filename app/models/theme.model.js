module.exports = (sequelize, Sequelize) => {
    const Theme = sequelize.define("theme", {
      theme: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
    return Theme;
  };