import { slugify, titleParser } from "@sudonick/common";
import { notionParse } from "./notionParse";
import { PageResponse } from "../graphqlTypes";
import { Client } from "@notionhq/client/build/src";

export const getPage = async (
  slug: string,
  notion: Client,
  pageId: string
): Promise<PageResponse | null> => {
  try {
    const posts = await notion.blocks.children.list({
      block_id: pageId!,
      page_size: 100,
    });

    const postDetails: any = posts.results.filter((post: any) => {
      if(!post[post.type].title){
        return false;
      }
      return slugify(titleParser(post[post.type].title).title) === slug;
    })[0];

    if (!postDetails) {
      return null;
    }

    const postId = postDetails?.id;
    const postTitle: string = postDetails[postDetails.type].title;
    const post: any = await notion.blocks.children.list({ block_id: postId });

    // console.log(JSON.stringify(post.results, null, 1));

    const parsedBlocks = notionParse(post.results);

    // console.log(JSON.stringify(parsedBlocks, null, 1));

    return {
      title: postTitle,
      blocks: parsedBlocks,
      published: postDetails.last_edited_time,
    };
  } catch (err) {
    console.log(err);
    return null;
  }
};
