import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Block } from "../../graphql/graphqlTypes";

type PostProps = {
  post: Block;
  className?: string;
};

const Post: NextPage<PostProps> = ({ post, className }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/posts/${post.slug}`)}
      key={post.id}
      className={`flex ${
        post.img ? "flex-col" : "items-center"
      } cursor-pointer hover:scale-[1.02] shadow-black shadow-lg tn mx-auto rounded-lg my-2 w-[55%] sm:max-w-4/6 sm:w-52 ${className}`}
    >
      {post.img ? (
        <img
          src={post.img}
          alt={post.title}
          className={`rounded-t-lg w-full h-32 object-cover`}
        />
      ) : null}
      <h1
        className={`font-light w-full font-poppin text-sm cursor-pointer tn my-3 sm:my-auto sm:py-3 text-center px-2 sm:px-2 truncate-2`}
      >
        {post.title}
      </h1>
    </div>
  );
};

export default Post;
