"use strict";

module.exports = (sequelize, DataTypes) => {
  const MenuSection = sequelize.define(
    "MenuSection",
    {
      menuId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Menu",
          key: "id",
        },
        primaryKey: true,
      },
      sectionId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Section",
          key: "id",
        },
        primaryKey: true,
      },
      displayOrder: {
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
          fields: ["menuId", "sectionId"],
        },
      ],
    },
  );

  return MenuSection;
};
