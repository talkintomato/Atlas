"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Menu extends Model {
    static associate(models) {
      Menu.belongsToMany(models.Section, {
        through: "MenuSection",
        foreignKey: "MenuId",
      });
    }
  }
  Menu.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      label: DataTypes.STRING,
      state: {
        type: DataTypes.ENUM("active", "inactive"),
        allowNull: false,
      },
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
    },
    {
      timestamps: true,
      sequelize,
      modelName: "Menu",
    },
  );
  return Menu;
};
