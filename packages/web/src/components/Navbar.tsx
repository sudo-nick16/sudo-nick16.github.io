import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiNewspaperFill } from "react-icons/ri";

type NavbarProps = {
  // activeItem: string,
  // setActiveItem: React.Dispatch<React.SetStateAction<string>>
};

const Navbar: NextPage<NavbarProps> = ({}) => {
  const [activeItem, setActiveItem] = useState("");
  const router = useRouter();
  useEffect(() => {
    setActiveItem(router.pathname);
  }, [router.pathname]);

  return (
    <div
      className={`w-full text-pink-50 h-14 py-8 sticky top-0 z-20 filter backdrop-blur-xl`}
    >
      <div
        className={`flex justify-between items-center w-full h-full max-w-[768px] mx-auto`}
      >
        <h1
          className={`text-white ml-2 font-bold text-xl w-fit font-round cursor-pointer pink-line ${
            activeItem === "/" && "after:w-[105%]"
          }`}
          onClick={() => router.push("/")}
        >
          sudonick
        </h1>
        <div
        // className={`absolute left-1/2 -translate-x-1/2 h-full flex items-center`}
        >
          {/* <Link href="/">
          <a className={`nav-item ${activeItem === "/" && "after:w-[105%]"}`}>
            Home
          </a>
        </Link> */}
          <Link href="/projects">
            <a
              className={`nav-item ${
                activeItem === "/projects" && "after:w-[105%]"
              }`}
            >
              Works
            </a>
          </Link>
          <Link href="/posts">
            <a
              className={`nav-item ${
                activeItem === "/posts" && "after:w-[105%]"
              }`}
            >
              Posts
            </a>
          </Link>
          <Link href="/#contact">
            <a
              className={`nav-item ${
                activeItem === "/#contact" && "after:w-[105%]"
              }`}
            >
              Contact
            </a>
          </Link>
        </div>
        <a
          href="sudonick_resume.pdf"
          download="sudonick_resume.pdf"
          className={`w-min mr-2 relative after-glow`}
        >
          <abbr title="Download Resume 📃">
            <RiNewspaperFill
              className={`w-7 h-7 cursor-pointer text-[#faeedf]`}
            />
          </abbr>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
