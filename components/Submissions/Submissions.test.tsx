import SearchPage from '@pages/search';
import { fireEvent, screen } from '@testing-library/react';
import { render } from '@utils/test-utils';

test('it displays correct submissions for each square', async () => {
  render(<SearchPage />);

  await screen.findByTestId(/heatmap/i);

  const monday2am = screen.getByTestId(/^0_day-Monday$/);
  const friday12pm = screen.getByTestId(/^23_day-Friday$/);

  fireEvent.click(monday2am);

  expect(screen.getByText(/Mothers Day CSS Card/i)).toBeInTheDocument();

  fireEvent.click(friday12pm);

  expect(screen.getByText(/The Amazing Mechanical Plumbus/i)).toBeInTheDocument();
});

test('it has a link to each submission', async () => {
  render(<SearchPage />);

  await screen.findByTestId(/heatmap/i);

  const monday2am = screen.getByTestId(/^0_day-Monday$/);

  fireEvent.click(monday2am);

  const link = screen.getByRole('link', { name: /submission-link/ });

  expect(link).toHaveAttribute('target', '_blank');

  expect(link).toHaveAttribute('href', 'https://www.reddit.com/r/javascript/comments/n8r1fy/mothers_day_css_card/');
});
