import { LineOnHover } from '@styled/style-utils';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  position: relative;
  padding: 1rem 1rem 0 1rem;
  background: ${({ theme: { background } }) => background.secondary};
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  grid-area: footer;
  display: grid;
  margin-top: 2rem;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  grid-template-areas:
    'logo logo logo'
    'links links links'
    'credits credits credits';
  justify-content: space-between;
  align-items: center;
  min-height: 100px;
  @media (min-width: 768px) {
    grid-template-areas: 'logo links credits';
  }
`;

export const Links = styled.section`
  grid-area: links;
  font-size: 0.7rem;
  width: auto;
`;

export const LogoWrapper = styled.section`
  grid-area: logo;
`;

export const Credits = styled.section`
  grid-area: credits;
  color: ${({ theme: { color } }) => color.secondary};
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const Hr = styled.hr`
  border: none;
  background: ${({ theme: { color } }) => color.highlight};
  height: 1px;
  width: 100%;
  margin: 0.7rem 0;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  font-size: clamp(0.8rem, 1vw, 1rem);
  padding: 0;
`;

export const Li = styled.li`
  padding: 0.6rem 0;
  width: min-content;
`;

export const A = styled.a`
  ${LineOnHover}
  transition: color 0.25s ease;
  position: relative;
`;

export const Paragraph = styled.p`
  font-size: clamp(0.8rem, 1vw, 1rem);
`;
