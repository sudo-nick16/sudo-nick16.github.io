import request, { gql } from "graphql-request";
import type { NextPage } from "next";
import Head from "next/head";
import { PageResponse } from "@sudonick/server/src/graphqlTypes";
import Block from "../../components/Notion/Block";

const Project: NextPage<PageResponse> = ({ blocks, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={`flex flex-col mt-6 mb-12 px-4 w-full mx-auto`}>
        <h1 className={`font-extrabold text-3xl text-white text-center`}>{title}</h1>
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
//   console.log(context);
  const query = gql`
    query Project($project: String!) {
      project(slug: $project) {
        blocks {
          id
          element
          checked
          img {
            url
          }
          text {
            annotations {
              bold
              code
              color
              italic
              strikethrough
              underline
            }
            content
            link
          }
        }
        title
      }
    }
  `;
  const data = await request("http://localhost:4000/graphql", query, {
    project: context.params.project,
  });

    console.log(JSON.stringify(data.project, null, 1), "prooojjjjj");

  return {
    props: {
      blocks: data.project?.blocks,
      title: data.project?.title,
    },
  };
};

export const getStaticPaths = async () => {
  const query = gql`
    {
      projects {
        slug
      }
    }
  `;
  const data = await request("http://localhost:4000/graphql", query);
//   console.log(data);

  const paths = data.projects.map((project: any) => {
    return {
      params: {
        project: project.slug,
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export default Project;
