import Link from 'next/link';
import * as React from 'react';
import Close from '../../public/assets/svg/close.svg';
import Hamburger from '../../public/assets/svg/hamburger.svg';
import { A, Li, Menu, Nav, ToggleMenuButton, Ul } from './style';

function CollapsedMenu() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Nav>
      {!open ? (
        <ToggleMenuButton onClick={handleOpen} aria-label="menu-toggle">
          <Hamburger />
        </ToggleMenuButton>
      ) : null}
      <Menu open={open} aria-label="collapsable-menu" aria-hidden={open}>
        <ToggleMenuButton onClick={handleClose}>
          <Close />
        </ToggleMenuButton>
        <Ul>
          <Li>
            <Link href="/search" passHref>
              <A>Search</A>
            </Link>
          </Li>
          <Li>
            <A href="/#about">About</A>
          </Li>
          <Li>
            <A href="/#how-it-works">How it works</A>
          </Li>
        </Ul>
      </Menu>
    </Nav>
  );
}

export default CollapsedMenu;
