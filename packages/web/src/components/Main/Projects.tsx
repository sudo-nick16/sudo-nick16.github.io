import type { NextPage } from "next";
import { useRouter } from "next/router";
import MoreInfoButton from "../Ui/MoreInfoButton";
import { useMediaQuery } from 'react-responsive';
import { Block } from "../../graphql/graphqlTypes";

type ProjectsProps = {
  projects: Block[];
  className?: string;
};

const Projects: NextPage<ProjectsProps> = ({ projects, className }) => {
  const router = useRouter();
  const sms = useMediaQuery({
    query: "(max-width: 576px)",
  });
  if (projects.length === 0) {
    return <></>;
  }
  return (
    <div
      className={`flex flex-col w-full mx-auto px-2 text-white ${className}`}
    >
      <h1 className={`font-semibold w-fit text-[1.26rem] font-round gray-line pink-static-line mx-auto sm:mx-0`}>
        Works
      </h1>
      <div className={`mt-8 grid grid-cols-2 sm:grid-cols-3 grid-flow-row gap-10 sm:gap-8 mx-auto sm:mx-0`}>
        {projects.map((project, index) => {
          if (index < (sms ? 2 : 3)) {
            return (
              <div
                key={project.id}
                onClick={() => router.push(`/projects/${project.slug}`)}
                className={`flex flex-col mx-auto sm:mx-0  max-w-[9rem] sm:w-36 items-center shadow-black shadow-md hover:shadow-inner tn hover:shadow-pink-1 hover:-translate-y-2 pb-2 py-3 rounded-xl cursor-pointer`}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className={`w-[80%] h-auto rounded-lg object-cover`}
                />
                <h1 className={`font-medium text-base cursor-pointer mt-2`}>
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
          className={`mt-10 mx-auto`}
        />
      ) : null}
    </div>
  );
};

export default Projects;
