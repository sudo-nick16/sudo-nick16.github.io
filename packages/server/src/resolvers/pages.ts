import { Arg, Query, Resolver } from "type-graphql";
import { Client } from "@notionhq/client";
import { Block, PageResponse, User } from "../graphqlTypes";
import { getPage } from "../utils/getPage";
import { getParentPage } from "../utils/getParentPage";

const notion = new Client({ auth: process.env.NOTION_KEY! });
const postsId = process.env.NOTION_POSTS!;
const projectsId = process.env.NOTION_PROJECTS!;
const meId = process.env.NOTION_ME!;

@Resolver()
export class PostsResolver {
  @Query(() => String)
  async hello() {
    return "Hi!";
  }

  @Query(() => User, { nullable: true })
  async me(): Promise<User | null> {
    try {
      const user = await getParentPage(notion, meId);
      const [img, about] = user?.map((u, i) => i < 2 && u.title) as [
        string,
        string
      ];
      return {
        img,
        about,
      };
    } catch (err) {
      console.log(err);
      return null;
    }
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
