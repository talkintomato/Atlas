const { gql } = require('apollo-server-express');

const menuSchema = gql`
  type Menu {
    id: ID!
    label: String
    state: String
    start_date: String
    end_date: String
    sections: [Section]
  }

  extend type Query {
    menus: [Menu]
    menu(id: ID!): Menu
  }
`;

module.exports = menuSchema;
