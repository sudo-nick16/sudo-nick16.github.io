import "dotenv-safe/config";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import "reflect-metadata";
import express from "express";
import { PostsResolver } from "./resolvers/pages";
import cors from "cors";

(async () => {
  const app = express();
  app.use(cors({
    origin: process.env.ORIGIN,
  }));

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PostsResolver],
    }),
  });

  await server.start();
  server.applyMiddleware({ app, cors: false });

  app.listen(4000, () => {
    console.log("To the moon!");
  });
})();
