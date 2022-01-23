import { Block } from "@sudonick/server/src/graphqlTypes";
import { slugify } from "@sudonick/server/src/utils/slugify";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import MoreInfoButton from "../Ui/MoreInfoButton";

type ProjectsProps = {
  projects: Block[];
};

const Projects: NextPage<ProjectsProps> = ({ projects }) => {
  const router = useRouter();
  return (
    <div className={`flex flex-col w-full mx-auto px-2 text-white mt-10`}>
      <h1 className={`font-semibold w-fit text-[1.26rem] font-round gray-line`}>
        Works
      </h1>
      <div className={`mt-10 grid grid-cols-3 grid-flow-row gap-6`}>
        {projects.map((project, index) => {
          if (index < 3) {
            return (
              <div
                key={project.id}
                className={`flex flex-col w-36 mx-2 items-center`}
              >
                <img
                  onClick={() => router.push(`/projects/${project.slug}`)}
                  src={`/projects/${slugify(project.title)}.png`}
                  alt={project.title}
                  className={`w-28 h-28 p-0`}
                />
                <h1
                  onClick={() => router.push(`/projects/${project.slug}`)}
                  className={`font-medium text-base cursor-pointer mt-2`}
                >
                  {project.title}
                </h1>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      {projects.length >= 3 ? (
        <MoreInfoButton
          text="For more"
          onClick={() => router.push(`/projects`)}
          className={`mt-8 mx-auto`}
        />
      ) : null}
    </div>
  );
};

export default Projects;
