const menuResolvers = require("./menuResolvers");
const sectionResolvers = require("./sectionResolvers");
const itemResolvers = require("./itemResolvers");
const modifierGroupResolvers = require("./modifierGroupResolvers");
const modifierResolvers = require("./modifierResolvers");

const resolvers = {
  Query: {
    ...menuResolvers.Query,
    ...sectionResolvers.Query,
    ...itemResolvers.Query,
    ...modifierGroupResolvers.Query,
    ...modifierResolvers.Query,
  },

  Mutation: {
    ...menuResolvers.Mutation,
    ...sectionResolvers.Mutation,
    ...itemResolvers.Mutation,
    ...modifierGroupResolvers.Mutation,
    ...modifierResolvers.Mutation,
  },

  Menu: menuResolvers.Menu,
  Section: sectionResolvers.Section,
  Item: itemResolvers.Item,
  ModifierGroup: modifierGroupResolvers.ModifierGroup,
  Modifier: modifierResolvers.Modifier,
};

module.exports = resolvers;
