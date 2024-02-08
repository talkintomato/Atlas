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
      selection_required_min: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      selection_required_max: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: true,
    },
  );

  ModifierGroup.associate = function (models) {
    // Many-to-Many: ModifierGroup <-> Item
    ModifierGroup.belongsToMany(models.Item, {
      through: "ItemModifierGroup",
      foreignKey: "ModifierGroupId",
      otherKey: "ItemId",
    });

    // Many-to-Many: ModifierGroup <-> Modifier
    ModifierGroup.hasMany(models.Modifier, {
      foreignKey: "ModifierGroupId",
    });
  };

  return ModifierGroup;
};
