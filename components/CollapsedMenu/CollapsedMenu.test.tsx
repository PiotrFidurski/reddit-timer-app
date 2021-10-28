import { fireEvent, screen } from '@testing-library/react';
import { render } from '@utils/test-utils';
import CollapsedMenu from './CollapsedMenu';

test('it opens when clicking ToggleMenuButton', () => {
  render(<CollapsedMenu />);

  const toggleBtn = screen.getByRole('button', { name: /menu-open/i });
  const menu = screen.getByRole('navigation', { name: /collapsable-menu/i });

  expect(menu).toHaveAttribute('aria-hidden', 'false');

  fireEvent.click(toggleBtn);
  expect(menu).toHaveAttribute('aria-hidden', 'true');
});
