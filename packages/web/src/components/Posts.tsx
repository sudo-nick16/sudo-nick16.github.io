import { Block } from "@sudonick/server/src/graphqlTypes";
import type { NextPage } from "next";
import { useRouter } from "next/router";

type PostsProps = {
  posts: Block[];
};

const Posts: NextPage<PostsProps> = ({ posts }) => {
  const router = useRouter();
  return (
    <div
      className={`flex flex-col text-white mt-12 w-[70%] mx-auto`}
    >
      <h1 className={`font-bold text-xl mb-6 text-center`}>Posts</h1>
      {posts.map((post, index) => {
          if(index < 3){
              return (
                <ul key={post.id} className={`w-full my-2 list-disc list-outside`}>
                  <li className={`list-item`}>
                    <h1
                      className={`cursor-pointer w-fit hover:text-pink-0`}
                      onClick={() => router.push(`/posts/${post.slug}`)}
                    >
                      {post.title}
                    </h1>
                  </li>
                </ul>
              );
          }else{
                return null;
          }
      })}
    </div>
  );
};

export default Posts;
