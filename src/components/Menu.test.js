import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CartProvider } from './CartContext';
import Menu from './Menu';

jest.mock('./MenuItem', () => ({ item }) => (
  <>
    <div data-testid="item">{item.id}</div>
  </>
));

describe('Menu', () => {
  it('has correct heading', () => {
    render(
      <CartProvider>
        <Menu />
      </CartProvider>
    );

    expect(screen.getByRole('heading', { name: 'Salads' })).toBeInTheDocument();
  });

  it('renders menu items', () => {
    render(
      <CartProvider>
        <Menu />
      </CartProvider>
    );

    const menuItems = screen.queryAllByTestId('item');

    expect(menuItems.length).toBe(10);
    expect(menuItems[0].textContent).toBe('1');
    expect(menuItems[2].textContent).toBe('3');
    expect(menuItems[9].textContent).toBe('10');
  });
});
