import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { CartProvider } from './CartContext';
import CartSidebar from './CartSidebar';

jest.mock('./CartItem', () => ({ item }, ref) => {
  return (
    <div ref={ref}>
      <div data-testid="item">{item.id}</div>
    </div>
  );
});

const items = [
  {
    id: 1,
    name: 'Salad 1',
    price: '450',
    image: 'salad-1.png',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Salad 2',
    price: '530',
    image: 'salad-2.png',
    quantity: 5,
  },
  {
    id: 3,
    name: 'Salad 3',
    price: '590',
    image: 'salad-3.png',
    quantity: 42,
  },
];

describe('CartSidebar', () => {
  it('renders heading', () => {
    render(
      <CartProvider>
        <CartSidebar />
      </CartProvider>
    );

    expect(
      screen.getByRole('heading', { name: 'My Cart' })
    ).toBeInTheDocument();
  });

  it('renders close button', () => {
    render(
      <CartProvider>
        <CartSidebar />
      </CartProvider>
    );

    expect(screen.getByRole('button', { name: 'close' })).toBeInTheDocument();
  });

  it('correclty calls function when close button is clicked', () => {
    const toggleCartSidebar = jest.fn();

    render(
      <CartProvider>
        <CartSidebar toggleCartSidebar={toggleCartSidebar} />
      </CartProvider>
    );

    const closeButton = screen.getByRole('button', { name: 'close' });
    userEvent.click(closeButton);

    expect(toggleCartSidebar).toHaveBeenCalledTimes(1);
  });

  it('renders cart items', () => {
    render(
      <CartProvider initialItems={items}>
        <CartSidebar />
      </CartProvider>
    );

    const cartItems = screen.getAllByTestId('item');

    expect(cartItems.length).toBe(3);
    expect(cartItems[0].textContent).toBe('1');
    expect(cartItems[1].textContent).toBe('2');
    expect(cartItems[2].textContent).toBe('3');
  });

  it('renders empty message when there is no items', () => {
    render(
      <CartProvider>
        <CartSidebar />
      </CartProvider>
    );

    expect(screen.getByText('Your cart is empty!')).toBeInTheDocument();
  });

  it('renders subtotal', () => {
    const { container } = render(
      <CartProvider initialItems={items}>
        <CartSidebar />
      </CartProvider>
    );

    expect(container).toHaveTextContent(/Subtotal:\s*27.880 RSD/);
  });

  it('renders delivery', () => {
    const { container } = render(
      <CartProvider initialItems={items}>
        <CartSidebar />
      </CartProvider>
    );

    expect(container).toHaveTextContent(/Delivery:\s*Free/);
  });

  it('renders total', () => {
    const { container } = render(
      <CartProvider initialItems={items}>
        <CartSidebar />
      </CartProvider>
    );

    expect(container).toHaveTextContent(/Total:\s*27.880 RSD/);
  });

  it('renders checkout button', () => {
    render(
      <CartProvider>
        <CartSidebar />
      </CartProvider>
    );

    expect(
      screen.getByRole('button', { name: 'Checkout' })
    ).toBeInTheDocument();
  });
});
