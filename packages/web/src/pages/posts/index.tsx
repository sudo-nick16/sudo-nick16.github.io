import type { NextPage } from "next";
import { request, gql } from "graphql-request";
import { Block } from "@sudonick/server/src/graphqlTypes";
import Head from "next/head";
import { useRouter } from "next/router";

type PostsProps = {
  posts: Block[];
};

const Posts: NextPage<PostsProps> = ({ posts }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <div className={`flex flex-col text-white w-full mt-8`}>
        {posts.reverse().map((post, index) => {
          return (
            <div className={`flex items-center my-2`}>
              &#8226;&nbsp;&nbsp;
              <h1
                onClick={() => router.push(`/posts/${post.slug}`)}
                className={`font-light w-fit font-poppin text-sm cursor-pointer transition-all duration-200 underline hover:decoration-transparent underline-offset-2`}
              >
                {post.title}
              </h1>
            </div>
          );
        })}
      </div>
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
