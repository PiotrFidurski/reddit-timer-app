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

test('Github button links to repository and has target attribute set to blank', () => {
  const href = 'https://github.com/chimson/reddit-timer-app';

  render(<HomePage />);

  const [btnLink, link] = screen.getAllByRole('link', { name: /Github/i }).map((el) => el);

  expect(btnLink).toHaveAttribute('target', '_blank');
  expect(btnLink).toHaveAttribute('rel', 'noreferrer');
  expect(btnLink).toHaveAttribute('href', href);

  expect(link).toHaveAttribute('target', '_blank');
  expect(link).toHaveAttribute('rel', 'noreferrer');
  expect(link).toHaveAttribute('href', href);
});

// eslint-disable-next-line jest/no-export
export {};
