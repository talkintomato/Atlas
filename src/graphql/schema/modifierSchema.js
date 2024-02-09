const { gql } = require('apollo-server-express');

const modifierSchema = gql`
  type Modifier {
    itemId: ID!
    modifierGroupId: ID!
    display_order: Int
    default_quantity: Int
    price_override: Float
    item: Item
    modifierGroup: ModifierGroup
  }

  extend type Query {
    modifiers: [Modifier]
    modifier(itemId: ID!, modifierGroupId: ID!): Modifier
  }
`;

module.exports = modifierSchema;
