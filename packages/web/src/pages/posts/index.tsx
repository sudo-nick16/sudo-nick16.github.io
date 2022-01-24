import type { NextPage } from "next";
import { request, gql } from "graphql-request";
import { Block } from "@sudonick/server/src/graphqlTypes";
import Head from "next/head";
import { useRouter } from "next/router";
import { apiUrl } from "../../constants";
import Post from "../../components/Main/Post";

type PostsProps = {
  posts: Block[];
};

const Posts: NextPage<PostsProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 text-white w-full mt-6`}>
        {posts.reverse().map((post) => {
          return (
            <Post post={post} />
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
  const data = await request(apiUrl, query);
  // console.log(data);

  return {
    props: {
      posts: data.posts || [],
    },
    revalidate: 10,
  };
};

export default Posts;
