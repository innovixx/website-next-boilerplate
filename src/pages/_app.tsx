import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { globalStyles } from '../styles';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <div>
      <Head>
        <title>Website Next Boilerplate</title>
        <meta
          name="description"
          content="Built and maintained by the Innovixx team."
        />
        <link
          rel="icon"
          href="/favicon.svg"
        />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
      <footer />
    </div>
  );
}

export default MyApp;
