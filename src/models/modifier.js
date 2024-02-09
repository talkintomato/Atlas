"use strict";

module.exports = (sequelize, DataTypes) => {
  const Modifier = sequelize.define(
    "Modifier",
    {
      itemId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Items",
          key: "id",
        },
      },
      modifierGroupId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "ModifierGroups",
          key: "id",
        },
      },
      display_order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      default_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      price_override: {
        type: DataTypes.FLOAT,
      },
    },
    {
      sequelize,
      timestamps: true,
      tableName: 'Modifier',
    },
  );

  Modifier.associate = (models) => {
    // Direct relationship with Item
    Modifier.belongsTo(models.Item, {
      foreignKey: "itemId",
      as: "item",
    });

    // Many-to-Many: ModifierGroup <-> Modifier
    Modifier.belongsTo(models.ModifierGroup, {
      foreignKey: "modifierGroupId",
      as: "modifierGroup",
    });
  };

  return Modifier;
};
