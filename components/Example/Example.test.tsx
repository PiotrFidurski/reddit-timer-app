import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Example from './Example';

test('it should render "Hello World"', () => {
  render(<Example />);
  expect(screen.getByText('Hello World')).toBeInTheDocument();
});

test('it should increment count', () => {
  render(<Example />);
  // const incrementButton = screen.getByText(/increment/i);
  const roleButton = screen.getByRole('button', { name: /increment/i });

  fireEvent.click(roleButton);
  expect(screen.getByText(/count/i)).toHaveTextContent('1');
  fireEvent.click(roleButton);
  fireEvent.click(roleButton);
  expect(screen.getByText(/count/i)).toHaveTextContent('3');
});
