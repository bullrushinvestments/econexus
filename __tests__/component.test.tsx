import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock external dependencies
jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(() => ({ data: [], loading: false, error: null })),
}));

describe('Core Functionality Component Tests', () => {
  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state when fetching data', async () => {
    (useExternalData as jest.Mock).mockImplementation(() => ({ loading: true }));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/loading.../i));
  });

  test('handles error and displays message', async () => {
    const errorMessage = 'Failed to fetch data';
    (useExternalData as jest.Mock).mockImplementation(() => ({ loading: false, error: new Error(errorMessage) }));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/failed to fetch data/i));
  });

  test('user can interact with buttons and see changes', () => {
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(screen.getByText(/button clicked/i)).toBeInTheDocument();
  });

  test('accessibility features are properly implemented', () => {
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label');
    fireEvent.keyDown(button, { key: 'Enter', code: 13 });
    expect(screen.getByText(/button clicked/i)).toBeInTheDocument();
  });

  test('handles edge cases such as empty data sets', () => {
    (useExternalData as jest.Mock).mockImplementation(() => ({ loading: false, error: null, data: [] }));
    render(<CoreFunctionalityComponent />);
    expect(screen.queryByText(/no items available/i)).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock external dependencies
jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(() => ({ data: [], loading: false, error: null })),
}));

describe('Core Functionality Component Tests', () => {
  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('displays loading state when fetching data', async () => {
    (useExternalData as jest.Mock).mockImplementation(() => ({ loading: true }));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/loading.../i));
  });

  test('handles error and displays message', async () => {
    const errorMessage = 'Failed to fetch data';
    (useExternalData as jest.Mock).mockImplementation(() => ({ loading: false, error: new Error(errorMessage) }));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => screen.getByText(/failed to fetch data/i));
  });

  test('user can interact with buttons and see changes', () => {
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(screen.getByText(/button clicked/i)).toBeInTheDocument();
  });

  test('accessibility features are properly implemented', () => {
    render(<CoreFunctionalityComponent />);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label');
    fireEvent.keyDown(button, { key: 'Enter', code: 13 });
    expect(screen.getByText(/button clicked/i)).toBeInTheDocument();
  });

  test('handles edge cases such as empty data sets', () => {
    (useExternalData as jest.Mock).mockImplementation(() => ({ loading: false, error: null, data: [] }));
    render(<CoreFunctionalityComponent />);
    expect(screen.queryByText(/no items available/i)).toBeInTheDocument();
  });
});