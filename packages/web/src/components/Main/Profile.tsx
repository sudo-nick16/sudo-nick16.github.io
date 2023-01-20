import type { NextPage } from "next";
import {
    AiFillTwitterCircle,
    AiFillGithub,
} from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { Socials } from "../../types";

type ProfileProps = {
    name: string;
    work: string;
    img: string
    socials: Socials
    className?: string;
};

const Profile: NextPage<ProfileProps> = ({ name, work, img, className, socials}) => {
    const {github, linkedin, twitter} = socials;
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
                    {name}
                </h1>
                <h2
                    className={`font-semibold text-[#E2E2E2] text-[calc(1rem)] leading-normal tracking-wide`}
                >
                    {work}
                </h2>
                <div className={`flex items-center mt-3`}>
                    {github.username && (
                        <AiFillGithub
                            className={`text-2xl text-white rounded-full mr-1 cursor-pointer`}
                            onClick={() => window.open(github.url, "_blank")}
                        />
                    )}
                    {linkedin.username && (
                        <ImLinkedin
                            className={`text-3xl text-white rounded-full p-1 mx-1 cursor-pointer`}
                            onClick={() => window.open(linkedin.url, "_blank")}
                        />
                    )}
                    {twitter.username && (
                        <AiFillTwitterCircle
                            className={`text-2xl text-white rounded-full mx-1 cursor-pointer`}
                            onClick={() => window.open(twitter.url, "_blank")}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
