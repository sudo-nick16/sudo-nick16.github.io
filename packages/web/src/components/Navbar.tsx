import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiNewspaperFill } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";

export type NavbarProps = {
    github: string;
    resume: string;
};

const Navbar: NextPage<NavbarProps> = ({ github, resume }) => {
    const mds = useMediaQuery({
        query: "(max-width: 768px)",
    });
    const [activeItem, setActiveItem] = useState("");
    const [nav, setNav] = useState(false);
    const router = useRouter();

    const closeNav = () => {
        setTimeout(() => {
            setNav(false);
        }, 600);
    };

    useEffect(() => {
        setActiveItem(router.pathname);
    }, [router.pathname]);

    useEffect(() => {
        if (!mds) {
            setNav(false);
        }
    }, [mds]);

    return (
        <div
            className={`w-full fixed ${nav ? "h-screen" : "h-16"
                } tn-5  top-0 z-20 filter backdrop-blur-xl`}
        >
            <div
                className={`flex flex-col h-full md:flex md:flex-row md:justify-between items-center w-full md:h-full max-w-[768px] mx-auto`}
            >
                <h1
                    className={`text-white flex items-center ml-2 font-bold text-xl w-fit font-round cursor-pointer fixed top-8 -translate-y-1/2 md:translate-y-0 left-4 md:static ${activeItem === "/" && "glow"
                        }`}
                    onClick={() => {
                        router.push("/");
                        closeNav();
                    }}
                >
                    <img
                        src="/sudonick.svg"
                        alt="sudonick"
                        className={`w-8 h-8 mx-2 -mb-1 animate-bounce hover:animate-none`}
                    />
                    sudonick
                </h1>
                <div
                    className={`flex-col justify-center h-full ${nav ? "flex" : "h-0 opacity-0"
                        } md:h-full md:flex-row md:opacity-100 overflow-hidden tn md:flex absolute md:left-1/2 md:-translate-x-1/2 h-full flex items-center`}
                >
                    <Link href="/projects">
                        <a
                            onClick={closeNav}
                            className={`nav-box p-2 tn ${activeItem === "/projects" && "after:w-full bg-pink-1"
                                }`}
                        >
                            Works
                            {mds && "\u00a0👨‍💻"}
                        </a>
                    </Link>
                    <Link href="/posts">
                        <a
                            onClick={closeNav}
                            className={`nav-box p-2 tn ${activeItem === "/posts" && "after:w-full bg-pink-1"
                                }`}
                        >
                            Posts
                            {mds && "\u00a0✍️"}
                        </a>
                    </Link>
                    <a
                        onClick={closeNav}
                        className={`nav-box p-2 `}
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github
                    </a>
                    {nav && (
                        <a
                            onClick={closeNav}
                            className={`nav-box p-2 `}
                            href={resume}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Resume 📃
                        </a>
                    )}
                </div>
                <a
                    href={resume}
                    download
                    className={`w-min mr-2 relative after-glow hidden md:block`}
                >
                    <abbr title="Resume 📃">
                        <RiNewspaperFill className={`w-7 h-7 cursor-pointer text-white`} />
                    </abbr>
                </a>
                <div
                    onClick={() => setNav(!nav)}
                    className={`block md:hidden fixed top-4 right-4 c-hamburger c-hamburger--collapse p-2 rounded-md ring-pink-1 ring-2 ${nav && "active"
                        }`}
                >
                    <div className="c-hamburger-inner">
                        <span className="c-hamburger-bar"></span>
                        <span className="c-hamburger-bar"></span>
                        <span className="c-hamburger-bar"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
