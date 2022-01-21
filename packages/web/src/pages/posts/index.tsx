import type { NextPage } from "next";
import { request, gql } from "graphql-request";
import { Block } from "@sudonick/server/src/graphqlTypes";
import Head from "next/head";
import { useRouter } from 'next/router';

type PostsProps = {
  posts: Block[];
};

const Posts: NextPage<PostsProps> = ({ posts }) => {
  const router = useRouter();
  return (
    <>
      <Head><title>Posts</title></Head>
      <ul className={`flex flex-col w-full justify-center items-center mt-8 list-disc list-outside text-white`}>
        {posts.map((post, index) => {
          return (
            <li
              key={index}
              className={`list-item text-white w-[69%] my-2 px-4`}
            >
              <h1
              onClick={() => router.push(`/posts/${post.slug}`)}
                className={`font-light w-fit font-poppin text-sm cursor-pointer transition-all duration-200 underline hover:decoration-transparent underline-offset-2`}
              >
                {post.title}
              </h1>
              {/* <span className={`text-xs mt-2 opacity-60 ml-auto`}>
                {getDate(post.last_edited)}
              </span> */}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export const getStaticProps = async () => {
  const query = gql`
    {
      posts {
        id
        title
        slug
        last_edited
      }
    }
  `;
  const data = await request("http://localhost:4000/graphql", query);
  console.log(data);

  return {
    props: {
      posts: data.posts,
    },
    revalidate: 10,
  };
};

export default Posts;
