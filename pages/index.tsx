import Footer from '@components/Footer/Footer';
import NavComponent from '@components/Header/NavComponent';
import {
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
      <AboutSection>
        <AboutArticle>
          <h2 id="about">About</h2>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sint delectus dolor nesciunt, inventore
            voluptas ea eveniet est praesentium obcaecati laudantium ad quos sequi odio officiis minima, sapiente in
            modi.`
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
      <HowItWorksSection>
        <HowItWorksArticle>
          <h2 id="how-it-works">How it works</h2>
          <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Paragraph>
          <Paragraph>
            Excepturi sint delectus dolor nesciunt, inventore voluptas ea eveniet est praesentium obcaecati laudantium
            ad quos sequi odio officiis minima, sapiente in modi.`
          </Paragraph>
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
