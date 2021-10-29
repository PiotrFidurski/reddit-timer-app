import { fireEvent, screen } from '@testing-library/react';
import { render } from '@utils/test-utils';
import CollapsedMenu from './CollapsedMenu';

test('it opens when clicking ToggleMenuButton', () => {
  render(<CollapsedMenu />);

  const menu = screen.getByRole('navigation', { hidden: true });

  const openBtn = screen.getByRole('button', { name: /menu-open/i });

  fireEvent.click(openBtn);

  expect(menu).toHaveAttribute('aria-hidden', 'false');

  expect(screen.getByRole('link', { name: /^Search$/ })).toBeInTheDocument();

  const closeBtn = screen.getByRole('button', { name: /menu-close/i });

  fireEvent.click(closeBtn);

  expect(menu).toHaveAttribute('aria-hidden', 'true');
});
