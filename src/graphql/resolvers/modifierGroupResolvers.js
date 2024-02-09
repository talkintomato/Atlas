const { ModifierGroup, Item, Modifier } = require("../../models");

const modifierGroupResolvers = {
  Query: {
    modifierGroups: async () => await ModifierGroup.findAll(),
    modifierGroup: async (_, { id }) => await ModifierGroup.findByPk(id),
  },
  ModifierGroup: {
    modifiers: async (modifierGroup) => await modifierGroup.getModifiers(),
  },
  Mutation: {
    createModifierGroup: async (
      _,
      { label, selectionRequiredMin, selectionRequiredMax },
    ) => {
      try {
        const newModifierGroup = await ModifierGroup.create({
          label,
          selectionRequiredMin,
          selectionRequiredMax,
        });
        return newModifierGroup;
      } catch (error) {
        console.error("Error creating ModifierGroup:", error);
        throw new Error("Failed to create ModifierGroup.");
      }
    },
    updateModifierGroup: async (
      _,
      { id, label, selectionRequiredMin, selectionRequiredMax },
    ) => {
      try {
        const modifierGroup = await ModifierGroup.findByPk(id);
        if (!modifierGroup) {
          throw new Error("ModifierGroup not found");
        }
        await modifierGroup.update({
          label,
          selectionRequiredMin,
          selectionRequiredMax,
        });
        return modifierGroup;
      } catch (error) {
        console.error("Error updating ModifierGroup:", error);
        throw new Error("Failed to update ModifierGroup.");
      }
    },
    deleteModifierGroup: async (_, { id }) => {
      try {
        const numDeleted = await ModifierGroup.destroy({
          where: { id },
        });
        return numDeleted > 0;
      } catch (error) {
        console.error("Error deleting ModifierGroup:", error);
        throw new Error("Failed to delete ModifierGroup.");
      }
    },
    createModifierAndAssociate: async (_, input) => {
      const {
        priceOverride,
        defaultQuantity,
        displayOrder,
        modifierGroupId,
        itemId,
      } = input;

      // Step 1: Validate existence of ModifierGroup and Item
      const modifierGroup = await ModifierGroup.findByPk(modifierGroupId);
      if (!modifierGroup) {
        throw new Error("ModifierGroup not found");
      }

      const item = await Item.findByPk(itemId);
      if (!item) {
        throw new Error("Item not found");
      }

      // Step 2: Create the Modifier
      const newModifier = await Modifier.create({
        modifierGroupId,
        itemId,
        priceOverride,
        defaultQuantity,
        displayOrder,
      });

      return newModifier;
    },
  },
};

module.exports = modifierGroupResolvers;
