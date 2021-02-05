import { render, screen } from '@testing-library/react';
import App from './App';

test('render text of max value', () => {
  render(<App />);
  const maxValueText = screen.getByText(/Максимальний елемент/i);
  expect(maxValueText).toBeInTheDocument();
})

test('render text full name', () => {
  render(<App />);
  const fullName = screen.getByText(/Шаповал М.С./i);
  expect(fullName).toBeInTheDocument();
})
