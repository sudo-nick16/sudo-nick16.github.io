import { Client } from "@notionhq/client/build/src";
import { Block, User } from "../graphqlTypes";
import { slugify } from "@sudonick/common";
import { Socials } from "../../types";

export const getUser = async (notion: Client, pageId: string): Promise<User | null> => {
    try {
        const posts = await notion.blocks.children.list({
            block_id: pageId,
            page_size: 100,
        });

        const blocks: Block[] = [];

        posts.results.forEach((post: any) => {
            if (post[post.type].title) {
                const meta = {
                    title: post[post.type].title,
                    slug: slugify(post[post.type].title),
                    last_edited: post.last_edited_time,
                    id: post.id,
                };
                blocks.push(meta);
            }
        });

        const user = blocks;
        const [meString, about, resume, socialsString] = user?.map((u, i) => i < 4 && u.title) as string[];

        const [name, work, img] = meString.split(";;");

        const socials = {} as Socials;
        const sl = socialsString.split(";;");
        for (let i = 0; i < sl.length - 2; i += 3) {
            socials[sl[i + 0] as keyof Socials] = {
                username: sl[i + 1],
                url: sl[i + 2],
            }
        }
        return {
            name, 
            work,
            img,
            about,
            resume,
            socials
        };


    } catch (err) {
        console.log(err);
        return null;
    }
}
