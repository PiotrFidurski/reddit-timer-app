import { css } from 'styled-components';

export const ArticleStyles = css`
  max-width: 500px;
  position: relative;

  @media (min-width: 768px) {
    padding: 0 1rem;
  }
`;

export const ImageWrapperStyles = css`
  width: 100%;
  img {
    filter: brightness(0.825) drop-shadow(0px 0px 0.4px ${(props) => props.theme.color.highlight});
  }
`;

export const SectionStyles = css`
  display: flex;
  border-radius: 15px;
  box-shadow: 0px 0px 4px 0px ${(props) => props.theme.shadow.primary};
  background: ${(props) => props.theme.background.secondary};
  align-items: center;
  flex-direction: column;
  margin-bottom: 1rem;
  justify-content: space-around;
  padding: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 10rem;
  }
`;

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
