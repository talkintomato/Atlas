const { gql } = require('apollo-server-express');
const menuSchema = require('./menuSchema');
const sectionSchema = require('./sectionSchema');
const itemSchema = require('./itemSchema');
const modifierGroupSchema = require('./modifierGroupSchema');
const modifierSchema = require('./modifierSchema');

const linkSchema = gql`
  scalar Date

  type Query {
    _: Boolean
  }
  
  type Mutation {
    _: Boolean
  }
`;

module.exports = [
  linkSchema,
  menuSchema,
  sectionSchema,
  itemSchema,
  modifierGroupSchema,
  modifierSchema,
];
