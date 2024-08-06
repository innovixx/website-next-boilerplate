import React from 'react';
import type { NextPage } from 'next';
import { usePagesQuery } from '../graphql/generated/schema';
import { RenderBlocks } from '../components';

const Home: NextPage = () => {
  const { data, loading } = usePagesQuery({
    variables: {
      limit: 1,
      page: 1,
      where: {
        slug: {
          equals: 'home',
        },
      },
    },
  });

  if (loading) {
    return null;
  }

  return (
    <div>
      <h1>Website Next Boilerplate</h1>
      <RenderBlocks
        layout={data?.Pages?.docs?.[0]?.layout || []}
      />
    </div>
  );
};

export default Home;
