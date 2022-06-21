import { render, screen } from '@testing-library/react';
import App from './App';

test('render click', () => {
  render(<button />);
  const linkElement = screen.getByText(/click me here/i);
  expect(linkElement).toBeInTheDocument();
});
