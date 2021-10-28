import Image from 'next/image';
import * as React from 'react';
import { A, Credits, Hr, Li, Links, LogoWrapper, Paragraph, StyledFooter, Ul } from './styles';

function Footer() {
  return (
    <StyledFooter>
      <LogoWrapper>
        <Image width="40" height="40" src="/assets/images/reddit.png" layout="fixed" quality={100} alt="logo" />
        <Hr />
      </LogoWrapper>
      <Links>
        <Ul>
          <Li>
            <A href="https://github.com/chimson/reddit-timer-app" target="_blank" rel="noreferrer">
              Github
            </A>
          </Li>
          <Li>
            <A href="https://lukaszadam.com/illustrations" target="_blank" rel="noreferrer">
              Illustrations by lukaszadam.com
            </A>
          </Li>
          <Li>
            <A href="https://profy.dev" target="_blank" rel="noreferrer">
              Inspired by
            </A>
          </Li>
          <Li>
            <A href="https://pushshift.io" target="_blank" rel="noreferrer">
              pushshift api
            </A>
          </Li>
        </Ul>
        <Hr />
      </Links>
      <Credits>
        <Paragraph>Copyright 2021, Piotr Fidurski</Paragraph>
      </Credits>
    </StyledFooter>
  );
}

export default Footer;
