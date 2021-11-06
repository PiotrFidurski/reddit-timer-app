import { Button } from '@styled/pages/HomePageStyles';
import { OrderType } from '@types';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  gap: 2rem;
  z-index: 2;
  margin: 2rem 0;
  background: ${({ theme: { background } }) => background.primary};
  padding: 2rem;
`;

export const SortButton = styled(Button)<{ activeType: string }>`
  max-width: 50px;
  min-width: 50px;
  min-height: 50px;
  padding: 0;
  transform: ${({ activeType, name }) => (activeType === name ? `scale(1.5)` : `scale(1)`)};
  border-color: ${({ theme: { color }, activeType, name }) => (activeType === name ? color.highlight : color.border)};
  transition: transform 0.25s ease, border-color 0.25s ease;

  svg {
    fill: ${({ theme: { color }, activeType, name }) => (activeType === name ? color.highlight : color.default)};
  }
`;

export const SortOrderButton = styled(SortButton)<{ order?: OrderType }>`
  transform: ${({ order }) => (order === 'ASC' ? `rotate(-90deg)` : `rotate(90deg)`)};
  border-color: ${({ order }) => (order === 'ASC' ? `#4caf50` : `#f44336`)};
`;
