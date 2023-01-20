import type { NextPage } from "next";
import {
    AiFillGithub,
    AiFillTwitterCircle,
} from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { Socials } from "../../types";

type SocialsProps = {
    socials: Socials
    className?: string;
};

const Socials: NextPage<SocialsProps> = ({ className, socials }) => {
    const {github, twitter, linkedin } = socials;
    return (
        <div
            className={`text-white flex flex-col items-center sm:items-start mt-10 ${className}`}
        >
            <h2
                className={`font-semibold text-[1.26rem] text-lg gray-line pink-static-line w-fit mb-6 font-round`}
            >
                On the web
            </h2>
            {github.username && (
                <div
                    className={`social-text`}
                    onClick={() => window.open(github.url, "_blank")}
                >
                    <AiFillGithub
                        className={`text-2xl text-white rounded-full mr-2 cursor-pointer`}
                    />
                    {github.username}
                </div>
            )}
            {linkedin.username && (
                <div
                    className={`ml-[0.15rem] social-text`}
                    onClick={() => window.open(linkedin.url, "_blank")}
                >
                    <ImLinkedin className={`text-xl text-white mr-2 cursor-pointer`} />
                    {linkedin.username}
                </div>
            )}
            {twitter.username && (
                <div
                    className={`social-text`}
                    onClick={() => window.open(twitter.url, "_blank")}
                >
                    <AiFillTwitterCircle
                        className={`text-2xl text-white mr-2 cursor-pointer`}
                    />
                    {twitter.username}
                </div>
            )}
        </div>
    );
};

export default Socials;
