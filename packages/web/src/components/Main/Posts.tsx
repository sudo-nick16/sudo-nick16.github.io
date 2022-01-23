import { Block } from "@sudonick/server/src/graphqlTypes";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import MoreInfoButton from "../Ui/MoreInfoButton";

type PostsProps = {
  posts: Block[];
};

const Posts: NextPage<PostsProps> = ({ posts }) => {
  const router = useRouter();
  return (
    <div className={`flex flex-col text-white mt-12 w-full px-2 mx-auto`}>
      <h1 className={`font-semibold w-fit text-[1.26rem] font-round gray-line`}>
        Posts
      </h1>
      <div className={`w-full mt-4`}>
        {posts.reverse().map((post, index) => {
          if (index < 3) {
            return (
              <div className={`flex items-center`}>
                &#8226;&nbsp;&nbsp;
                <h1
                  className={`my-2 cursor-pointer w-fit hover:text-pink-0 transition-all duration-200 underline decoration-transparent hover:decoration-white underline-offset-2`}
                  onClick={() => router.push(`/posts/${post.slug}`)}
                >
                  {post.title}
                </h1>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      {posts.length >= 3 ? (
        // <h4
        //   onClick={() => router.push(`/projects`)}
        //   className={`w-fit mt-8 text-sm underline underline-offset-4 hover:decoration-transparent transition-all duration-300 hover:text-pink-0 cursor-pointer`}
        // >
        //   For more..
        // </h4>
        <MoreInfoButton
          onClick={() => router.push(`/projects`)}
          text="For more"
          className={`mt-6 mx-auto`}
        />
      ) : null}
    </div>
  );
};

export default Posts;
