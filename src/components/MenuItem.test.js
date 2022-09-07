import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import CartContext, { CartProvider } from './CartContext';
import MenuItem from './MenuItem';

const item = {
  id: 4,
  name: 'Salad 4',
  price: '550',
  image: 'salad-4.png',
};

describe('MenuItem', () => {
  it('has correct image', () => {
    render(
      <CartProvider>
        <MenuItem item={item} />
      </CartProvider>
    );

    const menuItemImg = screen.getByRole('img');
    expect(menuItemImg).toBeInTheDocument();
    expect(menuItemImg).toHaveAttribute('src', '/images/salad-4.png');
    expect(menuItemImg).toHaveAccessibleName('Salad 4');
  });

  it('has correct title', () => {
    render(
      <CartProvider>
        <MenuItem item={item} />
      </CartProvider>
    );

    expect(screen.getByText('Salad 4')).toBeInTheDocument();
  });

  it('has correct price', () => {
    render(
      <CartProvider>
        <MenuItem item={item} />
      </CartProvider>
    );

    expect(screen.getByText('550 RSD')).toBeInTheDocument();
  });

  it('has add to cart button', () => {
    render(
      <CartProvider>
        <MenuItem item={item} />
      </CartProvider>
    );

    expect(
      screen.getByRole('button', { name: 'Add to cart' })
    ).toBeInTheDocument();
  });

  it('calls correct function when add to cart button is clicked', () => {
    const addItem = jest.fn();
    render(
      <CartContext.Provider value={{ addItem }}>
        <MenuItem item={item} />
      </CartContext.Provider>
    );

    const addToCartButton = screen.getByRole('button', { name: 'Add to cart' });
    userEvent.click(addToCartButton);

    expect(addItem).toHaveBeenCalledTimes(1);
    expect(addItem).toHaveBeenCalledWith(item, 1);
  });

  it('resets quantity when add to cart button is clicked', async () => {
    const addItem = jest.fn();
    render(
      <CartContext.Provider value={{ addItem }}>
        <MenuItem item={item} />
      </CartContext.Provider>
    );

    const increaseButton = screen.getByRole('button', { name: 'increase' });
    userEvent.click(increaseButton);
    userEvent.click(increaseButton);
    userEvent.click(increaseButton);

    const addToCartButton = screen.getByRole('button', { name: 'Add to cart' });
    userEvent.click(addToCartButton);

    expect(addItem).toHaveBeenCalledTimes(1);
    expect(addItem).toHaveBeenCalledWith(item, 4);
    expect(screen.getByRole('spinbutton').value).toBe('1');
  });
});
