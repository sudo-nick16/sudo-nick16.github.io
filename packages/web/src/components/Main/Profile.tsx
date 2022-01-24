import type { NextPage } from "next";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";

type Social = {
  url: string
  username: string;
}

type ProfileProps = {
  img: string,
  me: {
    alias: string;
    name: string;
    work: string;
    github: Social;
    linkedin: Social;
    twitter: Social;
    instagram: Social;
  };
  className?: string;
};

const Profile: NextPage<ProfileProps> = ({ me, className, img }) => {
  return (
    <div className={`flex flex-col items-center sm:flex-row sm:justify-center ${className}`}>
      <img
        src={img || "sudonick.jpg"}
        className={`h-44 w-44 object-cover rounded-full shadow-[#161616] shadow-lg z-10 sm:animate-pfp`}
        alt=""
      />
      <div
        className={`flex flex-col items-center sm:items-start justify-center mt-8 sm:mt-0 sm:ml-12 animate-profileText`}
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
          {me.github.username && (
            <AiFillGithub
              className={`text-2xl text-white rounded-full mr-1 cursor-pointer`}
              onClick={() => window.open(me.github.url, "_blank")}
            />
          )}
          {me.linkedin.username && (
            <ImLinkedin
              className={`text-3xl text-white rounded-full p-1 mx-1 cursor-pointer`}
              onClick={() => window.open(me.linkedin.url, "_blank")}
            />
          )}
          {me.twitter.username && (
            <AiFillTwitterCircle
              className={`text-2xl text-white rounded-full mx-1 cursor-pointer`}
              onClick={() => window.open(me.twitter.url, "_blank")}
            />
          )}
          {me.instagram.username && (
            <AiFillInstagram
              className={`text-2xl text-white rounded-full mx-1 cursor-pointer`}
              onClick={() => window.open(me.instagram.url, "_blank")}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
