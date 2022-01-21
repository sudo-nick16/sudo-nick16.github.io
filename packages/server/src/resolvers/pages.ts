import { Arg, Query, Resolver } from "type-graphql";
import { Client } from "@notionhq/client";
import { Block, PageResponse } from "../graphqlTypes";
import { getPage } from "../utils/getPage";
import { getParentPage } from "../utils/getParentPage";

const notion = new Client({ auth: process.env.NOTION_KEY });
const postsId = process.env.NOTION_POSTS;
const projectsId = process.env.NOTION_PROJECTS;

@Resolver()
export class PostsResolver {
  @Query(() => String)
  async hello() {
    return "Hi!";
  }

  @Query(() => PageResponse, { nullable: true })
  async post(@Arg("slug") slug: string): Promise<PageResponse | null> {
    return await getPage(slug, notion, postsId!);
  }

  @Query(() => [Block], { nullable: true })
  async posts(): Promise<Block[] | null> {
    return await getParentPage(notion, postsId!);
  }

  @Query(() => PageResponse, { nullable: true })
  async project(@Arg("slug") slug: string): Promise<PageResponse | null> {
    return await getPage(slug, notion, projectsId!);
  }

  @Query(() => [Block], { nullable: true })
  async projects(): Promise<Block[] | null> {
    return await getParentPage(notion, projectsId!);
  }
}
