import Home from '@pages/index';
import { render, screen } from '@testing-library/react';
import NavComponent from './NavComponent';

test('it has "About", "How it works", "Search" links', () => {
  render(<NavComponent />);

  const about = screen.getByText(/about/i);
  const howItWorks = screen.getByText(/how it works/i);
  const search = screen.getByText(/search/i);

  expect(about).toBeInTheDocument();
  expect(howItWorks).toBeInTheDocument();
  expect(search).toBeInTheDocument();
});

test('clicking on "about" and "how-it-works" link scrolls to correct sections', () => {
  render(<Home />);

  const aboutLink = screen.getByRole('link', { name: /about/i });
  const howItWorksLink = screen.getByRole('link', { name: /how it works/i });

  const about = screen.getByText(/about section/i);
  const howItWorks = screen.getByText(/How it works section/i);

  expect(aboutLink).toHaveAttribute('href', '/#about');
  expect(howItWorksLink).toHaveAttribute('href', '/#how-it-works');

  expect(about).toHaveAttribute('id', 'about');
  expect(howItWorks).toHaveAttribute('id', 'how-it-works');
});
