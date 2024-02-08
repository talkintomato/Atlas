"use strict";

module.exports = (sequelize, DataTypes) => {
  const MenuSection = sequelize.define(
    "MenuSection",
    {
      MenuId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Menu", // Ensure this matches the table name in the migration
          key: "id",
        },
        primaryKey: true,
      },
      SectionId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Section", // Ensure this matches the table name in the migration
          key: "id",
        },
        primaryKey: true,
      },
      display_order: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: true,
      indexes: [
        {
          unique: true,
          fields: ["MenuId", "SectionId"],
        },
      ],
    },
  );

  return MenuSection;
};
