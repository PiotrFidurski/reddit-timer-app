import styled, { keyframes } from 'styled-components';
import { ArticleStyles, ImageWrapperStyles, LineOnHover, SectionStyles } from './style-utils';

export const Main = styled.main`
  position: relative;
  padding: 0 1rem;
  display: grid;
  grid-gap: 1rem;
  margin: 0 auto;
  max-width: 1260px;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  grid-template-areas:
    'navbar navbar navbar navbar'
    'image image image image'
    'buttons buttons buttons buttons'
    'about-section about-section about-section about-section'
    'how-it-works-section how-it-works-section how-it-works-section how-it-works-section'
    'how-it-works-image how-it-works-image how-it-works-image how-it-works-image'
    'footer footer footer footer';

  @media (min-width: 768px) {
    grid-template-areas:
      'navbar navbar navbar navbar'
      'buttons buttons image image'
      'about-section about-section about-section about-section'
      'how-it-works-section how-it-works-section how-it-works-section how-it-works-section'
      'footer footer footer footer';
  }
`;

const flyFromBottomAndFadeIn = keyframes`
  from {
    opacity:0;
    transform: translateY(150px);
  }

  to {
    opacity:1;
    transform: translateY(0);
  }
`;

const scaleAndFadeIn = keyframes`
  from {
    opacity:0;
    transform: scale(1.7, 1.7);
  }

  to {
    opacity:1;
    transform: scale(1);
  }
`;

export const ImageWrapper = styled.div`
  ${ImageWrapperStyles};
  max-width: 550px;
  grid-area: image;
  padding: 2rem;
  animation: ${scaleAndFadeIn} 0.7s cubic-bezier(0.165, 0.84, 0.44, 1);

  @media (min-width: 768px) {
    padding: 0 1rem 13rem 1rem;
  }
`;

export const IntroSection = styled.section`
  max-width: 600px;
  padding: 2rem;
  align-items: center;
  display: flex;
  position: relative;
  justify-content: center;
  margin: 0 auto;
  grid-area: buttons;
  width: 100%;
  text-align: center;
  flex-direction: column;
  animation: ${flyFromBottomAndFadeIn} 0.7s ease;

  @media (min-width: 768px) {
    padding: 0 1rem 13rem 1rem;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  padding-top: 1rem;
  gap: 2rem;
  flex-direction: column;
`;

export const Button = styled.button`
  background: transparent;
  color: ${({ theme: { color } }) => color.default};
  padding: 35px 20px;
  border-radius: 9999px;
  border: 2px solid ${({ theme: { color } }) => color.border};
  font-size: clamp(1.4rem, 2vw, 1.8rem);
  max-width: 300px;
  min-width: 200px;
  max-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.25s ease;

  svg {
    transition: fill 0.25s ease;
  }

  &:disabled {
    cursor: no-drop;
    opacity: 0.5;
  }

  &:focus-visible {
    border-color: ${({ theme: { color } }) => color.highlight};
    box-shadow: 0px 0px 8px ${({ theme: { color } }) => color.accent};
    outline: none;
    svg {
      fill: ${({ theme: { color } }) => color.highlight};
    }
  }

  svg {
    fill: ${({ theme: { color } }) => color.default};
  }

  &:hover {
    border-color: ${({ theme: { color } }) => color.highlight};
    svg {
      fill: ${({ theme: { color } }) => color.highlight};
    }
  }

  @media (min-width: 768px) {
    min-width: 300px;
  }
`;

export const AboutSection = styled.section`
  ${SectionStyles};
  grid-area: about-section;
`;

export const HowItWorksSection = styled.section`
  ${SectionStyles};
  grid-area: how-it-works-section;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;

export const FilledVariantButton = styled(Button)`
  background: ${({ theme: { background } }) => background.button};
  border: 2px solid transparent;
`;

export const AboutIllustrationWrapper = styled.div`
  ${ImageWrapperStyles};
  max-width: 600px;
`;

export const HowItWorksIllustrationWrapper = styled.div`
  ${ImageWrapperStyles};
  max-width: 600px;
`;

export const AboutArticle = styled.article`
  ${ArticleStyles};
`;

export const HowItWorksArticle = styled.article`
  ${ArticleStyles};
`;

export const Paragraph = styled.p`
  font-size: clamp(1.2rem, 2vw, 1.8rem);
  line-height: clamp(1.8rem, 3vw, 2.4rem);
  color: ${({ theme: { color } }) => color.secondary};
`;

export const A = styled.a`
  ${LineOnHover}
  display: inline;
  margin-left: -1rem;
  position: relative;
`;
