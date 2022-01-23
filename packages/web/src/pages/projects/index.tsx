import { Block } from "@sudonick/server/src/graphqlTypes";
import { slugify } from "@sudonick/server/src/utils/slugify";
import request, { gql } from "graphql-request";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

type ProjectPageProps = {
  projects: Block[];
};

const ProjectPage: NextPage<ProjectPageProps> = ({ projects }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>

      <div
        className={`flex flex-col w-full justify-center items-center mt-8 list-disc list-outside text-white`}
      >
        <div className={`grid grid-cols-3 gap-4`}>
          {projects.map((project, index) => {
            return (
              <div
                key={project.id}
                className={`flex flex-col w-40 items-center`}
              >
                <img
                  onClick={() => router.push(`/projects/${project.slug}`)}
                  src={`/projects/${slugify(project.title)}.png`}
                  alt={project.title}
                  className={`rounded-2xl w-36 h-36 p-2`}
                />
                <h1
                  onClick={() => router.push(`/projects/${project.slug}`)}
                  className={`font-semi-bold text-lg cursor-pointer mt-2`}
                >
                  {project.title}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const query = gql`
    {
      projects {
        id
        title
        slug
      }
    }
  `;
  const data = await request("http://localhost:4000/graphql", query);
  console.log(data);

  return {
    props: {
      projects: data.projects,
    },
    revalidate: 10,
  };
};

export default ProjectPage;
