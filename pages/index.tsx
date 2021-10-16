import NavComponent from '@components/Nav/NavComponent';
import { Backdrop, Button, ImageWrapper, IntroSection, Main } from '@styled/HomePage.styled';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as React from 'react';

export default function HomePage() {
  const router = useRouter();
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
        <h2 style={{ color: '#bbc0db' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cum temporibus debitis blanditiis, alias dicta
          voluptatum inventore doloribus sit distinctio sunt quibusdam ipsum obcaecati voluptates consequatur quos,
          consectetur tenetur accusamus.
        </h2>

        <a href="https://github.com/chimson/reddit-timer-app" target="_blank" rel="noreferrer">
          <Button type="button">Github</Button>
        </a>
        <Button type="button" onClick={() => router.push('/search')}>
          r/javascript
        </Button>

        <ImageWrapper>
          <Image src="/assets/images/robot.png" layout="fill" objectFit="cover" />
        </ImageWrapper>
      </IntroSection>
      <div id="about" style={{ height: '900px' }}>
        about section
      </div>
      <div id="how-it-works">how it works section</div>
    </Main>
  );
}
