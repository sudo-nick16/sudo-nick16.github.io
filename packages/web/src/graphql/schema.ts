import { buildSchema } from "type-graphql";
import { PostsResolver } from "./resolvers/pages";

const schema = await buildSchema({
    resolvers: [PostsResolver],
});

export default schema;
