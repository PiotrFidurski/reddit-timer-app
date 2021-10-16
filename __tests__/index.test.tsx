import HomePage from '@pages/index';
import { fireEvent, render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

test('r/javascript Button links to "/search"', () => {
  const push = jest.fn();

  (useRouter as jest.MockedFunction<jest.Mock>).mockImplementationOnce(() => ({
    asPath: '/',
    push,
  }));

  render(<HomePage />);

  const searchButton = screen.getByText(/javascript/i);

  fireEvent.click(searchButton);

  expect(push).toHaveBeenCalledWith('/search');
});

test('Github Button links to "https://github.com/chimson/reddit-timer-app" and has target blank', () => {
  const href = 'https://github.com/chimson/reddit-timer-app';

  render(<HomePage />);

  const githubButton = screen.getByRole('link', { name: /Github/i });
  expect(githubButton).toHaveAttribute('target', '_blank');
  expect(githubButton).toHaveAttribute('rel', 'noreferrer');
  expect(githubButton).toHaveAttribute('href', href);
});

// eslint-disable-next-line jest/no-export
export {};
