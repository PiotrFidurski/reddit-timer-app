import styled from 'styled-components';

export const Main = styled.main`
  position: relative;
`;

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: skewY(-10deg);
  transform-origin: 0 50%;
  right: 0;
  padding: clamp(220px, 10vw, 400px);
  background: linear-gradient(140deg, #252e7c, #040b3e 80%);

  @media (min-width: 768px) {
  }
`;

export const IntroSection = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: 700px;
  margin: 0 auto;
`;
