import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className={`max-w-[517px] pt-20 pb-12 mx-auto px-4 sm:px-0 overflow-auto`}>
        <Head>
          <meta name="description" content="Nikit - full stack developer" />
          <link rel="icon" href="/sudonick.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        {children}
      </div>
    </>
  );
}

export default Layout;
