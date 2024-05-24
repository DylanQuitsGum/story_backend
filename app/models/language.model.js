module.exports = (sequelize, Sequelize) => {
    const Language = sequelize.define("language", {
      language: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
    return Language;
  };