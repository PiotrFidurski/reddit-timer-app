import HomePage from '@pages/index';
import { fireEvent, screen } from '@testing-library/react';
import { render } from '@utils/test-utils';
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

test('Github button link to repository and has target attribute set to blank', () => {
  const href = 'https://github.com/chimson/reddit-timer-app';

  render(<HomePage />);

  const btnLink = screen.getByRole('button', { name: /Github/i });

  expect(btnLink).toBeInTheDocument();
  expect(btnLink.parentElement).toHaveAttribute('target', '_blank');
  expect(btnLink.parentElement).toHaveAttribute('rel', 'noreferrer');
  expect(btnLink.parentElement).toHaveAttribute('href', href);
});

test('About section has links to "profy.dev"', () => {
  const profyHref = 'https://profy.dev/project/reddit-timer';

  render(<HomePage />);

  expect(screen.getByRole('link', { name: /^article-link$/i })).toHaveAttribute('target', '_blank');
  expect(screen.getByRole('link', { name: /^article-link$/i })).toHaveAttribute('rel', 'noreferrer');
  expect(screen.getByRole('link', { name: /^article-link$/i })).toHaveAttribute('href', profyHref);
});

// eslint-disable-next-line jest/no-export
export {};
