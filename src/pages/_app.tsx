import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import '../styles/index.scss';
import '../styles/globals/globals.scss';
import '../styles/reset.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const apiUri = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/graphql`;

  const httpLink = createHttpLink({
    credentials: process.env.NODE_ENV === 'development' ? 'include' : 'same-origin',
    uri: `${apiUri}`,
  });

  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });

  return (
    <ApolloProvider client={apolloClient}>
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
    </ApolloProvider>
  );
}

export default MyApp;
