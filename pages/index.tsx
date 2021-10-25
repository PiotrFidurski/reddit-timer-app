import NavComponent from '@components/Header/NavComponent';
import {
  AboutWrapper,
  Button,
  ButtonsWrapper,
  Footer,
  HowItWorksWrapper,
  ImageWrapper,
  IntroSection,
  Main,
} from '@styled/HomePage.styled';
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
      </Head>
      {/* <Backdrop /> */}
      <NavComponent />
      <ImageWrapper>
        <Image src="/assets/images/monitor-illustration.png" layout="intrinsic" width="550" height="400" />
      </ImageWrapper>
      <IntroSection>
        <h2>Find out when its the best time to post something on reddit!</h2>
        <ButtonsWrapper>
          <a href="https://github.com/chimson/reddit-timer-app" target="_blank" rel="noreferrer">
            <Button type="button">Github</Button>
          </a>
          <Button type="button" onClick={() => router.push('/search')}>
            r/javascript
          </Button>
        </ButtonsWrapper>
      </IntroSection>
      <AboutWrapper>
        <h2 id="about">About</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sint delectus dolor nesciunt, inventore
          voluptas ea eveniet est praesentium obcaecati laudantium ad quos sequi odio officiis minima, sapiente in
          modi.`
        </p>
      </AboutWrapper>
      <HowItWorksWrapper>
        <h2 id="how-it-works">How it works</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sint delectus dolor nesciunt, inventore
          voluptas ea eveniet est praesentium obcaecati laudantium ad quos sequi odio officiis minima, sapiente in
          modi.`
        </p>
      </HowItWorksWrapper>

      <Footer>
        <a href="https://github.com/chimson/reddit-timer-app" target="_blank" rel="noreferrer">
          Github
        </a>
        <Image width="40" height="40" src="/assets/images/reddit.png" layout="fixed" quality={100} alt="logo" />
        <p>Copyright 2021, Piotr Fidurski</p>
      </Footer>
    </Main>
  );
}
