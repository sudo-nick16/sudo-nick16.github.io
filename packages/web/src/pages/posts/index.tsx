import type { NextPage } from "next";
import Head from "next/head";
import Post from "../../components/Main/Post";
import { Block } from "../../graphql/graphqlTypes";
import queryGraphql from "../../graphql/queryGraphql";

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
                {posts.map((post) => {
                    return (
                        <Post key={post.id} post={post} />
                    );
                })}
            </div>
        </>
    );
};

export const getStaticProps = async () => {
    const query = `
    {
      posts {
        id
        title
        img
        slug
        last_edited
      }
    }
  `;
    const data = await queryGraphql(query);

    return {
        props: {
            posts: data.posts?.reverse() || [],
        },
        revalidate: 10,
    };
};

export default Posts;
