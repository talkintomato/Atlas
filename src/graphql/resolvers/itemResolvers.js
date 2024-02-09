const { Item } = require("../../models");

const itemResolvers = {
  Query: {
    items: async () => await Item.findAll(),
    item: async (_, { id }) => await Item.findByPk(id),
  },
  Item: {
    modifierGroups: async (item) => await item.getModifierGroups(),
  },
};

module.exports = itemResolvers;
