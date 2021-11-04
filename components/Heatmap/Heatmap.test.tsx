import { screen } from '@testing-library/react';
import { render } from '@utils/test-utils';
import { initialState } from 'utils/heatmap';
import Heatmap from './Heatmap';

const heatmapData = initialState();

heatmapData[0][0].push(1, 2);

heatmapData[6][23].push(1, 2, 3);

test('it renders correct numbers for squares', () => {
  render(<Heatmap data={heatmapData} onClick={() => {}} time={{ day: 0, hour: 0 }} />);

  const firstSquare = screen.getByTestId(/^0_day-Sunday$/);
  const secondSquare = screen.getByTestId(/^23_day-Saturday$/);

  expect(firstSquare).toHaveTextContent('2');
  expect(secondSquare).toHaveTextContent('3');
});
