import NavComponent from '@components/Nav/NavComponent';
import { Backdrop, IntroSection, Main } from '@styled/HomePage.styled';
import Head from 'next/head';
import Image from 'next/image';
import * as React from 'react';

export default function HomePage() {
  return (
    <Main>
      <Head>
        <title>Find the best time to post</title>
        <meta name="description" content="Find the best time to post your reddit posts!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Backdrop />
      <NavComponent />
      <IntroSection>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '10px',
            maxWidth: '350px',
            width: '100%',
          }}
        >
          <h2 style={{ color: '#bbc0db' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cum temporibus debitis blanditiis, alias
            dicta voluptatum inventore doloribus sit distinctio sunt quibusdam ipsum obcaecati voluptates consequatur
            quos, consectetur tenetur accusamus.
          </h2>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button type="button">Hey</button>
            <button type="button">second</button>
          </div>
        </div>
        <Image src="/assets/images/robot.png" layout="fixed" width="103" height="170" />
      </IntroSection>
      <div id="about" style={{ height: '900px' }}>
        about section
      </div>
      <div id="how-it-works">how it works section</div>
    </Main>
  );
}
