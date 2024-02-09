const { Modifier, Item, ModifierGroup } = require("../../models");

const modifierResolvers = {
  Query: {
    modifiers: async () => await Modifier.findAll(),
    modifier: async (_, { itemId, modifierGroupId }) =>
      await Modifier.findOne({ where: { itemId, modifierGroupId } }),
  },
  Modifier: {
    item: async (modifier) => await Item.findByPk(modifier.itemId),
    modifierGroup: async (modifier) =>
      await ModifierGroup.findByPk(modifier.modifierGroupId),
  },
};

module.exports = modifierResolvers;
