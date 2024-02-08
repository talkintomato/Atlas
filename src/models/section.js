"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Section extends Model {
    static associate(models) {
      Section.belongsToMany(models.Menu, {
        through: "MenuSection",
        foreignKey: "SectionId",
      });
      Section.belongsToMany(models.Item, {
        through: "SectionItem",
        foreignKey: "SectionId",
      });
    }
  }
  Section.init(
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
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      sequelize,
      modelName: "Section",
    },
  );
  return Section;
};
