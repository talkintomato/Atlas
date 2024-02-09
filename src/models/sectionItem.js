"use strict";

module.exports = (sequelize, DataTypes) => {
  const SectionItem = sequelize.define(
    "SectionItem",
    {
      SectionId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Section",
          key: "id",
          primaryKey: true,
        },
      },
      ItemId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Item",
          key: "id",
          primaryKey: true,
        },
      },
      display_order: {
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
