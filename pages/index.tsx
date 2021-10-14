import NavComponent from '@components/Nav/NavComponent';
import { Main } from '@styled/HomePage.styled';
import Head from 'next/head';
import * as React from 'react';

export default function Home() {
  return (
    <Main>
      <Head>
        <title>Find the best time to post</title>
        <meta name="description" content="Find the best time to post your reddit posts!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavComponent />
      <div id="about" style={{ height: '900px' }}>
        about section
      </div>
      <div id="how-it-works">how it works section</div>
    </Main>
  );
}
