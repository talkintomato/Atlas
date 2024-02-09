const { gql } = require("apollo-server-express");

const modifierGroupSchema = gql`
  type ModifierGroup {
    id: ID!
    label: String
    selectionRequiredMin: Int
    selectionRequiredMax: Int
    modifiers: [Modifier]
  }

  extend type Query {
    modifierGroups: [ModifierGroup]
    modifierGroup(id: ID!): ModifierGroup
  }

  type Mutation {
    createModifierGroup(
      label: String!
      selectionRequiredMin: Int
      selectionRequiredMax: Int
    ): ModifierGroup
    updateModifierGroup(
      id: ID!
      label: String
      selectionRequiredMin: Int
      selectionRequiredMax: Int
    ): ModifierGroup
    deleteModifierGroup(id: ID!): Boolean
    createModifierAndAssociate(
      priceOverride: Float
      defaultQuantity: Int
      displayOrder: Int
      modifierGroupId: ID!
      itemId: ID!
    ): Modifier
  }
`;

module.exports = modifierGroupSchema;
