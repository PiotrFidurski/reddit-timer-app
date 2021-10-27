import styled from 'styled-components';

export const Section = styled.section`
  max-width: 1000px;
  grid-area: heatmap;
  margin: 0 auto;
`;

export const DayWrapper = styled.div`
  display: flex;
  max-width: 960px;
  align-items: center;
`;

export const Day = styled.div`
  max-width: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
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
