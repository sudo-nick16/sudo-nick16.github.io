import "reflect-metadata";

import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { buildSchema } from "type-graphql";
import { PostsResolver } from "../../graphql/resolvers/pages";

const schema = await buildSchema({
    resolvers: [PostsResolver],
})

const server = new ApolloServer({
    schema,
});


export default startServerAndCreateNextHandler(server);
