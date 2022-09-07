import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CartContext, { CartProvider } from './CartContext';
import Header from './Header';

const getTotalItems = () => 420;

describe('Header', () => {
  it('has logo link', () => {
    render(
      <CartProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </CartProvider>
    );

    const logoLink = screen.getByRole('link', {
      name: 'Sweet & Green Creative Salad co.',
    });

    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('has home link', () => {
    render(
      <CartProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </CartProvider>
    );

    const homeLink = screen.getByRole('link', { name: 'Home' });

    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('has menu link', () => {
    render(
      <CartProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </CartProvider>
    );

    const menuLink = screen.getByRole('link', { name: 'Menu' });

    expect(menuLink).toBeInTheDocument();
    expect(menuLink).toHaveAttribute('href', '/menu');
  });

  it('has shopping cart button', () => {
    render(
      <CartProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </CartProvider>
    );

    const shoppingCartButton = screen.getByRole('button', { name: 'My Cart' });

    expect(shoppingCartButton).toBeInTheDocument();
  });

  it('displays correct number of cart items', () => {
    render(
      <CartContext.Provider value={{ getTotalItems }}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </CartContext.Provider>
    );

    expect(screen.getByText('420')).toBeInTheDocument();
  });
});
