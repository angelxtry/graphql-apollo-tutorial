import { ApolloServer } from 'apollo-server';
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';
import schemas from './schemas';

const options = {
  port: 9999,
  playground: '/playground',
};

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: schemas,
  resolvers,
});

const server = new ApolloServer({ schema });

server.listen(options, () => {
  console.log('Server start.');
});
