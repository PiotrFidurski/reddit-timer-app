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
  background: linear-gradient(140deg, #252e7c, #040b3e 90%);
`;

export const IntroSection = styled.section`
  padding: 3rem 0;
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: 900px;
  align-items: flex-start;
  margin: 0 auto;
`;

export const Button = styled.button`
  background: transparent;
  color: white;
  padding: 15px 20px;
  border-radius: 9999px;
  border: 2px solid #41434d;
  min-width: 135px;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  max-width: 100px;
  position: relative;
  width: 100%;
  height: 170px;
  display: block;
  justify-content: center;
  align-items: center;
`;
