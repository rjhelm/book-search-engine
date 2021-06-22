const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth');
// import typeDef and resolvers //
const { typeDefs, resolvers } = require('./schemas');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Apollo Server //
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
})

// use express as middleware and integrate apollo server //
server.applyMiddleware({app});

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*',  (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {console.log(`🌍 Now listening on localhost:${PORT}`);
  // GraphQL Test Location for GQL API //
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);

  });
});

process.on('uncaughtException', function(err) {
  console.log('Caught exception: ' + err);
});
