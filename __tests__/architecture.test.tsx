import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitectureComponent from './DesignArchitectureComponent';

// Mock API and other dependencies
jest.mock('./api', () => ({
  fetchDesignData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders loading state when data is being fetched', async () => {
    (fetchDesignData as jest.Mock).mockResolvedValueOnce({} as any);
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays error message if fetching data fails', async () => {
    (fetchDesignData as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));
    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument());
  });

  test('renders design elements correctly when data is fetched successfully', async () => {
    const mockData = { /* Provide sample data structure */ };
    (fetchDesignData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(screen.getByText(/design element/i)).toBeInTheDocument());
  });

  test('handles user interactions such as clicking on a design item', async () => {
    const mockData = { /* Provide sample data structure */ };
    (fetchDesignData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitectureComponent />);
    fireEvent.click(screen.getByText(/clickable element/i));
    await waitFor(() => expect(fetchDesignData).toHaveBeenCalled());
  });

  test('ensures component is accessible', () => {
    const mockData = { /* Provide sample data structure */ };
    (fetchDesignData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitectureComponent />);
    // Check for accessibility issues
    expect(screen.getByRole('button')).toHaveAttribute('aria-label');
  });

  test('handles edge cases such as empty data', async () => {
    const mockData = {};
    (fetchDesignData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(screen.getByText(/no data available/i)).toBeInTheDocument());
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitectureComponent from './DesignArchitectureComponent';

// Mock API and other dependencies
jest.mock('./api', () => ({
  fetchDesignData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders loading state when data is being fetched', async () => {
    (fetchDesignData as jest.Mock).mockResolvedValueOnce({} as any);
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays error message if fetching data fails', async () => {
    (fetchDesignData as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));
    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument());
  });

  test('renders design elements correctly when data is fetched successfully', async () => {
    const mockData = { /* Provide sample data structure */ };
    (fetchDesignData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(screen.getByText(/design element/i)).toBeInTheDocument());
  });

  test('handles user interactions such as clicking on a design item', async () => {
    const mockData = { /* Provide sample data structure */ };
    (fetchDesignData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitectureComponent />);
    fireEvent.click(screen.getByText(/clickable element/i));
    await waitFor(() => expect(fetchDesignData).toHaveBeenCalled());
  });

  test('ensures component is accessible', () => {
    const mockData = { /* Provide sample data structure */ };
    (fetchDesignData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitectureComponent />);
    // Check for accessibility issues
    expect(screen.getByRole('button')).toHaveAttribute('aria-label');
  });

  test('handles edge cases such as empty data', async () => {
    const mockData = {};
    (fetchDesignData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(screen.getByText(/no data available/i)).toBeInTheDocument());
  });
});