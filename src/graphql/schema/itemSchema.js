const { gql } = require("apollo-server-express");

const itemSchema = gql`
  type Item {
    id: ID!
    type: String
    label: String
    description: String
    price: Float
    modifierGroups: [ModifierGroup!]!
  }

  extend type Query {
    items: [Item]
    item(id: ID!): Item
  }

  type Mutation {
    createProduct(label: String!, description: String, price: Float!): Item

    createComponent(label: String!, description: String, price: Float!): Item

    updateItem(
      id: ID!
      type: String
      label: String
      description: String
      price: Float
    ): Item

    associateItemModifierGroup(itemId: ID!, modifierGroupId: ID!): Boolean

    deleteItem(id: ID!): Boolean
  }
`;

module.exports = itemSchema;
