import { titleParser } from "@sudonick/common";
import { Block } from "@sudonick/server/src/graphqlTypes";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import MoreInfoButton from "../Ui/MoreInfoButton";
import Post from "./Post";

type PostsProps = {
  posts: Block[];
  className?: string
};

const Posts: NextPage<PostsProps> = ({ posts, className }) => {
  const router = useRouter();
  if(posts.length === 0) {
    return <></>
  }
  return (
    <div className={`flex flex-col text-white mt-12 w-full px-2 mx-auto ${className}`}>
      <h1 className={`font-semibold w-fit text-[1.26rem] mx-auto sm:mx-0 font-round gray-line pink-static-line`}>
        Posts
      </h1>
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 text-white w-full mt-8`}>
        {posts.reverse().map((post, index) => {
          if( index < 2){
            return (
              <Post post={post} className={``} />
            );
          } else {
            return null
          }
        })}
      </div>
      {posts.length >= 3 ? (
        <MoreInfoButton
          onClick={() => router.push(`/posts`)}
          text="For more"
          className={`mt-8 mx-auto`}
        />
      ) : null}
    </div>
  );
};

export default Posts;
