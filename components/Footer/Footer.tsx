import Image from 'next/image';
import * as React from 'react';
import * as S from './styles';

function Footer() {
  return (
    <S.StyledFooter>
      <S.LogoWrapper>
        <Image width="40" height="40" src="/assets/images/reddit.png" layout="fixed" quality={100} alt="logo" />
        <S.Hr />
      </S.LogoWrapper>
      <S.Links>
        <S.Ul>
          <S.Li>
            <S.A href="https://github.com/chimson/reddit-timer-app" target="_blank" rel="noreferrer">
              Github
            </S.A>
          </S.Li>
          <S.Li>
            <S.A href="https://lukaszadam.com/illustrations" target="_blank" rel="noreferrer">
              Illustrations by lukaszadam.com
            </S.A>
          </S.Li>
          <S.Li>
            <S.A href="https://profy.dev" target="_blank" rel="noreferrer">
              Inspired by
            </S.A>
          </S.Li>
          <S.Li>
            <S.A href="https://pushshift.io" target="_blank" rel="noreferrer">
              pushshift api
            </S.A>
          </S.Li>
        </S.Ul>
        <S.Hr />
      </S.Links>
      <S.Credits>
        <S.Paragraph>Copyright 2021, Piotr Fidurski</S.Paragraph>
      </S.Credits>
    </S.StyledFooter>
  );
}

export default Footer;
