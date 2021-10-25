import Image from 'next/image';
import * as React from 'react';
import * as S from './styles';

function NavComponent() {
  return (
    <S.Header>
      <S.Nav>
        <S.A href="/">
          <S.LogoLink data-testid="link-logo">
            <Image width="40" height="40" src="/assets/images/reddit.png" layout="fixed" quality={100} alt="logo" />
          </S.LogoLink>
        </S.A>
        <S.Ul>
          <S.Li>
            <S.A href="/search">Search</S.A>
          </S.Li>
          <S.Li>
            <S.A href="#about">About</S.A>
          </S.Li>
          <S.Li>
            <S.A href="#how-it-works">How it works</S.A>
          </S.Li>
        </S.Ul>
      </S.Nav>
    </S.Header>
  );
}

export default NavComponent;
