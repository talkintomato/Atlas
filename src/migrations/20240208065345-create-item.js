"use strict";

module.exports.up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable("Item", {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
    },
    type: {
      type: Sequelize.ENUM("product", "component"),
      allowNull: false,
    },
    label: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false,
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
  await queryInterface.dropTable("Item");
};
