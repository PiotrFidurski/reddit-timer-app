import Footer from '@components/Footer/Footer';
import NavComponent from '@components/Header/NavComponent';
import * as S from '@styled/HomePage.styled';
import { Hr } from '@styled/SearchPage.styled';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as React from 'react';

export default function HomePage() {
  const router = useRouter();

  return (
    <S.Main>
      <Head>
        <title>Find the best time to post</title>
        <meta name="description" content="Find the best time to post your reddit posts!" />
      </Head>
      <NavComponent />
      <S.ImageWrapper>
        <Image
          src="/assets/images/monitor-illustration.png"
          layout="intrinsic"
          alt="computer_notes"
          width="550"
          height="400"
          quality={100}
        />
      </S.ImageWrapper>
      <S.IntroSection>
        <h1>Find out when it&apos;s the best time to post something on reddit!</h1>
        <S.ButtonsWrapper>
          <a
            tabIndex={-1}
            href="https://github.com/chimson/reddit-timer-app"
            aria-label="button-link"
            target="_blank"
            rel="noreferrer"
          >
            <S.Button type="button">Github</S.Button>
          </a>
          <S.FilledVariantButton type="button" onClick={() => router.push('/search')}>
            r/javascript
          </S.FilledVariantButton>
        </S.ButtonsWrapper>
      </S.IntroSection>
      <S.AboutSection aria-label="about-section" id="about">
        <S.AboutArticle>
          <h2>About</h2>
          <S.Paragraph>
            This app was created for learning purposes, it was inspired by free plan of{' '}
            <S.A
              aria-label="article-link"
              href="https://profy.dev/project/reddit-timer"
              target="_blank"
              rel="noreferrer"
            >
              profy.dev
            </S.A>
          </S.Paragraph>
        </S.AboutArticle>
        <S.AboutIllustrationWrapper>
          <Image
            src="/assets/images/test_tubes.png"
            alt="tubes_illustration"
            layout="responsive"
            width="746"
            height="495"
            quality={100}
          />
        </S.AboutIllustrationWrapper>
      </S.AboutSection>
      <S.HowItWorksSection aria-label="how-it-works-section" id="how-it-works">
        <S.HowItWorksArticle>
          <h2>How it works</h2>
          <S.Paragraph>We get 300 most upvoted reddit posts from last year.</S.Paragraph>
          <Hr />
          <S.Paragraph>We transform the data into a heatmap that has days and hours.</S.Paragraph>
          <Hr />
          <S.Paragraph>Each square represents the amount of posts posted for that day and hour.</S.Paragraph>
        </S.HowItWorksArticle>
        <S.HowItWorksIllustrationWrapper>
          <Image
            src="/assets/images/tools_illustration.png"
            alt="wrench_tool"
            layout="responsive"
            width="662"
            height="387"
            quality={100}
          />
        </S.HowItWorksIllustrationWrapper>
      </S.HowItWorksSection>
      <Footer />
    </S.Main>
  );
}
