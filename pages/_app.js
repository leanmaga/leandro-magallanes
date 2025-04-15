import Head from "next/head";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Leandro Magallanes</title>
      <meta
        name="description"
        content="Leandro Magallanes - Front-End Developer"
      />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://fonts.googleapis.com/css2?family=Aldrich&family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <link rel="preconnect" href="https://www.leandro-magallanes.vercel.app" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
