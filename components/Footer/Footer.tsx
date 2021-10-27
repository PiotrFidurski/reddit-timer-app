import Image from 'next/image';
import * as React from 'react';
import { StyledFooter } from './styles';

function Footer() {
  return (
    <StyledFooter>
      <a href="https://github.com/chimson/reddit-timer-app" target="_blank" rel="noreferrer">
        Github
      </a>
      <Image width="40" height="40" src="/assets/images/reddit.png" layout="fixed" quality={100} alt="logo" />
      <p>Copyright 2021, Piotr Fidurski</p>
    </StyledFooter>
  );
}

export default Footer;
