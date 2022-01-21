import { Block } from "@sudonick/server/src/graphqlTypes";
import type { NextPage } from "next";
import { useRouter } from 'next/router';

type ProjectsProps = {
  projects: Block[];
};

const Projects: NextPage<ProjectsProps> = ({ projects }) => {
    const router = useRouter();
  return (
    <div className={`flex flex-col w-[70%] mx-auto text-white mt-12`}>
      <h1 className={`font-bold text-xl text-center`}>Projects</h1>
      {projects.map((project) => {
        return (
          <div key={project.id}>
            <h1
              onClick={() => router.push(`/projects/${project.slug}`)}
              className={`font-bold text-xl mb-6 cursor-pointer`}
            >
              {project.title}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
