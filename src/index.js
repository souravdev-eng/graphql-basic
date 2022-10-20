import { GraphQLServer } from 'graphql-yoga';
import Mutation from './resolvers/Mutation';
import Comment from './resolvers/Comment';
import Query from './resolvers/Query';
import User from './resolvers/User';
import Post from './resolvers/Post';
import db from './db';

// Resolvers
const resolvers = {
  Mutation,
  Comment,
  Query,
  Post,
  User,
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { db },
});

server.start(() => {
  console.log('The server is up!');
});
