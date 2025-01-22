import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Seja Impulse</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          viewport-fit="cover"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
