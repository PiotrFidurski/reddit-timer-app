import { render, screen } from '@testing-library/react';
import { initialState } from 'utils/heatmap';
import Heatmap from './Heatmap';

const stubData = initialState();

stubData[0][0].push(1, 2);

stubData[6][23].push(1, 2, 3);

test('it renders correct numbers for squares', () => {
  render(<Heatmap data={stubData} />);

  const firstSquare = screen.getByTestId(/^0_day-Sunday$/);
  const secondSquare = screen.getByTestId(/^23_day-Saturday$/);

  expect(firstSquare).toHaveTextContent('2');
  expect(secondSquare).toHaveTextContent('3');
});
