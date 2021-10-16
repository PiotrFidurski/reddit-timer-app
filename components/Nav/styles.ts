import Link from 'next/link';
import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const A = styled(Link)``;

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

export const Header = styled.header`
  position: relative;
  max-width: 1200px;
  padding: 0 10px;
  margin: 0 auto;
`;

export const LogoLink = styled.div`
  cursor: pointer;
  display: flex;
`;
