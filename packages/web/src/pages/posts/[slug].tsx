import request, { gql } from "graphql-request";
import type { NextPage } from "next";
import Block from "../../components/Notion/Block";
import { getDate } from "../../utils/getDate";
import { PageResponse } from '@sudonick/server/src/graphqlTypes';
import Head from "next/head";

const Post: NextPage<PageResponse> = ({ blocks, title, published }) => {
  return (
    <>
    <Head><title>{title}</title></Head>
    <div className={`flex flex-col mt-6 mb-12 px-4 w-full mx-auto`}>
      <h1 className={`font-extrabold text-3xl text-white`}>{title}</h1>
      <p className={`text-xs text-[#bbb] mt-2 ml-1`}>- {getDate(published)}</p>
      <div className={`my-4 ml-4`}>
        {blocks.map((block) => (
          <Block key={block.id} block={block} />
        ))}
      </div>
    </div>
    </>
  );
};

export const getStaticProps = async (context: any) => {
  console.log(context);
  const query = gql`
    query Post($slug: String!) {
      post(slug: $slug) {
        blocks {
          id
          checked
          element
          img {
            url
          }
          text {
            content
            annotations {
              bold
              color
              strikethrough
              underline
              italic
            }
            link
          }
        }
        title
        published
      }
    }
  `;
  const data = await request("http://localhost:4000/graphql", query, {
    slug: context.params.slug,
  });

  console.log(JSON.stringify(data, null, 1), "hhhsadbsjdfgcensjugfderbfnds");

  return {
    props: {
      blocks: data.post.blocks,
      title: data.post.title,
      published: data.post.published,
    },
  };
};

export const getStaticPaths = async () => {
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

  const paths = data.posts.map((post: any) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export default Post;
