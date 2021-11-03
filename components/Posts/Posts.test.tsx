import SearchPage from '@pages/search';
import { fireEvent, screen } from '@testing-library/react';
import { render } from '@utils/test-utils';

test('it displays correct posts when theyre selected', async () => {
  render(<SearchPage />);

  await screen.findByTestId(/heatmap/i);

  const sunday12pm = screen.getByTestId(/^0_day-Sunday$/);
  const thursday4pm = screen.getByTestId(/^16_day-Thursday$/);

  fireEvent.click(sunday12pm);

  expect(screen.getByText(/Built an app to solve the media bias in our country/i)).toBeInTheDocument();

  fireEvent.click(thursday4pm);

  expect(screen.getByText(/React Exercises With Detailed Solutions/i)).toBeInTheDocument();
});
