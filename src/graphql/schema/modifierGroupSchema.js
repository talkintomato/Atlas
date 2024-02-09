const { gql } = require("apollo-server-express");

const modifierGroupSchema = gql`
  type ModifierGroup {
    id: ID!
    label: String
    selection_required_min: Int
    selection_required_max: Int
    modifiers: [Modifier]
  }

  extend type Query {
    modifierGroups: [ModifierGroup]
    modifierGroup(id: ID!): ModifierGroup
  }
`;

module.exports = modifierGroupSchema;
