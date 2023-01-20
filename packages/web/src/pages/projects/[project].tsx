import type { NextPage } from "next";
import Head from "next/head";
import { PageResponse } from "@sudonick/server/src/graphqlTypes";
import Block from "../../components/Notion/Block";
import queryGraphql from "../../graphql/queryGraphql";

const Project: NextPage<PageResponse> = ({ blocks, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className={`flex flex-col mt-4 mb-12 px-4 w-full mx-auto`}>
                <h1 className={`font-bold text-3xl text-white text-center`}>{title}</h1>
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
    const query = `
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

    const data = await queryGraphql(query, {
        project: context.params.project,
    });

    return {
        props: {
            blocks: data.project?.blocks || [],
            title: data.project?.title || "",
        },
        revalidate: 10,
    };
};

export const getStaticPaths = async () => {
    const query = `
    {
      projects {
        slug
      }
    }
  `;
    const data = await queryGraphql(query);

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
