import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders class-clock component', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId(/class-clock/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders hook-clock component', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId(/hook-clock/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders fullscreen button', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId(/fullscreen-button/i);
  expect(linkElement).toBeInTheDocument();
});