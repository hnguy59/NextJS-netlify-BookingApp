import Head from "next/head";
import React from "react";
import { data } from "../data/data";
import { AuthUserProvider } from "../context/authUserContext";

import Header from "../components/header";

import "../styles/global.scss";

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{data.orgName}</title>
        <link rel="icon" href="../favicon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <main>
        {/* <AuthUserProvider> // TODO: add authentication */}
        <Component {...pageProps} />
        {/* </AuthUserProvider> */}
      </main>
    </>
  );
}

export default Application;
