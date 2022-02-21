import Head from "next/head";

import Header from "../components/header";
import Footer from "../components/footer";

import "../styles/global.scss";

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Booking System</title>
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
