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
`;

module.exports = modifierGroupSchema;
