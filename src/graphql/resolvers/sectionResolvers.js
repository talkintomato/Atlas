const { Section, SectionItem, Item } = require("../../models");

const sectionResolvers = {
  Query: {
    sections: async () => await Section.findAll(),
    section: async (_, { id }) => await Section.findByPk(id),
  },
  Section: {
    items: async (section) => {
      const sectionId = section.id;
      const sectionItems = await SectionItem.findAll({
        where: { sectionId: sectionId },
        include: [{
          model: Item,
          as: 'item', 
        }]
      });

      const items = await Item.findAll({
        include: [{
          model: Section,
          as: 'sections',
          where: { id: sectionId }
        }]
      });

      const combinedItems = items.map(item => {
        const sectionItem = sectionItems.find(si => si.item.id === item.id);
        return {
          ...item.toJSON(), 
          displayOrder: sectionItem ? sectionItem.displayOrder : null,
        };
      });
      return combinedItems;
    },
  },
};

module.exports = sectionResolvers;
