"use strict";

module.exports = (sequelize, DataTypes) => {
  const MenuSection = sequelize.define(
    "MenuSection",
    {
      MenuId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Menu",
          key: "id",
        },
        primaryKey: true,
      },
      SectionId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Section", 
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
      tableName: "MenuSection",
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
