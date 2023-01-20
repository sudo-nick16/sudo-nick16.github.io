import { Arg, Query, Resolver } from "type-graphql";
import { Client } from "@notionhq/client";
import { Block, PageResponse, User } from "../graphqlTypes";
import { getPage } from "../utils/getPage";
import { getParentPage } from "../utils/getParentPage";
import { getUser } from "../utils/getUser";
import { NOTION_KEY, NOTION_ME, NOTION_POSTS, NOTION_PROJECTS } from "../../constants";

const notion = new Client({ auth: NOTION_KEY! });

@Resolver()
export class PostsResolver {
    @Query(() => String)
    async hello() {
        return "Hi!";
    }

    @Query(() => User, { nullable: true })
    async me(): Promise<User | null> {
        return await getUser(notion, NOTION_ME);
    }

    @Query(() => PageResponse, { nullable: true })
    async post(
        @Arg("slug", () => String) slug: string): Promise<PageResponse | null> {
        return await getPage(slug, notion, NOTION_POSTS);
    }

    @Query(() => [Block], { nullable: true })
    async posts(): Promise<Block[] | null> {
        return await getParentPage(notion, NOTION_POSTS);
    }

    @Query(() => PageResponse, { nullable: true })
    async project(@Arg("slug", () => String) slug: string): Promise<PageResponse | null> {
        return await getPage(slug, notion, NOTION_PROJECTS);
    }

    @Query(() => [Block], { nullable: true })
    async projects(): Promise<Block[] | null> {
        return await getParentPage(notion, NOTION_PROJECTS);
    }
}
