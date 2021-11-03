import SearchPage from '@pages/search';
import { fireEvent, screen } from '@testing-library/react';
import { render } from '@utils/test-utils';

test('it displays correct submissions for each square', async () => {
  render(<SearchPage />);

  await screen.findByTestId(/heatmap/i);

  const sunday12pm = screen.getByTestId(/^0_day-Sunday$/);
  const thursday4pm = screen.getByTestId(/^16_day-Thursday$/);

  fireEvent.click(sunday12pm);

  expect(screen.getByText(/Built an app to solve the media bias in our country/i)).toBeInTheDocument();

  fireEvent.click(thursday4pm);

  expect(screen.getByText(/React Exercises With Detailed Solutions/i)).toBeInTheDocument();
});

test('it has a link to each submission', async () => {
  render(<SearchPage />);

  await screen.findByTestId(/heatmap/i);

  const sunday12pm = screen.getByTestId(/^0_day-Sunday$/);

  fireEvent.click(sunday12pm);

  const link = screen.getByRole('link', { name: /submission-link/ });

  expect(link).toHaveAttribute('target', '_blank');

  expect(link).toHaveAttribute(
    'href',
    'https://www.reddit.com/r/reactjs/comments/lsv023/built_an_app_to_solve_the_media_bias_in_our/'
  );
});
