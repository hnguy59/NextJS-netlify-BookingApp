import Head from "next/head";
import React from "react";
import { data } from "../data/data";

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
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default Application;
