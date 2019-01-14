import { GraphQLServer } from "graphql-yoga";

// type definitions aka schemas

const typeDefs = `
  type Query {
    me: User!
    latestPost: Post!
    greeting(name: String, position: String): String!
    add(Numbers: [Float!]): Float!
    grades: [Int!]!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean
  }
`;

// resolvers
const resolvers = {
  Query: {
    add(parent, args, ctx, position) {
      if (args.Numbers.length === 0) {
        return 0;
      }

      return args.Numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      });
    },
    grades(parent, args, ctx, position) {
      return [99, 80, 93];
    },
    greeting(parent, args, ctx, info) {
      if (args.name && args.position) {
        return `Hello ${args.name}. You are my favorite ${args.position}!`;
      } else if (args.name) {
        return `Hello ${args.name}, you are awesome!`;
      } else {
        return "Hello ";
      }
    },
    me() {
      return {
        id: "123abc",
        name: "Frank Pigeon Jr.",
        email: "frank.pigeonjr@gmail.com",
        age: 40
      };
    },

    latestPost() {
      return {
        id: "my-latest-post",
        title: "My Latest Post",
        body: `lorem ipsasdhaisud asodihaosdih asoidoaishdoaisd asodihasd the hot for each loop random javaScript is the new React PHP.`,
        published: true
      };
    }
  }
};

// start server on localhost port 4000

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => {
  console.log("the server is running on localhost:4000");
});
