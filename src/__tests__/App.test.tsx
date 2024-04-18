import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  test('renders the component', () => {
    render(<App />);
    const element = screen.getByText(/Technical Assignment/i);
    expect(element).toBeDefined();
  });
});
