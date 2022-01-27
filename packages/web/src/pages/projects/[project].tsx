import request, { gql } from "graphql-request";
import type { NextPage } from "next";
import Head from "next/head";
import { PageResponse } from "@sudonick/server/src/graphqlTypes";
import Block from "../../components/Notion/Block";
import { titleParser } from "@sudonick/common";
import { apiUrl } from "../../constants";

const Project: NextPage<PageResponse> = ({ blocks, title }) => {
  const projectTitle = titleParser(title).title;
  return (
    <>
      <Head>
        <title>{projectTitle}</title>
      </Head>
      <div className={`flex flex-col mt-4 mb-12 px-4 w-full mx-auto`}>
        <h1 className={`font-bold text-3xl text-white text-center`}>{projectTitle}</h1>
        <div className={`my-4`}>
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
  const data = await request(apiUrl, query, {
    project: context.params.project,
  });

  // console.log(JSON.stringify(data, null, 1), "hhhsadbsjdfgcensjugfderbfnds");
  

  return {
    props: {
      blocks: data.project?.blocks || [],
      title: data.project?.title || "",
    },
    revalidate: 10,
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
  const data = await request(apiUrl, query);

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
