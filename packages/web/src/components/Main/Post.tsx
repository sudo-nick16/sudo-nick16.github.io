import { titleParser } from "@sudonick/common";
import { Block } from "@sudonick/server/src/graphqlTypes";
import type { NextPage } from "next";
import { useRouter } from "next/router";

type PostProps = {
  post: Block;
  className?: string;
};

const Post: NextPage<PostProps> = ({ post, className }) => {
  const router = useRouter();
  const { title, description } = titleParser(post.title);
  return (
    <div
      onClick={() => router.push(`/posts/${post.slug}`)}
      key={post.id}
      className={`flex ${
        description ? "flex-col" : "flex items-center"
      } cursor-pointer hover:scale-[1.02] shadow-black shadow-lg tn mx-auto rounded-lg my-2 w-1/2 sm:max-w-4/6 sm:w-52 ${className}`}
    >
      {description ? (
        <img
          src={description}
          alt={title}
          className={`rounded-t-lg w-full h-28 object-cover`}
        />
      ) : null}
      <h1
        className={`font-light w-full font-poppin text-sm cursor-pointer tn my-4 sm:my-2 text-center px-2 sm:px-2 truncate-2`}
      >
        {title}
      </h1>
    </div>
  );
};

export default Post;
