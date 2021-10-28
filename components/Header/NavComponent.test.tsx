import Home from '@pages/index';
import { screen } from '@testing-library/react';
import { render } from '@utils/test-utils';
import NavComponent from './NavComponent';

test('it has "About", "How it works", "Search" links', () => {
  render(<NavComponent />);
  const about = screen.getAllByText(/about/i);
  const howItWorks = screen.getAllByText(/how it works/i);
  const search = screen.getAllByText(/search/i);

  about.map((el) => expect(el).toBeInTheDocument());
  howItWorks.map((el) => expect(el).toBeInTheDocument());
  search.map((el) => expect(el).toBeInTheDocument());
});

test('clicking on "about" and "how-it-works" link scrolls to correct sections', () => {
  render(<Home />);

  const aboutLink = screen.getByRole('link', { name: /about/i });

  const howItWorksLink = screen.getByRole('link', { name: /how it works/i });

  const about = screen.getByRole('region', { name: /^about-section$/ });

  const howItWorks = screen.getByRole('region', { name: /^how-it-works-section$/ });

  expect(aboutLink).toHaveAttribute('href', '/#about');
  expect(howItWorksLink).toHaveAttribute('href', '/#how-it-works');

  expect(about).toHaveAttribute('id', 'about');
  expect(howItWorks).toHaveAttribute('id', 'how-it-works');
});
