const { Item, ItemModifierGroup } = require("../../models");

const itemResolvers = {
  Query: {
    items: async () => {
      try {
        return await Item.findAll();
      } catch (error) {
        console.error("Failed to fetch items:", error);
        throw new Error("Failed to fetch items.");
      }
    },
    item: async (_, { id }) => {
      try {
        const item = await Item.findByPk(id);
        if (!item) {
          throw new Error("Item not found");
        }
        return item;
      } catch (error) {
        console.error(`Failed to fetch item with ID ${id}:`, error);
        throw new Error("Failed to fetch item.");
      }
    },
  },
  Item: {
    modifierGroups: async (item) => {
      try {
        return await item.getModifierGroups();
      } catch (error) {
        console.error(
          `Failed to fetch modifier groups for item ID ${item.id}:`,
          error,
        );
        throw new Error("Failed to fetch modifier groups.");
      }
    },
  },

  Mutation: {
    createProduct: async (_, { label, description, price }) => {
      try {
        const newItem = await Item.create({
          type: "product",
          label,
          description,
          price,
        });
        return newItem;
      } catch (error) {
        console.error("Error creating product:", error);
        throw new Error("Failed to create item.");
      }
    },
    createComponent: async (_, { label, description, price }) => {
      try {
        const newItem = await Item.create({
          type: "component",
          label,
          description,
          price,
        });
        return newItem;
      } catch (error) {
        console.error("Error creating product:", error);
        throw new Error("Failed to create item.");
      }
    },
    updateItem: async (_, { id, type, label, description, price }) => {
      try {
        const item = await Item.findByPk(id);
        if (!item) {
          throw new Error("Item not found");
        }
        await item.update({ type, label, description, price });
        return item;
      } catch (error) {
        console.error(`Error updating item with ID ${id}:`, error);
        throw new Error("Failed to update item.");
      }
    },
    associateItemModifierGroup: async (_, { itemId, modifierGroupId }) => {
      try {
        // Check for existing association to prevent duplicates
        const existingAssociation = await ItemModifierGroup.findOne({
          where: { itemId, modifierGroupId },
        });

        if (existingAssociation) {
          throw new Error("Association already exists");
        }

        // Create new association
        await ItemModifierGroup.create({ itemId, modifierGroupId });
        return true;
      } catch (error) {
        console.error(`Error associating Item and ModifierGroup:`, error);
        throw new Error("Failed to associate Item and ModifierGroup.");
      }
    },
    deleteItem: async (_, { id }) => {
      try {
        const numDeleted = await Item.destroy({ where: { id } });
        if (numDeleted === 0) {
          throw new Error("Item not found or unable to delete");
        }
        return true;
      } catch (error) {
        console.error(`Error deleting item with ID ${id}:`, error);
        throw new Error("Failed to delete item.");
      }
    },
  },
};

module.exports = itemResolvers;
