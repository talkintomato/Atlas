const { Menu, Section, MenuSection } = require("../../models");

const menuResolvers = {
  Query: {
    menus: async () => await Menu.findAll(),
    menu: async (_, { id }) => await Menu.findByPk(id),
  },
  Menu: {
    sections: async (menu) => {
      const menuId = menu.id;
      const menuSections = await MenuSection.findAll({
        where: { menuId: menuId },
        include: [{
          model: Section,
          as: 'section', 
        }]
      });
      const sections = await menu.getSections();

      const combinedSections = sections.map(section => {
        const menuSection = menuSections.find(ms => ms.section.id === section.id);
        return {
          ...section.toJSON(), 
          displayOrder: menuSection ? menuSection.displayOrder : null,
        };
      });
  
      return combinedSections;
      },
    },
};

module.exports = menuResolvers;
