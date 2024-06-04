module.exports = (sequelize, Sequelize) => {
  const Story = sequelize.define("story", {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    text: {
      type: Sequelize.TEXT("MEDIUMTEXT"),
      allowNull: false,
    },
    conversationId: {
      type: Sequelize.STRING,
      allowNull: true,
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
  return Story;
};
