import { render, screen } from '@testing-library/react';
import App from './App';

test('renders card components', () => {
  render(<App />);
  
  
  const cards = screen.getAllByTestId('info-card');
  expect(cards.length).toBe(2);
  
  
  expect(screen.getAllByTestId('info-card-title').length).toBe(2);
});