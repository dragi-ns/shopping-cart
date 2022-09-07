import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Price from './Price';

describe('Price', () => {
  it('renders price correctly', () => {
    render(<Price price={50000} />);

    expect(screen.getByText('50.000 RSD')).toBeInTheDocument();
  });

  it('renders price based on given locale and options', () => {
    render(
      <Price
        locale="en"
        options={{ style: 'currency', currency: 'USD' }}
        price={50000}
      />
    );

    expect(screen.getByText('$50,000.00')).toBeInTheDocument();
  });
});
