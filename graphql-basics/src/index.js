import { GraphQLServer } from "graphql-yoga";

// type definitions aka schemas

const typeDefs = `
  type Query {
    title: String!
    price: Float!
    releaseYear: Int
    rating: Float
    inStock: Boolean!
  }
`;

// resolvers
const resolvers = {
  Query: {
    title() {
      return "My Awesome Title";
    },
    price() {
      return 5.99;
    },
    releaseYear() {
      return 1987;
    },
    rating() {
      return 4.97;
    },
    inStock() {
      return true;
    }
  }
};

// start server on localhost port 4000

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => {
  console.log("the server is running on localhost:4000");
});
