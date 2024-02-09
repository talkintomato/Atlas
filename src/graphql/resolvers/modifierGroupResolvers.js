const { ModifierGroup } = require("../../models");

const modifierGroupResolvers = {
  Query: {
    modifierGroups: async () => await ModifierGroup.findAll(),
    modifierGroup: async (_, { id }) => await ModifierGroup.findByPk(id),
  },
  ModifierGroup: {
    modifiers: async (modifierGroup) => await modifierGroup.getModifiers(),
  },
};

module.exports = modifierGroupResolvers;
