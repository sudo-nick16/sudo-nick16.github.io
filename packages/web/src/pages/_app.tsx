import "../styles/globals.css";
import type { AppProps } from "next/app";
import NextApp from "next/app";
import Layout from "../components/Layout";
import { gql, request } from "graphql-request";
import { API_URL } from "../constants";

interface WithNavProps extends AppProps {
    navbarProps: {
        resume: string;
        github: string;

    }
}

function MyApp({ Component, pageProps, navbarProps }: WithNavProps) {
    return (
        <Layout navbarProps={navbarProps}>
            <Component {...pageProps} />
        </Layout>
    );
}

MyApp.getInitialProps =  async (ctx: any) => {
    const appProps = await NextApp.getInitialProps(ctx)
    const query = gql`
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

    const data = await request(API_URL, query);
    console.log(data)
    return {
        ...appProps,
        navbarProps: {
            resume: data?.me?.resume || "",
            github: data?.me?.socials?.github?.url || "",
        }
    }
}

export default MyApp;
