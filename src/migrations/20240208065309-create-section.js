"use strict";

module.exports.up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable("Section", {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
    },
    label: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      // allowNull is true by default, so specifying it is optional
      allowNull: true,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  });
};

module.exports.down = async (queryInterface) => {
  await queryInterface.dropTable("Section");
};
