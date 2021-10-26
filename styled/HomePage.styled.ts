import styled, { css } from 'styled-components';

const ArticleStyles = css`
  max-width: 500px;
  position: relative;
  @media (min-width: 768px) {
    padding: 0 1rem;
  }
`;

const ImageWrapperStyles = css`
  width: 100%;
  img {
    filter: brightness(0.825) drop-shadow(0px 0px 0.4px ${(props) => props.theme.color.highlight});
  }
`;

const SectionStyles = css`
  display: flex;
  border-radius: 15px;
  background: #201d32;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  padding: 2rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Main = styled.main`
  position: relative;
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
  margin: 0 auto;
  max-width: 1440px;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  grid-template-areas:
    'navbar navbar navbar navbar'
    'image image image image'
    'buttons buttons buttons buttons'
    'about-section about-section about-section about-section'
    'how-it-works-section how-it-works-section how-it-works-section how-it-works-section'
    'how-it-works-image how-it-works-image how-it-works-image how-it-works-image'
    'footer footer footer footer';

  /* mobile breakpoint for reference later, 480px */
  @media (min-width: 768px) {
    /* padding: 0; */
    grid-template-areas:
      'navbar navbar navbar navbar'
      'buttons buttons image image'
      'about-section about-section about-section about-section'
      'how-it-works-section how-it-works-section how-it-works-section how-it-works-section'
      'footer footer footer footer';
  }
`;

export const ImageWrapper = styled.div`
  ${ImageWrapperStyles};
  max-width: 550px;
  grid-area: image;
  padding: 2rem;
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
  color: ${(props) => props.theme.color.default};
  padding: 35px 20px;
  border-radius: 9999px;
  border: 2px solid #41434d;
  font-size: clamp(1.4rem, 2vw, 1.8rem);
  min-width: 300px;
  max-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    border-color: ${(props) => props.theme.color.highlight};
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
  background: ${(props) => props.theme.background.secondary};
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
  font-size: clamp(1.4rem, 2vw, 1.8rem);
  line-height: clamp(2rem, 3vw, 2.4rem);
  color: ${(props) => props.theme.color.secondary};
`;

export const Footer = styled.footer`
  position: relative;
  padding: 0 1rem;
  grid-area: footer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100px;
`;
