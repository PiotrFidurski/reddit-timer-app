import SearchPage from '@pages/search';
import { fireEvent, screen } from '@testing-library/react';
import { render } from '@utils/test-utils';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

test('it renders an input and a label with name subreddit', async () => {
  render(<SearchPage />);

  await screen.findByTestId(/heatmap/i);

  const label = screen.getByLabelText(/subreddit/i);

  const input = screen.getByRole('textbox', { name: /subreddit/i });

  expect(input).toBeInTheDocument();

  expect(label).toBeInTheDocument();
});

test('it has a go back button that links back to "/"', async () => {
  const back = jest.fn();

  (useRouter as jest.MockedFunction<jest.Mock>).mockImplementation(() => ({
    asPath: '/search',
    back,
  }));

  render(<SearchPage />);

  await screen.findByTestId(/heatmap/i);

  const goBackButton = screen.getByRole('button', { name: /back/i });

  fireEvent.click(goBackButton);

  expect(back).toHaveBeenCalledTimes(1);

  (useRouter as jest.MockedFunction<jest.Mock>).mockRestore();
});

test('it fetches data for "r/javascript" subreddit when visited', async () => {
  render(<SearchPage />);

  expect(await screen.findByTestId(/heatmap/i)).toBeInTheDocument();
});

// eslint-disable-next-line jest/no-export
export {};
