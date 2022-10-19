import { GraphQLServer } from 'graphql-yoga';

// Type definitions (Schema)

const typeDefs = `
  type Query {
     me: User!
     post: Post!
     greatening(name: String): String!
  }

 type User {
    id: ID!
    name: String!
    age: Int
 }

 type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
 }
`;

// Resolvers (are simply the functions)

const resolvers = {
  Query: {
    greatening(parent, args, ctx, info) {
      return `Hello ${args.name}`;
    },
    me() {
      return {
        id: 'chdsh',
        name: 'Sourav',
      };
    },
    post() {
      return {
        id: 'abc123',
        title: 'Graphql with React',
        body: 'This is a React component',
        published: true,
      };
    },
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => {
  console.log('Server is running....');
});
