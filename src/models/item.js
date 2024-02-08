"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      Item.belongsToMany(models.Section, {
        through: "SectionItem",
        foreignKey: "ItemId",
      });
    }
  }
  Item.init(
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
      description: DataTypes.STRING,
      price: DataTypes.FLOAT,
    },
    {
      timestamps: true,
      sequelize,
      modelName: "Item",
    },
  );
  return Item;
};
