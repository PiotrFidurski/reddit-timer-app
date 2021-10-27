import styled from 'styled-components';
import { Button } from './HomePage.styled';

export const Main = styled.main`
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: auto auto auto 1fr auto;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  grid-template-areas:
    'header header header header'
    'form form form form'
    'heading heading heading heading'
    'heatmap heatmap heatmap heatmap'
    'footer footer footer footer';
  max-width: 1440px;
  padding: 0 1rem;
  min-height: 100vh;
`;

export const Header = styled.header`
  padding: 1rem 0rem;
  grid-area: header;
`;

export const Nav = styled.nav`
  position: relative;
`;

export const GoBackButton = styled(Button)`
  min-width: 80px;
  max-height: 80px;
  min-height: 80px;
  padding: 0;
  svg {
    transition: fill 0.25s ease;
    transform: rotate(180deg);
  }
`;

export const Heading = styled.header`
  max-width: 700px;
  grid-area: heading;
  padding: 1rem;
  justify-content: center;
  display: flex;
  margin: 0 auto;
`;

export const H2 = styled.h2`
  color: ${(props) => props.theme.color.highlight};
`;

export const Hr = styled.hr`
  border: none;
  background-color: ${(props) => props.theme.color.highlight};
  height: 1px;
  width: 100%;
  margin: 0.5rem 0;
`;
