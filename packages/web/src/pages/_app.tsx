import "../styles/globals.css";
import type { AppProps } from "next/app";
import NextApp from "next/app";
import request from "graphql-request";
import Layout from "../components/Layout";
import { API_URL } from "../constants";

interface WithNavProps extends AppProps {
    navbarProps: {
        resume: string;
        github: string;

    }
}

function MyApp({ Component, pageProps, navbarProps }: WithNavProps) {
    console.log(navbarProps)
    return (
        <Layout {...{ navbarProps }}>
            <Component {...pageProps} />
        </Layout>
    );
}

MyApp.getInitialProps = async (ctx: any) => {
    const appProps = await NextApp.getInitialProps(ctx)
    const query = `
    {
        me {
            resume
            socials{
                github{
                    url
                } 
            }
        }
    }
    `;

    try {
        const data = await request(API_URL, query);
        console.log(data)
        if (!data) {
            throw new Error("failed gql req")
        }
        return {
            ...appProps,
            navbarProps: {
                resume: data?.me?.resume || "",
                github: data?.me?.socials?.github?.url || "",
            }
        }

    } catch (e: any) {
        return {
            ...appProps,
            navbarProps: {
                resume: "",
                github: "sudo-nick16",
            }
        }
    }

}

export default MyApp;
