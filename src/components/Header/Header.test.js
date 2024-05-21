// Header.test.js
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import theme from '../../index'; // Theme is imported from the index file

// Mock createRoot function
jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'), // use actual for all properties
  createRoot: () => ({ render: jest.fn(), unmount: jest.fn() }), // replace createRoot with mock function
}));

test('renders without crashing', () => {
  render(
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
  const linkElement = screen.getByText(/Redddit/i);
  expect(linkElement).toBeInTheDocument();
});