import { buildSchema } from "type-graphql"
import { PostsResolver } from "./resolvers/pages"

export const schema = await buildSchema({
    resolvers: [PostsResolver],
})
