import NavComponent from '@components/Header/NavComponent';
import {
  AboutIllustrationWrapper,
  AboutSection,
  AboutWrapper,
  Button,
  ButtonsWrapper,
  FilledVariantButton,
  Footer,
  HowItWorksIllustrationWrapper,
  HowItWorksSection,
  HowItWorksWrapper,
  ImageWrapper,
  IntroSection,
  Main,
  Paragraph,
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
        <Image
          src="/assets/images/monitor-illustration.png"
          layout="intrinsic"
          alt="computer_notes"
          width="550"
          height="400"
          quality={100}
        />
      </ImageWrapper>
      <IntroSection>
        <h2>Find out when its the best time to post something on reddit!</h2>
        <ButtonsWrapper>
          <a href="https://github.com/chimson/reddit-timer-app" target="_blank" rel="noreferrer">
            <Button type="button">Github</Button>
          </a>
          <FilledVariantButton type="button" onClick={() => router.push('/search')}>
            r/javascript
          </FilledVariantButton>
        </ButtonsWrapper>
      </IntroSection>

      <AboutSection>
        <AboutWrapper>
          <h2 id="about">About</h2>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sint delectus dolor nesciunt, inventore
            voluptas ea eveniet est praesentium obcaecati laudantium ad quos sequi odio officiis minima, sapiente in
            modi.`
          </Paragraph>
        </AboutWrapper>
        <AboutIllustrationWrapper>
          <Image
            src="/assets/images/test_tubes.png"
            alt="tubes_illustration"
            layout="responsive"
            width="745"
            height="400"
            quality={100}
          />
        </AboutIllustrationWrapper>
      </AboutSection>

      <HowItWorksSection>
        <HowItWorksWrapper>
          <h2 id="how-it-works">How it works</h2>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sint delectus dolor nesciunt, inventore
            voluptas ea eveniet est praesentium obcaecati laudantium ad quos sequi odio officiis minima, sapiente in
            modi.`
          </Paragraph>
        </HowItWorksWrapper>
        <HowItWorksIllustrationWrapper>
          <Image
            src="/assets/images/tools_illustration.png"
            alt="wrench_tool"
            layout="responsive"
            width="660"
            height="400"
            quality={100}
          />
        </HowItWorksIllustrationWrapper>
      </HowItWorksSection>

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
