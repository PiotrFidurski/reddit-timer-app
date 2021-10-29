import styled from 'styled-components';

export const Section = styled.section`
  max-width: 1000px;
  grid-area: heatmap;
  display: flex;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const HeatmapWrapper = styled.div`
  display: flex;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const TimeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  word-break: break-word;
  text-align: center;
  margin-top: 40px;
  justify-content: space-between;
  @media (min-width: 768px) {
    max-width: 890px;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 70px;
  }
`;

export const Time = styled.div`
  background: ${({ theme: { background } }) => background.button};
  max-width: 40px;
  width: 100%;
  font-size: 0.7rem;
  min-height: 70px;
  overflow: hidden;
  min-width: 0px;
  font-size: clamp(0.6rem, 2vw, 0.8rem);
  white-space: pre-line;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    min-height: 40px;
    max-width: 80px;
  }
`;

export const DayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 960px;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Day = styled.div`
  max-width: 70px;
  width: 100%;
  display: flex;
  width: 35px;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  background: ${({ theme: { background } }) => background.secondary};
  @media (min-width: 768px) {
    max-width: 40px;
  }
`;

export const Square = styled.div<{ bg: string }>`
  height: 35px;
  width: 35px;
  background: ${({ bg }) => bg};
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: contents;
  transition: transform 0.25s ease;
  :hover {
    cursor: pointer;
    background: ${({ theme: { background } }) => background.secondary};
    transform: scale(1.4, 1.4);
  }
  @media (min-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;
