"use strict";

module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define(
    "Menu",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
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
      startDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      sequelize,
      tableName: "Menu",
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
