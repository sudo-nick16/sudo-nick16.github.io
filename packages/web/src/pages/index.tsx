import { Block } from "@sudonick/server/src/graphqlTypes";
import request, { gql } from "graphql-request";
import type { NextPage } from "next";
import Head from "next/head";
import Button from "../components/Ui/SocialButton";
import Posts from "../components/Main/Posts";
import Profile from "../components/Main/Profile";
import Projects from "../components/Main/Projects";
import { me } from "../me";
import { apiUrl } from "../constants";
import Socials from "../components/Main/Socials";

type HomeProps = {
  posts: Block[];
  projects: Block[];
};

const Home: NextPage<HomeProps> = ({ posts, projects }) => {
  return (
    <>
      <Head>
        <title>sudonick</title>
      </Head>
      <Profile me={me.profile} className={`mt-8`} />

      <div className={`bg-[#1e1e20] w-full mx-auto sm:w-full shadow-inner shadow-[#202023] rounded-lg py-2 mt-12`}>
        <p
          className={`text-white text-center w-5/6 mx-auto text-[calc(0.97rem)] leading-[calc(1.8rem)] tracking-wide`}
        >
          {me.about}
        </p>
      </div>

      <Projects className={`mt-12`} projects={projects} />

      <Posts posts={posts} />

      <Socials className={`mt-8`} />

      <div id="contact" className={`flex flex-col items-center mt-16 mb-14`}>
        <h2 className={`text-white font-semibold sm:font-bold text-lg sm:text-xl text-center`}>
          Have an opportunity for me?
        </h2>
        <h2 className={`text-white font-normal sm:font-semibold text-lg sm:text-xl leading-[2.5rem] text-center`}>
          OR
        </h2>
        <h3 className={`text-white font-semibold sm:font-bold text-lg sm:text-xl text-center`}>
          Wanna collaborate on a project with me?
        </h3>
        <Button
          className={`mt-8`}
          text="dm me on linkedin"
          variant="#0077B5"
          onClick={() => window.open(me.profile.linkedin.url)}
        />
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const query = gql`
    {
      posts {
        id
        title
        slug
        last_edited
      }
      projects {
        id
        last_edited
        slug
        title
      }
    }
  `;

  const data = await request(apiUrl, query);

  return {
    props: {
      posts: data.posts || [],
      projects: data.projects || [],
    },
    revalidate: 10,
  };
};

export default Home;
