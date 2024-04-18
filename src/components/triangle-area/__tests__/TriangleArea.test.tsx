import { render, fireEvent,screen } from '@testing-library/react';
import TriangleArea from "../TriangleArea"

describe('TriangleArea', () => {
  test('renders the component', () => {
    render(<TriangleArea />);    
    // Check if the component renders the input fields, button, and result paragraph
    expect(screen.getByText('Area of Triangle')).toBeDefined();
  });

  test('calculates the area correctly', () => {
    render(<TriangleArea />);
    const { getByLabelText, findByText } = screen;
    const widthInput = getByLabelText('Width');
    const heightInput = getByLabelText('Height');    

    // Enter values for width and height
    fireEvent.change(widthInput, { target: { value: '5' } });
    fireEvent.change(heightInput, { target: { value: '4' } });
    
    // Check if the correct area is displayed
    expect(findByText('The area of the triangle is: 10')).toBeDefined();
  });

  test('does not calculate the area if width or height is not a number', () => {
    render(<TriangleArea />);
    const { getByLabelText, queryByText } = screen;
    const widthInput = getByLabelText('Width');
    const heightInput = getByLabelText('Height');    

    // Enter invalid values for width and height
    fireEvent.change(widthInput, { target: { value: 'abc' } });
    fireEvent.change(heightInput, { target: { value: 'def' } });

    // Check if the area is not displayed
    expect(queryByText('The area of the triangle is:')).toBeNull()
  });
});
