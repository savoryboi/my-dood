const express = require("express");
const path = require("path");
const { ApolloServer } = require("apollo-server-express");
const db = require("./config/connection");
const { typeDefs, resolvers } = require("./schemas");
const PORT = process.env.PORT || 3333;
const { authMiddleware } = require("./auth");
const api_routes = require("./routes/api_routes");

const app = express();

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.static(path.join(__dirname, "./public/")));
app.use(express.static(path.resolve(__dirname, '../client/public')))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", api_routes);

async function startServer(typeDefs, resolvers) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
  });

  await server.start();

  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log("Express started on port %s", PORT);
      console.log("GraphQL is ready on %s", server.graphqlPath);
    });
  });
}

startServer(typeDefs, resolvers);
