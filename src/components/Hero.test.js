import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from './Hero';

describe('Hero', () => {
  it('has correct heading', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        name: 'Wake Up Early, Eat Fresh & Healthy',
      })
    ).toBeInTheDocument();
  });

  it('has correct description', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    expect(
      screen.getByText(
        'Aside from their natural good taste and great crunchy texture alongside wonderful colors and fragrances, eating a salad each day can have significant health benefits! How about something green today?',
        { exact: false }
      )
    ).toBeInTheDocument();
  });

  it('has link to the menu page', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    const shopNowButton = screen.getByRole('link', { name: 'Shop Now' });

    expect(shopNowButton).toBeInTheDocument();
    expect(shopNowButton).toHaveAttribute('href', '/menu');
  });
});
