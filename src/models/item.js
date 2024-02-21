"use strict";

module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define(
    "Item",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      type: {
        type: DataTypes.ENUM("product", "component"),
        allowNull: false,
      },
      label: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      isAvailable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      }, 
      link: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      sequelize,
      tableName: "Item",
      timestamps: true,
    },
  );

  Item.associate = function (models) {
    // Many-to-Many: Section <-> Item
    Item.belongsToMany(models.Section, {
      through: "SectionItem",
      foreignKey: "itemId",
      otherKey: "sectionId",
    });

    // Many-to-Many: ModifierGroup <-> Item
    Item.belongsToMany(models.ModifierGroup, {
      through: "ItemModifierGroup",
      foreignKey: "itemId",
      otherKey: "modifierGroupId",
    });

    // Direct relationship with Modifiers
    Item.hasMany(models.Modifier, {
      foreignKey: "itemId",
      as: "modifiers",
    });
  };

  return Item;
};
