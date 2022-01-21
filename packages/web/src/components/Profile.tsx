import type { NextPage } from "next";
import { useEffect } from "react";
import { AiFillTwitterCircle, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { user } from "../Contants";

type ProfileProps = {
    alias: string;
    name: string;
    work: string;
    github: string;
    linkedin: string;
    twitter: string;
    instagram: string;
    about: string;
}

const Profile: NextPage<ProfileProps> = ({alias, name, work, github, linkedin, instagram, about, twitter}) => {
  useEffect(() => {}, []);
  return (
    <div className={`flex mt-14 justify-center`}>
      {/* <div className={`h-48 w-48 rounded-full overflow-hidden`}> */}
      <img
        src="sudonick.jpg"
        className={`h-44 w-44 rounded-full shadow-[0px_10px_60px_0px_#2b2b2b] z-10 animate-pfp`}
        alt=""
      />
      {/* </div> */}
      <div
        className={`flex flex-col align-center justify-center ml-12 animate-profileText`}
      >
        <h1
          className={`font-bold text-white text-3xl leading-relaxed -mt-2 tracking-wide font-round`}
        >
          {name}
        </h1>
        <h2
          className={`font-semibold text-[#E2E2E2] text-[calc(1rem)] leading-loose tracking-wide`}
        >
          {work}
        </h2>
        <div className={`flex items-center mt-2`}>
          {github && (
            <AiFillGithub
            className={`text-2xl text-white rounded-full mr-1 cursor-pointer`}
            onClick={() => window.open(github, "_blank")}
            />
          )}
          {linkedin && (
            <ImLinkedin
              className={`text-3xl text-white rounded-full p-1 mx-1 cursor-pointer`}
              onClick={() => window.open(linkedin, "_blank")}
              />
              )}
          {twitter && (
              <AiFillTwitterCircle
              className={`text-2xl text-white rounded-full mx-1 cursor-pointer`}
              onClick={() => window.open(twitter, "_blank")}
            />
          )}
          {instagram && (
              <AiFillInstagram
              className={`text-2xl text-white rounded-full mx-1 cursor-pointer`}
              onClick={() => window.open(instagram, "_blank")}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
