"use strict";

module.exports = (sequelize, DataTypes) => {
  const Section = sequelize.define(
    "Section",
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
      isAvailable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      timestamps: true,
      tableName: "Section",
    },
  );

  Section.associate = (models) => {
    Section.belongsToMany(models.Menu, {
      as: 'menus',
      through: "MenuSection",
      foreignKey: "sectionId",
      otherKey: "menuId",
    });
    Section.belongsToMany(models.Item, {
      as: 'items',
      through: "SectionItem",
      foreignKey: "sectionId",
      otherKey: "itemId",
    });
  };

  return Section;
};
