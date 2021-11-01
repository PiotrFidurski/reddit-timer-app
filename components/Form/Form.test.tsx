import SearchPage from '@pages/search';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { render } from '@utils/test-utils';

test('an input has a default value of "javascript"', async () => {
  render(<SearchPage />);

  await screen.findByTestId(/heatmap/i);

  const input = screen.getByRole('textbox', { name: /subreddit/i });

  await waitFor(() => expect(input).toHaveAttribute('value', 'javascript'));
});

test('an input can be typed into', async () => {
  render(<SearchPage />);

  await screen.findByTestId(/heatmap/i);

  const input = screen.getByRole('textbox', { name: /subreddit/i });

  fireEvent.change(input, { target: { value: 'sometext' } });

  expect(input).toHaveAttribute('value', 'sometext');

  fireEvent.change(input, { target: { value: '' } });

  expect(input).toHaveAttribute('value', '');
});

test('when input value is "" submit button is disabled', async () => {
  render(<SearchPage />);

  await screen.findByTestId(/heatmap/i);

  const input = screen.getByRole('textbox', { name: /subreddit/i });

  const submitButton = screen.getByRole('button', { name: /search/i });

  fireEvent.change(input, { target: { value: '' } });

  expect(input).toHaveAttribute('value', '');
  expect(submitButton).toHaveAttribute('disabled');

  fireEvent.change(input, { target: { value: 'somesubreddit' } });

  expect(submitButton).not.toHaveAttribute('disabled');
});
