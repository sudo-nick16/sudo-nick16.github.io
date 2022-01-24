import request, { gql } from "graphql-request";
import type { NextPage } from "next";
import Block from "../../components/Notion/Block";
import { getDate } from "../../utils/getDate";
import { PageResponse } from '@sudonick/server/src/graphqlTypes';
import Head from "next/head";
import { apiUrl } from "../../constants";
import { titleParser } from '@sudonick/common';

const Post: NextPage<PageResponse> = ({ blocks, title, published }) => {
  return (
    <>
    <Head><title>{title}</title></Head>
    <div className={`flex flex-col mt-6 mb-12 w-full mx-auto`}>
      <h1 className={`font-bold text-3xl text-white`}>{title}</h1>
      <p className={`text-xs text-[#bbb] mt-2 ml-1`}>- {getDate(published)}</p>
      <div className={`mt-4 mb-2`}>
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
  const data = await request(apiUrl, query, {
    slug: context.params.slug,
  });

  console.log(JSON.stringify(data, null, 1), context.params.slug);

  return {
    props: {
      blocks: data.post?.blocks || [],
      title: titleParser(data.post?.title).title || "",
      published: data.post?.published || "",
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

  const data = await request(apiUrl, query);
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
