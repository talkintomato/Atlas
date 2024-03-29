const { gql } = require("apollo-server-express");

const sectionSchema = gql`
  type Section {
    id: ID!
    label: String
    description: String
    items: [Item]
  }

  extend type Query {
    sections: [Section]
    section(id: ID!): Section
  }
`;

module.exports = sectionSchema;
