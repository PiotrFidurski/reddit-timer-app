import { screen } from '@testing-library/react';
import { render } from '@utils/test-utils';
import Home from '../../pages/index';

test('it has "About", "How it works", "Search" links that link to correct sections', () => {
  render(<Home />);

  screen.getAllByRole('link', { name: /^Search$/, hidden: true });

  expect(screen.getAllByRole('link', { name: /^About$/, hidden: true })[0]).toHaveAttribute('href', '/#about');
  expect(screen.getAllByRole('link', { name: /^How it works$/, hidden: true })[0]).toHaveAttribute(
    'href',
    '/#how-it-works'
  );

  expect(screen.getByRole('region', { name: /^about-section$/ })).toHaveAttribute('id', 'about');
  expect(screen.getByRole('region', { name: /^how-it-works-section$/ })).toHaveAttribute('id', 'how-it-works');
});
