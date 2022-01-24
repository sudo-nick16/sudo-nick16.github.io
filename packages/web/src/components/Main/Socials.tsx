import type { NextPage } from "next";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { me } from "../../me";

type SocialsProps = {
  className?: string;
};

const Socials: NextPage<SocialsProps> = ({ className }) => {
  return (
    <div
      className={`text-white flex flex-col items-center sm:items-start mt-10 ${className}`}
    >
      <h2
        className={`font-semibold text-[1.26rem] text-lg gray-line pink-static-line w-fit mb-6 font-round`}
      >
        On the web
      </h2>
      {me.profile.github.username && (
        <div
          className={`social-text`}
          onClick={() => window.open(me.profile.github.url, "_blank")}
        >
          <AiFillGithub
            className={`text-2xl text-white rounded-full mr-2 cursor-pointer`}
          />
          {me.profile.github.username}
        </div>
      )}
      {me.profile.linkedin.username && (
        <div
          className={`ml-[0.15rem] social-text`}
          onClick={() => window.open(me.profile.linkedin.url, "_blank")}
        >
          <ImLinkedin className={`text-xl text-white mr-2 cursor-pointer`} />
          {me.profile.linkedin.username}
        </div>
      )}
      {me.profile.twitter.username && (
        <div
          className={`social-text`}
          onClick={() => window.open(me.profile.twitter.url, "_blank")}
        >
          <AiFillTwitterCircle
            className={`text-2xl text-white mr-2 cursor-pointer`}
          />
          {me.profile.twitter.username}
        </div>
      )}
      {me.profile.instagram.username && (
        <div
          className={`social-text`}
          onClick={() => window.open(me.profile.instagram.url, "_blank")}
        >
          <AiFillInstagram
            className={`text-2xl text-white rounded-full mx-1 cursor-pointer`}
          />
          {me.profile.instagram.username}
        </div>
      )}
    </div>
  );
};

export default Socials;
