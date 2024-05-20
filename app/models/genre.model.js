module.exports = (sequelize, Sequelize) => {
    const Genre = sequelize.define("genre", {
      genre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
    return Genre;
  };