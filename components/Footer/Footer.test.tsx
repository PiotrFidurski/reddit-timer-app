import Footer from '@components/Footer/Footer';
import { screen } from '@testing-library/react';
import { render } from '@utils/test-utils';

test('it has a "Github" link that links to github repo', () => {
  render(<Footer />);

  const githubLink = screen.getByRole('link', { name: /github/i });

  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute('target', '_blank');
  expect(githubLink).toHaveAttribute('rel', 'noreferrer');
  expect(githubLink).toHaveAttribute('href', 'https://github.com/chimson/reddit-timer-app');
});

test('it has a "Illustrations by lukaszadam.com" link that links to "https://lukaszadam.com/illustrations"', () => {
  render(<Footer />);

  const illustrationsCreditLink = screen.getByRole('link', { name: /Illustrations by lukaszadam.com/i });

  expect(illustrationsCreditLink).toBeInTheDocument();
  expect(illustrationsCreditLink).toHaveAttribute('target', '_blank');
  expect(illustrationsCreditLink).toHaveAttribute('rel', 'noreferrer');
  expect(illustrationsCreditLink).toHaveAttribute('href', 'https://lukaszadam.com/illustrations');
});

test('it has a "inspired by" link that links to "https://profy.dev"', () => {
  render(<Footer />);

  const profyDevCreditLink = screen.getByRole('link', { name: /inspired by/i });

  expect(profyDevCreditLink).toBeInTheDocument();
  expect(profyDevCreditLink).toHaveAttribute('target', '_blank');
  expect(profyDevCreditLink).toHaveAttribute('rel', 'noreferrer');
  expect(profyDevCreditLink).toHaveAttribute('href', 'https://profy.dev');
});

test('it has a "pushshift api" link that links to "https://pushshift.io"', () => {
  render(<Footer />);

  const pushshiftApiLink = screen.getByRole('link', { name: /pushshift/i });

  expect(pushshiftApiLink).toBeInTheDocument();
  expect(pushshiftApiLink).toHaveAttribute('target', '_blank');
  expect(pushshiftApiLink).toHaveAttribute('rel', 'noreferrer');
  expect(pushshiftApiLink).toHaveAttribute('href', 'https://pushshift.io');
});
