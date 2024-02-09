const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/schema'); 
const resolvers = require('./graphql/resolvers'); 

async function startServer() {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app, path: '/graphql' });

  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}${apolloServer.graphqlPath}`);
  });
}

startServer();
