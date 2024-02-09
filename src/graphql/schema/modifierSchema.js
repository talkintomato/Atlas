const { gql } = require("apollo-server-express");

const modifierSchema = gql`
  type Modifier {
    itemId: ID!
    modifierGroupId: ID!
    displayOrder: Int
    defaultQuantity: Int
    priceOverride: Float
    item: Item
    modifierGroup: ModifierGroup
  }

  extend type Query {
    modifiers: [Modifier]
    modifier(itemId: ID!, modifierGroupId: ID!): Modifier
  }
`;

module.exports = modifierSchema;
