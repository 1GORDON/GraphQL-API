// const gql = require("apollo-server");
// import { gql } from "graphql-tag";

const gql = require("graphql-tag");

module.exports = gql`
  type Recipe {
    name: String
    description: String
    createdAt: String
    thumbsUp: Int
    thumbsDown: Int
  }

  input RecipeInput {
    name: String
    description: String
  }

  type Query {
    readRecipe(ID: ID!): Recipe!
    getRecipe(amount: Int): [Recipe]
  }

  type Mutation {
    createRecipe(recipeInput: RecipeInput): Recipe!
    deleteRecipe(ID: ID!): Boolean
    editRecipe(ID: ID!, recipeInput: RecipeInput): Boolean
  }
`;
