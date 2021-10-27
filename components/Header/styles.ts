import { LineOnHover } from '@styled/style-utils';
import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  margin: 0 auto;
  width: 100%;
  grid-area: navbar;
  margin-bottom: 2rem;
  padding: 1rem 0;
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const A = styled.a`
  ${LineOnHover}
  position: relative;
  display: block;
  transition: color 0.25s ease;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

export const Li = styled.li`
  padding: 0 1rem;
`;

export const LogoLink = styled.div`
  cursor: pointer;
  display: flex;
`;
