const { Section } = require('../../models');

const sectionResolvers = {
  Query: {
    sections: async () => await Section.findAll(),
    section: async (_, { id }) => await Section.findByPk(id),
  },
  Section: {
    items: async (section) => await section.getItems(),
  },
};

module.exports = sectionResolvers;