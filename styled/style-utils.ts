import { css } from 'styled-components';

export const LineOnHover = css`
  &:after {
    transition: transform 0.25s ease;
    position: absolute;
    height: 2px;
    bottom: -3px;
    left: 0;
    content: '';
    transform: scaleX(0);
    display: block;
    transform-origin: left;
    width: 99%;
  }
  &:hover:after {
    background-color: currentColor;
    transform: scaleX(1);
  }
  &:hover {
    color: ${(props) => props.theme.color.highlight};
  }
`;
