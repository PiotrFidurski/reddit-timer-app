import { Button } from '@styled/HomePage.styled';
import { LineOnHover } from '@styled/style-utils';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  min-height: 80px;
  position: relative;
  justify-content: flex-end;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const ToggleMenuButton = styled(Button)`
  min-width: 80px;
  max-height: 80px;
  min-height: 80px;
  padding: 0;
`;

export const Menu = styled.nav<{ open: boolean }>`
  display: flex;
  background: ${({ theme }) => theme.background.secondary};
  position: absolute;
  top: 0;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100vw)')};
  left: 0;
  width: 90vw;
  transition: transform 0.5s ease-in-out;
  transform-origin: left;
  min-height: 300px;
  z-index: 9999;
  border-radius: 1rem;
  padding: 1rem;
  justify-content: flex-end;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
`;

export const Li = styled.li`
  padding: 0 1rem;
`;

export const A = styled.a`
  ${LineOnHover}
  position: relative;
  display: block;
  transition: color 0.25s ease;
`;
