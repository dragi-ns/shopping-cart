import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import CartContext, { CartProvider } from './CartContext';
import CartItem from './CartItem';

const cartItem = {
  id: 1,
  name: 'Salad 1',
  price: '450',
  image: 'salad-1.png',
  quantity: 49,
};

describe('CartItem', () => {
  it('renders cart item image', () => {
    render(
      <CartProvider>
        <CartItem item={cartItem} />
      </CartProvider>
    );

    const img = screen.getByAltText('Salad 1');

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/images/salad-1.png');
  });

  it('renders cart item name', () => {
    render(
      <CartProvider>
        <CartItem item={cartItem} />
      </CartProvider>
    );

    expect(screen.getByText('Salad 1')).toBeInTheDocument();
  });

  it('renders cart item price', () => {
    render(
      <CartProvider>
        <CartItem item={cartItem} />
      </CartProvider>
    );

    expect(screen.getByText('450 RSD')).toBeInTheDocument();
  });

  it('renders cart item total price', () => {
    render(
      <CartProvider>
        <CartItem item={cartItem} />
      </CartProvider>
    );

    expect(screen.getByText('22.050 RSD')).toBeInTheDocument();
  });

  it('renders cart item quantity', () => {
    render(
      <CartProvider>
        <CartItem item={cartItem} />
      </CartProvider>
    );

    expect(screen.getByRole('spinbutton').value).toBe('49');
  });

  it('renders cart item remove button', () => {
    render(
      <CartProvider>
        <CartItem item={cartItem} />
      </CartProvider>
    );

    expect(screen.getByRole('button', { name: 'remove' })).toBeInTheDocument();
  });

  it('correctly calls function when quantity is changed', () => {
    const updateItem = jest.fn();
    const removeItem = jest.fn();

    render(
      <CartContext.Provider value={{ updateItem, removeItem }}>
        <CartItem item={cartItem} />
      </CartContext.Provider>
    );

    const quantityInput = screen.getByRole('spinbutton');
    userEvent.clear(quantityInput);
    userEvent.type(quantityInput, '50');

    expect(updateItem).toHaveBeenCalledTimes(2); // two times because we called userEvent.clear
    expect(updateItem).toHaveBeenLastCalledWith(1, 50);
  });

  it('correctly calls function when remove button is clicked', () => {
    const updateItem = jest.fn();
    const removeItem = jest.fn();

    render(
      <CartContext.Provider value={{ updateItem, removeItem }}>
        <CartItem item={cartItem} />
      </CartContext.Provider>
    );

    const removeButton = screen.getByRole('button', { name: 'remove' });
    userEvent.click(removeButton);

    expect(removeItem).toHaveBeenCalledTimes(1);
    expect(removeItem).toHaveBeenCalledWith(1);
  });
});
