import Head from "next/head";
import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

import "../styles/global.scss";
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "@fullcalendar/list/main.css";

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Booking System</title>
        <link rel="icon" href="../favicon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default Application;
