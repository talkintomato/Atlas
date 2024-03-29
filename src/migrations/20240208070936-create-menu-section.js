"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("MenuSection", {
      menuId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: "Menu", key: "id" },
        primaryKey: true,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      sectionId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: "Section", key: "id" },
        primaryKey: true,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      displayOrder: {
        type: Sequelize.INTEGER,
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
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("MenuSection");
  },
};
