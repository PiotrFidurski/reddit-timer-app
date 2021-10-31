import Link from 'next/link';
import * as React from 'react';
import Close from '../../public/assets/svg/close.svg';
import Hamburger from '../../public/assets/svg/hamburger.svg';
import * as S from './style';

function CollapsedMenu() {
  const [open, setOpen] = React.useState(false);

  const [visible, setVisible] = React.useState('hidden');

  const handleOpen = () => {
    setOpen(true);

    setVisible('visible');
  };

  const handleClose = () => {
    setOpen(false);

    setTimeout(() => {
      setVisible('hidden');
    }, 400);
  };

  return (
    <S.Section>
      {!open ? (
        <S.ToggleMenuButton onClick={handleOpen} aria-label="menu-open">
          <Hamburger />
        </S.ToggleMenuButton>
      ) : null}
      <S.Menu open={open} visibility={visible} aria-label="collapsable-menu" aria-hidden={!open}>
        <S.ToggleMenuButton onClick={handleClose} aria-label="menu-close">
          <Close />
        </S.ToggleMenuButton>
        <S.Ul>
          <S.Li>
            <Link href="/search" passHref>
              <S.A>Search</S.A>
            </Link>
          </S.Li>
          <S.Li>
            <S.A href="/#about">About</S.A>
          </S.Li>
          <S.Li>
            <S.A href="/#how-it-works">How it works</S.A>
          </S.Li>
        </S.Ul>
      </S.Menu>
    </S.Section>
  );
}

export default CollapsedMenu;
