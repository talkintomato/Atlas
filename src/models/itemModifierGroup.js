"use strict";
module.exports = (sequelize, DataTypes) => {
  const ItemModifierGroup = sequelize.define(
    "ItemModifierGroup",
    {
      itemId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Item",
          key: "id",
        },
        primaryKey: true,
      },
      modifierGroupId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "ModifierGroup",
          key: "id",
        },
        primaryKey: true,
      },
    },
    {
      timestamps: true,
      sequelize,
      tableName: "ItemModifierGroup",
    },
  );
  return ItemModifierGroup;
};
