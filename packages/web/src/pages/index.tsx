import { Block } from "@sudonick/server/src/graphqlTypes";
import request, { gql } from "graphql-request";
import type { NextPage } from "next";
import Head from "next/head";
import Button from "../components/Ui/SocialButton";
import Posts from "../components/Main/Posts";
import Profile from "../components/Main/Profile";
import Projects from "../components/Main/Projects";
import { me } from "../me";

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
      <Profile me={me.profile} className={`mt-10`} />
      <div className={`bg-[#313134] rounded-lg py-2 mt-16`}>
        {/* <h2 className={`text-white text-center text-[1.3rem] font-semibold mb-4`}>
          Hello !!
        </h2> */}
        <p
          className={`text-white text-center w-5/6 mx-auto text-[calc(0.97rem)] leading-[calc(1.8rem)] tracking-wide`}
        >
          {me.about}
        </p>
      </div>

      <Projects projects={projects} />

      <Posts posts={posts} />

      <div id="contact" className={`flex flex-col items-center mt-16 mb-14`}>
        <h2 className={`text-white font-bold text-xl`}>
          Have an opportunity for me?
        </h2>
        <br />
        <h2 className={`text-white font-bold text-xl leading-[0rem]`}>OR</h2>
        <br />
        <h3 className={`text-white font-semibold text-xl`}>
          Wanna collaborate on a project with me?
        </h3>
        <Button
          className={`mt-8`}
          text="dm me on linkedin"
          variant="#0077B5"
          onClick={() => window.open("https://linkedin.com/in/sudo-nick")}
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
  const data = await request("http://localhost:4000/graphql", query);

  return {
    props: {
      posts: data.posts,
      projects: data.projects,
    },
    revalidate: 10,
  };
};

export default Home;
