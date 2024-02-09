const { Item } = require('../../models');

const itemResolvers = {
  Query: {
    items: async () => await Item.findAll(),
    item: async (_, { id }) => await Item.findByPk(id),
  },
  Item: {
    modifiers: async (item) => await item.getModifiers(),
  },
};

module.exports = itemResolvers;
