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
  background: ${(props) => props.theme.background.button};
  max-width: 80px;
  width: 100%;
  font-size: 0.8rem;
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    min-height: 40px;
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
  justify-content: center;
  align-items: center;
  min-height: 40px;
  background: ${(props) => props.theme.background.secondary};
`;

export const Square = styled.div<{ bg: string }>`
  height: 40px;
  width: 40px;
  background: ${(props) => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease-in;
  :hover {
    cursor: pointer;
    border: 2px solid #293035;
    transform: scale(1.2, 1.2);
  }
`;
