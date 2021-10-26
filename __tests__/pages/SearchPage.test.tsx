import SearchPage from '@pages/search';
import { screen } from '@testing-library/react';
import { render } from '@utils/test-utils';

test('it renders an input and a label with name subreddit', () => {
  render(<SearchPage />);

  const label = screen.getByLabelText(/subreddit/i);

  const input = screen.getByRole('textbox', { name: /subreddit/i });

  expect(input).toBeInTheDocument();

  expect(label).toBeInTheDocument();
});

// eslint-disable-next-line jest/no-export
export {};
