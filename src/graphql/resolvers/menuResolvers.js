const { Menu } = require('../../models');

const menuResolvers = {
  Query: {
    menus: async () => await Menu.findAll(),
    menu: async (_, { id }) => await Menu.findByPk(id),
  },
  Menu: {
    sections: async (menu) => await menu.getSections(),
  },
};

module.exports = menuResolvers;
