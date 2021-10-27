import SearchPage from '@pages/search';
import { fireEvent, screen } from '@testing-library/react';
import { render } from '@utils/test-utils';
import { useRouter } from 'next/router';

test('it renders an input and a label with name subreddit', () => {
  render(<SearchPage />);

  const label = screen.getByLabelText(/subreddit/i);

  const input = screen.getByRole('textbox', { name: /subreddit/i });

  expect(input).toBeInTheDocument();

  expect(label).toBeInTheDocument();
});

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

test('it has a go back button that links back to "/"', () => {
  const back = jest.fn();

  (useRouter as jest.MockedFunction<jest.Mock>).mockImplementationOnce(() => ({
    asPath: '/search',
    back,
  }));

  render(<SearchPage />);

  const goBackButton = screen.getByRole('button', { name: /back/i });

  fireEvent.click(goBackButton);

  expect(back).toHaveBeenCalledTimes(1);
});

// eslint-disable-next-line jest/no-export
export {};
