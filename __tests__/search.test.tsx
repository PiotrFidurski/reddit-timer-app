import SearchPage from '@pages/search';
import { fireEvent, render, screen } from '@testing-library/react';

test('it renders an input and a label', () => {
  render(<SearchPage />);

  const label = screen.getByLabelText(/subreddit/i);

  const input = screen.getByRole('textbox', { name: /subreddit/i });

  expect(input).toBeInTheDocument();
  expect(label).toBeInTheDocument();
});

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

// eslint-disable-next-line jest/no-export
export {};
