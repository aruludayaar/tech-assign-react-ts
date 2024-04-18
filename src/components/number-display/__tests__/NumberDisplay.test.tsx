
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, test, expect } from '@jest/globals';

import NumberDisplay from '../NumberDisplay';

describe('NumberDisplay', () => {
  test('renders the component', () => {
    render(<NumberDisplay />);
    const {  getByLabelText } = screen;

    // Check if the component renders the input field and button
    expect(getByLabelText('Number')).toBeDefined();    
  });

  test('displays numbers correctly', () => {
    render(<NumberDisplay />);
    const { getByLabelText, getByText } = screen;
    const numberInput = getByLabelText('Number');

    // Enter a number
    fireEvent.change(numberInput, { target: { value: '5' } });

    // Check if the numbers are displayed correctly
    expect(getByText('1')).toBeDefined();
    expect(getByText('2')).toBeDefined();
    expect(getByText('3')).toBeDefined();
    expect(getByText('4')).toBeDefined();
    expect(getByText('5')).toBeDefined();
  });

  test('does not display numbers value is cleared or no value is provided', () => {
    render(<NumberDisplay />);
    const { getByLabelText, queryByText } = screen;
    const numberInput = getByLabelText('Number');

    // Enter an invalid value
    fireEvent.change(numberInput, { target: { value: '' } });

    // Check if the numbers are not displayed
    expect(queryByText('1')).toBeNull();
    expect(queryByText('2')).toBeNull();    
  });

  test('does not display numbers if input is negative', () => {
    render(<NumberDisplay />);
    const { getByLabelText, queryByText } = screen;
    const numberInput = getByLabelText('Number');

    // Enter a negative number
    fireEvent.change(numberInput, { target: { value: '-5' } });

    // Check if the numbers are not displayed
    expect(queryByText('1')).toBeNull();
    expect(queryByText('2')).toBeNull();    
  });
});
