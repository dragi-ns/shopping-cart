import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import QuantityInput from './QuantityInput';

const value = 1;
const setValue = jest.fn();

describe('QuantityInput', () => {
  beforeEach(() => {
    setValue.mockReset();
  });

  it('cannot go below min value', () => {
    render(<QuantityInput value={value} setValue={setValue} minValue={1} />);

    const quantityInput = screen.getByRole('spinbutton');
    userEvent.clear(quantityInput);
    userEvent.type(quantityInput, '0');

    expect(setValue).not.toHaveBeenCalled();
    expect(screen.getByRole('button', { name: 'decrease' })).toHaveAttribute(
      'disabled'
    );
  });

  it('cannot go above max value', () => {
    render(<QuantityInput value={value} setValue={setValue} maxValue={1} />);

    const quantityInput = screen.getByRole('spinbutton');
    userEvent.clear(quantityInput);
    userEvent.type(quantityInput, '2');

    expect(setValue).not.toHaveBeenCalled();
    expect(screen.getByRole('button', { name: 'increase' })).toHaveAttribute(
      'disabled'
    );
  });

  it('decreases quantity with decrease button', () => {
    render(<QuantityInput value={5} setValue={setValue} />);

    const decreaseButton = screen.getByRole('button', { name: 'decrease' });
    userEvent.click(decreaseButton);

    expect(setValue).toBeCalledWith(4);
  });

  it('increases quantity with increase button', () => {
    render(<QuantityInput value={1} setValue={setValue} />);

    const increaseButton = screen.getByRole('button', { name: 'increase' });
    userEvent.click(increaseButton);

    expect(setValue).toBeCalledWith(2);
  });

  it('allows the user to enter quantity', () => {
    render(<QuantityInput value={value} setValue={setValue} />);

    const quantityInput = screen.getByRole('spinbutton');
    userEvent.clear(quantityInput);
    userEvent.type(quantityInput, '50');

    expect(setValue).toHaveBeenCalledWith(50);
  });
});
