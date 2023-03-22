const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const MONGODB_URL =
  "mongodb+srv://godanah:godanah1122@albania-info.pt2sqvc.mongodb.net/?retryWrites=true&w=majority";

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// server.listen({ port: 5000 }).then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });

mongoose
  .connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    return server.listen({ port: 5000 });
  })
  .then((result) => {
    console.log(`Server running on port ${result.url}`);
  });
