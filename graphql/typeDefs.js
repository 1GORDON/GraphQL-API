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
    readRecipe(id: ID!): Recipe!
    getRecipe(amount: Int): [Recipe]
  }

  type Mutation {
    createRecipe(recipeInput: RecipeInput): Recipe!
    deleteRecipe(id: ID!): Boolean
    editRecipe(id: ID!, recipeInput: RecipeInput): Boolean
  }
`;
