import { render, screen } from '@testing-library/react';
import App from './App';

test('render text of max value', () => {
  render(<App />);
  const maxValueText = screen.getByText(/Максимальний елемент матриці 10х10/i);
  expect(maxValueText).toBeInTheDocument();
})

