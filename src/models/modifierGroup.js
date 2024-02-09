"use strict";

module.exports = (sequelize, DataTypes) => {
  const ModifierGroup = sequelize.define(
    "ModifierGroup",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      label: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      selectionRequiredMin: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      selectionRequiredMax: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      sequelize,
      tableName: "ModifierGroup",
    },
  );

  ModifierGroup.associate = function (models) {
    // Many-to-Many: ModifierGroup <-> Item
    ModifierGroup.belongsToMany(models.Item, {
      through: "ItemModifierGroup",
      foreignKey: "modifierGroupId",
      otherKey: "itemId",
    });

    // One-to-Many: ModifierGroup -> Modifier
    ModifierGroup.hasMany(models.Modifier, {
      foreignKey: "modifierGroupId",
      as: "modifier",
    });
  };

  return ModifierGroup;
};
