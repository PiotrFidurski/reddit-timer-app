import CollapsedMenu from '@components/CollapsedMenu/CollapsedMenu';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import * as S from './styles';

function NavComponent() {
  return (
    <S.Header>
      <S.Nav>
        <Link href="/" passHref>
          <div data-testid="link-logo">
            <Image width="40" height="40" src="/assets/images/reddit.png" layout="fixed" quality={100} alt="logo" />
          </div>
        </Link>
        <S.Ul>
          <S.Li>
            <Link href="/search" passHref>
              <S.A aria-label="header-link">Search</S.A>
            </Link>
          </S.Li>
          <S.Li>
            <S.A href="/#about">About</S.A>
          </S.Li>
          <S.Li>
            <S.A href="/#how-it-works">How it works</S.A>
          </S.Li>
        </S.Ul>
      </S.Nav>
      <CollapsedMenu />
    </S.Header>
  );
}

export default NavComponent;
