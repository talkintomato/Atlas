const { gql } = require('apollo-server-express');

const itemSchema = gql`
  type Item {
    id: ID!
    type: String
    label: String
    description: String
    price: Float
    modifiers: [Modifier]
  }

  extend type Query {
    items: [Item]
    item(id: ID!): Item
  }
`;

module.exports = itemSchema;
