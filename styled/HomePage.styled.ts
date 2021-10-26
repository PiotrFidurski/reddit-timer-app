import styled, { css } from 'styled-components';

export const Main = styled.main`
  position: relative;
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
    grid-template-areas:
      'navbar navbar navbar navbar'
      'buttons buttons image image'
      'about-section about-section about-section about-section'
      'how-it-works-section how-it-works-section how-it-works-section how-it-works-section'
      'footer footer footer footer';
  }
`;

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: skewY(-10deg);
  transform-origin: 0 50%;
  right: 0;
  padding: clamp(220px, 15vw, 400px);
  background: linear-gradient(140deg, #252e7c, #040b3e 90%);
`;

const ImageWrapperStyles = css`
  position: relative;
  margin: 0 auto;
  width: 100%;
  @media (min-width: 768px) {
    max-width: 100%;
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
  @media (min-width: 768px) {
    min-width: 300px;
  }
`;

export const AboutSection = styled.section`
  grid-area: about-section;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  @media (min-width: 768px) {
    padding: 0 1rem 13rem 1rem;
    flex-direction: row;
  }
`;

export const HowItWorksSection = styled.section`
  grid-area: how-it-works-section;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  @media (min-width: 768px) {
    padding: 0 1rem 13rem 1rem;
    flex-direction: row-reverse;
  }
`;

export const FilledVariantButton = styled(Button)`
  background: ${(props) => props.theme.background.secondary};
  border: 2px solid transparent;
`;

export const AboutIllustrationWrapper = styled.section`
  ${ImageWrapperStyles};
  max-width: 745px;
`;

export const HowItWorksIllustrationWrapper = styled.section`
  ${ImageWrapperStyles};
  max-width: 660px;
  grid-area: how-it-works-image;
`;

const WrapperStyles = css`
  max-width: 650px;
  margin: 0 auto;
  position: relative;
  @media (min-width: 768px) {
    padding: 0 1rem;
  }
`;

export const AboutWrapper = styled.section`
  ${WrapperStyles};
`;

export const HowItWorksWrapper = styled.section`
  ${WrapperStyles};
  grid-area: how-it-works-section;
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
