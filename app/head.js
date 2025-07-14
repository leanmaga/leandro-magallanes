import Head from "next/head";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Leandro Magallanes</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        http-equiv="Permissions-Policy"
        content="ambient-light-sensor=(false)"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Aldrich&family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://leandro-magallanes.vercel.app/" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
