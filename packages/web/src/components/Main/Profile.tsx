import type { NextPage } from "next";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";

type ProfileProps = {
  me: {
    alias: string;
    name: string;
    work: string;
    github: string;
    linkedin: string;
    twitter: string;
    instagram: string;
  };
  className?: string;
};

const Profile: NextPage<ProfileProps> = ({ me, className }) => {
  return (
    <div className={`flex mt-14 justify-center ${className}`}>
      <img
        src="sudonick.jpg"
        className={`h-44 w-44 object-cover rounded-full shadow-[0px_0px_10px_0px_#1d1d1d] z-10 animate-pfp`}
        alt=""
      />
      <div
        className={`flex flex-col align-center justify-center ml-12 animate-profileText`}
      >
        <h1
          className={`font-bold text-white text-[1.97rem] leading-normal -mt-2 tracking-wide font-round`}
        >
          {me.name}
        </h1>
        <h2
          className={`font-semibold text-[#E2E2E2] text-[calc(1rem)] leading-normal tracking-wide`}
        >
          {me.work}
        </h2>
        <div className={`flex items-center mt-3`}>
          {me.github && (
            <AiFillGithub
              className={`text-2xl text-white rounded-full mr-1 cursor-pointer`}
              onClick={() => window.open(me.github, "_blank")}
            />
          )}
          {me.linkedin && (
            <ImLinkedin
              className={`text-3xl text-white rounded-full p-1 mx-1 cursor-pointer`}
              onClick={() => window.open(me.linkedin, "_blank")}
            />
          )}
          {me.twitter && (
            <AiFillTwitterCircle
              className={`text-2xl text-white rounded-full mx-1 cursor-pointer`}
              onClick={() => window.open(me.twitter, "_blank")}
            />
          )}
          {me.instagram && (
            <AiFillInstagram
              className={`text-2xl text-white rounded-full mx-1 cursor-pointer`}
              onClick={() => window.open(me.instagram, "_blank")}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
