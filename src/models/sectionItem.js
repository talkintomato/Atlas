"use strict";

module.exports = (sequelize, DataTypes) => {
  const SectionItem = sequelize.define(
    "SectionItem",
    {
      sectionId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Section",
          key: "id",
          primaryKey: true,
        },
      },
      itemId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Item",
          key: "id",
          primaryKey: true,
        },
      },
      displayOrder: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: true,
      tableName: "SectionItem",
      indexes: [
        {
          unique: true,
          fields: ["SectionId", "ItemId"],
        },
      ],
    },
  );

  return SectionItem;
};
