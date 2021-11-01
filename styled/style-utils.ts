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
    filter: brightness(0.825) drop-shadow(0px 0px 0.4px ${({ theme: { color } }) => color.highlight});
  }
`;

export const SectionStyles = css`
  display: flex;
  border-radius: 15px;
  box-shadow: 0px 0px 4px 0px ${({ theme: { shadow } }) => shadow.primary};
  background: ${({ theme: { background } }) => background.secondary};
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
  padding: 0.5rem 1rem;
  &:after {
    transition: transform 0.25s ease;
    position: absolute;
    height: 2px;
    bottom: 5px;
    left: 1rem;
    content: '';
    transform: scaleX(0);
    display: block;
    transform-origin: left;
    width: calc(100% - 2.1rem);
  }
  &:hover:after {
    background-color: currentColor;
    transform: scaleX(1);
  }
  &:hover {
    color: ${({ theme: { color } }) => color.highlight};
  }

  &:focus {
    outline: none;
    background-color: ${({ theme: { color } }) => color.accent};
    border-radius: 999px;
    color: ${({ theme: { color } }) => color.highlight};
  }
`;
