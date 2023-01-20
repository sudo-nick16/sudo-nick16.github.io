import "reflect-metadata";

import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { schema } from "../../graphql"

const server = new ApolloServer({ schema });

export default startServerAndCreateNextHandler(server);
