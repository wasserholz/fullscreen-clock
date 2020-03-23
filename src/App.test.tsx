import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders clock component', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId(/clock/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders fullscreen button', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId(/fullscreen-button/i);
  expect(linkElement).toBeInTheDocument();
});