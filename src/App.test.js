import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it("doesn't initially render cart sidebar", () => {
    render(<App />);

    expect(
      screen.queryByRole('heading', { name: 'My Cart' })
    ).not.toBeInTheDocument();
  });

  it('opens cart sidebar when shopping cart button is clicked', () => {
    render(<App />);

    const shoppingCartButton = screen.getByRole('button', { name: 'My Cart' });
    userEvent.click(shoppingCartButton);

    expect(
      screen.getByRole('heading', { name: 'My Cart' })
    ).toBeInTheDocument();
  });

  it('closes cart sidebar when close button is clicked', async () => {
    render(<App />);

    const shoppingCartButton = screen.getByRole('button', { name: 'My Cart' });
    userEvent.click(shoppingCartButton);

    const closeButton = screen.getByRole('button', { name: 'close' });
    userEvent.click(closeButton);

    // This feels hacky :D, find out a better solution
    await act(async () => {
      await new Promise((r) => setTimeout(r, 1000));
    });

    expect(
      screen.queryByRole('heading', { name: 'My Cart' })
    ).not.toBeInTheDocument();
  });
});
