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
      '. . about-section about-section'
      'how-it-works-section how-it-works-section . .'
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

export const IntroSection = styled.section`
  max-width: 600px;
  padding: 1rem;
  align-items: center;
  display: flex;
  position: relative;
  justify-content: center;
  margin: 0 auto;
  grid-area: buttons;
  width: 100%;
  text-align: center;
  flex-direction: column;
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
  padding: 15px 20px;
  border-radius: 9999px;
  border: 2px solid #41434d;
  min-width: 300px;
  max-height: 50px;
  cursor: pointer;
  @media (min-width: 768px) {
    min-width: 300px;
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

export const Paragraph = styled.p`
  font-size: clamp(1rem, 2vw, 2rem);
  line-height: clamp(2rem, 3vw, 3rem);
`;

export const Footer = styled.footer`
  position: relative;
  padding: 1rem;
  grid-area: footer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100px;
`;
