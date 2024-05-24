module.exports = (sequelize, Sequelize) => {
    const Country = sequelize.define("country", {
      country: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
    return Country;
  };