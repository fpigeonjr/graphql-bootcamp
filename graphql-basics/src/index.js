import { GraphQLServer } from "graphql-yoga";

// type definitions aka schemas

const typeDefs = `
  type Query {
    hello: String!
    name: String!
    location: String!
    bio: String!
  }
`;

// resolvers
const resolvers = {
  Query: {
    hello() {
      return "this is my first query!";
    },
    name() {
      return "Frank Pigeon";
    },
    location() {
      return "San Antonio, TX";
    },
    bio() {
      return "frontend developer for US Army";
    }
  }
};

// start server on localhost port 4000

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => {
  console.log("the server is running on localhost:4000");
});
