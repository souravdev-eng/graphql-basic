import { GraphQLServer, PubSub } from 'graphql-yoga';
import Subscription from './resolvers/Subscription';
import Mutation from './resolvers/Mutation';
import Comment from './resolvers/Comment';
import Query from './resolvers/Query';
import User from './resolvers/User';
import Post from './resolvers/Post';
import db from './db';

const pubsub = new PubSub();

const resolvers = {
  Subscription,
  Mutation,
  Comment,
  Query,
  Post,
  User,
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { db, pubsub },
});

server.start(() => {
  console.log('The server is up!');
});
