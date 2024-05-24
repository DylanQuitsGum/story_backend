module.exports = (sequelize, Sequelize) => {
    const Story = sequelize.define("story", {
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      text: {
        type: Sequelize.TEXT('MEDIUMTEXT'),
        allowNull: false,
      },
    });
    return Story;
  };