import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

describe('Footer', () => {
  it('has correct github repo link', () => {
    render(<Footer />);

    const githubLink = screen.getByRole('link', { name: 'dragi-ns' });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/dragi-ns/shopping-cart'
    );
  });
});
