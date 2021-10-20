import styled from 'styled-components';

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
    'footer footer footer footer';

  /* mobile breakpoint for reference later, 480px */
  @media (min-width: 768px) {
    grid-template-areas:
      'navbar navbar navbar navbar'
      'buttons buttons image image'
      'about-section about-section how-it-works-section how-it-works-section'
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

export const ButtonsWrapper = styled.section`
  grid-area: buttons;
  max-width: 600px;
  padding: 1rem;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  margin: 0 auto;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  background: transparent;
  color: white;
  padding: 15px 20px;
  border-radius: 9999px;
  border: 2px solid #41434d;
  min-width: 135px;
  max-height: 50px;
  cursor: pointer;
  @media (min-width: 768px) {
    min-width: 300px;
  }
`;

export const ImageWrapper = styled.div`
  grid-area: image;
  padding: 1rem;
  position: relative;
  margin: 0 auto;
  max-width: 550px;
  width: 100%;
  @media (min-width: 768px) {
    max-width: auto;
  }
`;

export const AboutWrapper = styled.section`
  position: relative;
  padding: 1rem;
  grid-area: about-section;
`;

export const HowItWorksWrapper = styled.section`
  padding: 1rem;
  position: relative;
  grid-area: how-it-works-section;
`;

export const Footer = styled.footer`
  position: relative;
  grid-area: footer;
`;
