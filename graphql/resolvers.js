const Recipe = require("../models/Recipe");

module.exports = {
  Query: {
    async readRecipe(_, { ID }) {
      return await Recipe.findById(ID);
    },
    async getRecipe(_, { amount }) {
      return await Recipe.find().sort({ createdAt: -1 }).limit(amount);
    },
  },
  Mutation: {
    async createRecipe(_, { recipeInput: { name, description } }) {
      const createdRecipe = new Recipe({
        name: name,
        description: description,
        createdAt: new Date().toISOString(),
        thumbsUp: 0,
        thumbsDown: 0,
      });
      const result = await createdRecipe.save();
      return {
        id: result.id,
        ...result._doc,
      };
    },
    async deleteRecipe() {
      const wasDeleted = (await Recipe.deleteOne({ _id: ID })).deleteCount;
      return wasDeleted;
    },
    async editRecipe() {
      const wasEdited = (
        await Recipe.updateOne(
          { _id: ID },
          { name: name, description: description }
        )
      ).modifiedCount;
      return wasEdited;
    },
  },
};
