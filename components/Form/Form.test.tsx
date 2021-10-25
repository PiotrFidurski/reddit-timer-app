import SearchPage from '@pages/search';
import { fireEvent, render, screen } from '@testing-library/react';

test('an input has a default value of "javascript"', () => {
  render(<SearchPage />);

  const input = screen.getByRole('textbox', { name: /subreddit/i });

  expect(input).toHaveAttribute('value', 'javascript');
});

test('an input can be typed into', () => {
  render(<SearchPage />);

  const input = screen.getByRole('textbox', { name: /subreddit/i });

  fireEvent.change(input, { target: { value: 'sometext' } });

  expect(input).toHaveAttribute('value', 'sometext');

  fireEvent.change(input, { target: { value: '' } });

  expect(input).toHaveAttribute('value', '');
});

test('when input value is "" submit button is disabled', () => {
  render(<SearchPage />);

  const input = screen.getByRole('textbox', { name: /subreddit/i });

  const submitButton = screen.getByRole('button', { name: /search/i });

  fireEvent.change(input, { target: { value: '' } });

  expect(input).toHaveAttribute('value', '');

  expect(submitButton).toHaveAttribute('disabled');

  fireEvent.change(input, { target: { value: 'somesubreddit' } });

  expect(submitButton).not.toHaveAttribute('disabled');
});
