import { Client } from "@notionhq/client/build/src";
import { Block } from "../graphqlTypes";
import { slugify } from "./slugify";

export const getParentPage = async (notion: Client, pageId: string): Promise<Block[] | null> => {
    try {
        const posts = await notion.blocks.children.list({
          block_id: pageId!,
          page_size: 100,
        });
  
        const blocks: Block[] = [];
        
        posts.results.forEach((post: any) => {
          // console.log(post[post.type].title);
          if(post[post.type].title){
            const meta = {
              title: post[post.type].title,
              slug: slugify(post[post.type].title),
              last_edited: post.last_edited_time,
              id: post.id,
            };
            blocks.push(meta);
          }
        });
  
        return blocks;
  
      } catch (err) {
        console.log(err);
        return null;
      }
}