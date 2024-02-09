"use strict";
module.exports = {
  up: async (queryInterface) => {
    const menus = [
      {
        id: "969c233a-7a9e-4806-a432-2ca87ba521b7",
        label: "Christmas Menu",
        state: "active",
        startDate: new Date(),
        endDate: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "a371f1c3-a53e-4f19-a8ea-5b3c726d16fb",
        label: "New Year Menu",
        state: "active",
        startDate: null,
        endDate: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("Menu", menus);

    const sections = [
      {
        id: "65d5cb49-661e-445e-bd9d-a6267943503e",
        label: "Appetizers",
        description: "Starter dishes to begin your meal",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "652ede15-3e48-4080-a0a7-1c1514b5834b",
        label: "Main Courses",
        description: "Hearty and fulfilling main dishes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "8ff9f47d-35c0-4b21-b4a5-6126bcc08b2b",
        label: "Desserts",
        description: "Sweet treats to conclude your meal",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("Section", sections);

    const menuSections = [
      {
        menuId: "969c233a-7a9e-4806-a432-2ca87ba521b7", // Christmas Menu
        sectionId: "652ede15-3e48-4080-a0a7-1c1514b5834b", // Main Courses
        displayOrder: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menuId: "a371f1c3-a53e-4f19-a8ea-5b3c726d16fb", // New Year Menu
        sectionId: "652ede15-3e48-4080-a0a7-1c1514b5834b", // Main Courses
        displayOrder: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menuId: "969c233a-7a9e-4806-a432-2ca87ba521b7", // Christmas Menu
        sectionId: "8ff9f47d-35c0-4b21-b4a5-6126bcc08b2b", // Desserts
        displayOrder: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menuId: "a371f1c3-a53e-4f19-a8ea-5b3c726d16fb", // New Year Menu
        sectionId: "65d5cb49-661e-445e-bd9d-a6267943503e", // Appetizers
        displayOrder: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("MenuSection", menuSections);

    const items = [
      {
        id: "3e3f5fe2-b0c0-4312-b188-72694b920cdd",
        type: "product",
        label: "Grilled Chicken Breast",
        description:
          "A perfectly grilled chicken breast served with side salad",
        price: 15.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "11afd9d4-0673-45e7-ba1d-a33bfba5ad12",
        type: "product",
        label: "Fried Chicken Breast",
        description:
          "A perfectly grilled chicken breast served with side salad",
        price: 15.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "b9bb827f-df70-4e69-8d0c-be962ac72697",
        type: "product",
        label: "Lava Cake",
        description: "Oozing with dark chocolate",
        price: 15.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "313ee042-7242-49f5-ab71-2e8ad61482d1",
        type: "product",
        label: "Bread Basket",
        description: "Toasted to perfection",
        price: 15.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "4019fbad-1717-4994-b77b-9f0a8553b340",
        type: "component",
        label: "Extra Chicken",
        description: "Add an extra chicken breast to your meal",
        price: 5.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "fa16e3fd-28c2-4d39-a9d1-b8e87ddd52e9",
        type: "component",
        label: "BBQ sauce",
        description: "Smokey flavour",
        price: 1.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "cacd2100-cdc3-4e9d-9949-45b450a71f5b",
        type: "component",
        label: "Chilli sauce",
        description: "Smokey flavour",
        price: 1.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("Item", items, {});

    const sectionItems = [
      {
        sectionId: "65d5cb49-661e-445e-bd9d-a6267943503e",
        itemId: "313ee042-7242-49f5-ab71-2e8ad61482d1",
        displayOrder: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        sectionId: "8ff9f47d-35c0-4b21-b4a5-6126bcc08b2b",
        itemId: "b9bb827f-df70-4e69-8d0c-be962ac72697",
        displayOrder: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        sectionId: "652ede15-3e48-4080-a0a7-1c1514b5834b",
        itemId: "11afd9d4-0673-45e7-ba1d-a33bfba5ad12",
        displayOrder: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        sectionId: "652ede15-3e48-4080-a0a7-1c1514b5834b",
        itemId: "3e3f5fe2-b0c0-4312-b188-72694b920cdd",
        displayOrder: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("SectionItem", sectionItems);

    // ModifierGroups
    const modifierGroups = [
      {
        id: "3e587e6d-e2cf-47fc-b69c-32e4396d2230",
        label: "Sauces",
        selectionRequiredMin: 1,
        selectionRequiredMax: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "3eb7af47-7697-4c1a-a3eb-f5b9ddaeedc4",
        label: "Add-ons",
        selectionRequiredMin: 0,
        selectionRequiredMax: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("ModifierGroup", modifierGroups, {});

    // Modifiers
    const modifiers = [
      {
        itemId: "fa16e3fd-28c2-4d39-a9d1-b8e87ddd52e9",
        modifierGroupId: "3e587e6d-e2cf-47fc-b69c-32e4396d2230",
        displayOrder: 0,
        defaultQuantity: 0,
        priceOverride: 0.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: "313ee042-7242-49f5-ab71-2e8ad61482d1",
        modifierGroupId: "3eb7af47-7697-4c1a-a3eb-f5b9ddaeedc4",
        displayOrder: 0,
        defaultQuantity: 0,
        priceOverride: 3.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: "cacd2100-cdc3-4e9d-9949-45b450a71f5b",
        modifierGroupId: "3e587e6d-e2cf-47fc-b69c-32e4396d2230",
        displayOrder: 1,
        defaultQuantity: 1,
        priceOverride: 0.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemId: "4019fbad-1717-4994-b77b-9f0a8553b340",
        modifierGroupId: "3eb7af47-7697-4c1a-a3eb-f5b9ddaeedc4",
        displayOrder: 0,
        defaultQuantity: 0,
        priceOverride: 6.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("Modifier", modifiers, {});

    const itemModifierGroups = [
      {
        itemId: "3e3f5fe2-b0c0-4312-b188-72694b920cdd",
        modifierGroupId: "3e587e6d-e2cf-47fc-b69c-32e4396d2230",
        createdAt: "2024-02-09 05:34:38.558+00",
        updatedAt: "2024-02-09 05:34:38.558+00",
      },
      {
        itemId: "3e3f5fe2-b0c0-4312-b188-72694b920cdd",
        modifierGroupId: "3eb7af47-7697-4c1a-a3eb-f5b9ddaeedc4",
        createdAt: "2024-02-09 05:34:38.558+00",
        updatedAt: "2024-02-09 05:34:38.558+00",
      },
      {
        itemId: "11afd9d4-0673-45e7-ba1d-a33bfba5ad12",
        modifierGroupId: "3eb7af47-7697-4c1a-a3eb-f5b9ddaeedc4",
        createdAt: "2024-02-09 05:34:38.558+00",
        updatedAt: "2024-02-09 05:34:38.558+00",
      },
      {
        itemId: "11afd9d4-0673-45e7-ba1d-a33bfba5ad12",
        modifierGroupId: "3e587e6d-e2cf-47fc-b69c-32e4396d2230",
        createdAt: "2024-02-09 05:53:42+00",
        updatedAt: "2024-02-09 05:53:44+00",
      },
    ];
    await queryInterface.bulkInsert(
      "ItemModifierGroup",
      itemModifierGroups,
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("ItemModifierGroup", null, {});
    await queryInterface.bulkDelete("Modifier", null, {});
    await queryInterface.bulkDelete("ModifierGroup", null, {});
    await queryInterface.bulkDelete("SectionItem", null, {});
    await queryInterface.bulkDelete("Item", null, {});
    await queryInterface.bulkDelete("MenuSection", null, {});
    await queryInterface.bulkDelete("Section", null, {});
    await queryInterface.bulkDelete("Menu", null, {});
  },
};
