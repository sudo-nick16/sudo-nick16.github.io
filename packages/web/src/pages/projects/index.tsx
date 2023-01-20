import request, { gql } from "graphql-request";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { API_URL } from "../../constants";
import { Block } from "../../graphql/graphqlTypes";

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
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8 text-white mt-8`}>
        {projects?.map((project) => {
          const { title, description, img } = project;
          return (
            <div
              key={project.id}
              className={`flex flex-col cursor-pointer w-4/6 sm:w-56 items-center mx-auto rounded-lg p-4 shadow-[#101010] shadow-lg tn hover:scale-[1.05]`}
              onClick={() => router.push(`/projects/${project.slug}`)}
            >
              <img
                src={img}
                alt={title}
                className={`rounded-lg w-24 h-24 p-1 hover:scale-105 transition-all duration-200 object-cover`}
              />
              <h1
                className={`font-semibold sn font-round text-base mt-2 leading-5 transition-all duration-200`}
              >
                {title}
              </h1>
              <h2
                className={`font-regular sn text-[0.94rem] mt-1 text-center leading-6`}
              >
                {description}
              </h2>
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
      projects {
        id
        description
        img
        title
        slug
      }
    }
  `;
  const data = await request(API_URL, query);
  // console.log(data);

  return {
    props: {
      projects: data.projects || [],
    },
    revalidate: 10,
  };
};

export default ProjectPage;
