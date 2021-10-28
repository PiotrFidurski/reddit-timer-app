import Footer from '@components/Footer/Footer';
import NavComponent from '@components/Header/NavComponent';
import {
  A,
  AboutArticle,
  AboutIllustrationWrapper,
  AboutSection,
  Button,
  ButtonsWrapper,
  FilledVariantButton,
  HowItWorksArticle,
  HowItWorksIllustrationWrapper,
  HowItWorksSection,
  ImageWrapper,
  IntroSection,
  Main,
  Paragraph,
} from '@styled/HomePage.styled';
import { Hr } from '@styled/SearchPage.styled';
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
        <h1>Find out when it&apos;s the best time to post something on reddit!</h1>
        <ButtonsWrapper>
          <a
            href="https://github.com/chimson/reddit-timer-app"
            aria-label="button-link"
            target="_blank"
            rel="noreferrer"
          >
            <Button type="button">Github</Button>
          </a>
          <FilledVariantButton type="button" onClick={() => router.push('/search')}>
            r/javascript
          </FilledVariantButton>
        </ButtonsWrapper>
      </IntroSection>
      <AboutSection aria-label="about-section" id="about">
        <AboutArticle>
          <h2>About</h2>
          <Paragraph>
            This app was created for learning purposes, it was inspired by{' '}
            <A aria-label="article-link" href="https://profy.dev/project/reddit-timer" target="_blank" rel="noreferrer">
              profy.dev
            </A>
          </Paragraph>
        </AboutArticle>
        <AboutIllustrationWrapper>
          <Image
            src="/assets/images/test_tubes.png"
            alt="tubes_illustration"
            layout="responsive"
            width="746"
            height="495"
            quality={100}
          />
        </AboutIllustrationWrapper>
      </AboutSection>
      <HowItWorksSection aria-label="how-it-works-section" id="how-it-works">
        <HowItWorksArticle>
          <h2>How it works</h2>
          <Paragraph>We get 300 most upvoted reddit posts from last year.</Paragraph>
          <Hr />
          <Paragraph>We transform the data into a heatmap that has days and hours.</Paragraph>
          <Hr />
          <Paragraph>Each square represents the amount of posts posted for that day and hour.</Paragraph>
        </HowItWorksArticle>
        <HowItWorksIllustrationWrapper>
          <Image
            src="/assets/images/tools_illustration.png"
            alt="wrench_tool"
            layout="responsive"
            width="662"
            height="387"
            quality={100}
          />
        </HowItWorksIllustrationWrapper>
      </HowItWorksSection>
      <Footer />
    </Main>
  );
}
