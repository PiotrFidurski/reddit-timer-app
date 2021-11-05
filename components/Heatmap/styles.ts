import { Button } from '@styled/HomePage.styled';
import { fade } from '@styled/style-utils';
import styled from 'styled-components';

export const Section = styled.section`
  max-width: 1000px;
  position: relative;
  animation: ${fade} 0.7s ease;
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
    max-width: 960px;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 33px;
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
    min-height: 35px;
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

export const Square = styled(Button)<{ bg: string; isActive: boolean }>`
  height: 35px;
  min-width: 35px;
  padding: 0;
  border-color: transparent;
  border-radius: 0;
  background: ${({ bg, isActive }) => (isActive ? '#f44336' : bg)};
  display: flex;
  font-size: 1.2rem;
  align-items: center;
  justify-content: center;
  will-change: contents;
  transition: transform 0.25s ease;

  &:focus-visible {
    border-color: #f44336;
  }

  &:hover {
    cursor: pointer;
    border: 0;
    background: ${({ theme: { color } }) => color.accent};
  }

  @media (min-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;
