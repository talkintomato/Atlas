"use strict";

module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define(
    "Menu",
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
      state: {
        type: DataTypes.ENUM("active", "inactive"),
        allowNull: false,
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      sequelize,
    },
  );

  Menu.associate = function (models) {
    Menu.belongsToMany(models.Section, {
      through: "MenuSection",
      foreignKey: "MenuId",
      otherKey: "SectionId",
    });
  };

  return Menu;
};
