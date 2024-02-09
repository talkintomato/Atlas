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
    },
    {
      sequelize,
      timestamps: true,
      tableName: "Section",
    },
  );

  Section.associate = (models) => {
    Section.belongsToMany(models.Menu, {
      through: "MenuSection",
      foreignKey: "SectionId",
    });
    Section.belongsToMany(models.Item, {
      through: "SectionItem",
      foreignKey: "SectionId",
    });
  };

  return Section;
};
