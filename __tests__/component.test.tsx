import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  const mockUseExternalData = (data?: any) => {
    (useExternalData as jest.Mock).mockReturnValue(data ? data : { loading: true, error: null, data: [] });
  };

  beforeEach(() => {
    mockUseExternalData();
  });

  test('renders content when data is available', async () => {
    const testData = [{ id: '1', title: 'Test Title' }];
    mockUseExternalData(testData);
    render(<CoreFunctionalityComponent />);
    
    await waitFor(() => expect(screen.getByText(/test title/i)).toBeInTheDocument());
  });

  test('renders loading state when data is being fetched', () => {
    render(<CoreFunctionalityComponent />);

    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('displays error message when fetching data fails', async () => {
    mockUseExternalData({ loading: false, error: new Error('Failed to fetch'), data: [] });
    render(<CoreFunctionalityComponent />);
    
    await waitFor(() => expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument());
  });

  test('handles user interaction with content', () => {
    const testData = [{ id: '1', title: 'Test Title' }];
    mockUseExternalData(testData);
    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByRole('button', { name: /test title/i }));
    expect(screen.getByText(/content interaction successful/i)).toBeInTheDocument();
  });

  test('ensures accessibility features are implemented correctly', () => {
    const testData = [{ id: '1', title: 'Test Title' }];
    mockUseExternalData(testData);
    render(<CoreFunctionalityComponent />);
    
    const button = screen.getByRole('button', { name: /test title/i });
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label');
  });

  test('mocks external dependencies correctly', () => {
    mockUseExternalData({ loading: false, error: null, data: [{ id: '1', title: 'Test Title' }] });
    
    render(<CoreFunctionalityComponent />);
    
    const useExternalData = require('./ExternalDependency').useExternalData;
    expect(useExternalData).toHaveBeenCalled();
  });

});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  const mockUseExternalData = (data?: any) => {
    (useExternalData as jest.Mock).mockReturnValue(data ? data : { loading: true, error: null, data: [] });
  };

  beforeEach(() => {
    mockUseExternalData();
  });

  test('renders content when data is available', async () => {
    const testData = [{ id: '1', title: 'Test Title' }];
    mockUseExternalData(testData);
    render(<CoreFunctionalityComponent />);
    
    await waitFor(() => expect(screen.getByText(/test title/i)).toBeInTheDocument());
  });

  test('renders loading state when data is being fetched', () => {
    render(<CoreFunctionalityComponent />);

    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('displays error message when fetching data fails', async () => {
    mockUseExternalData({ loading: false, error: new Error('Failed to fetch'), data: [] });
    render(<CoreFunctionalityComponent />);
    
    await waitFor(() => expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument());
  });

  test('handles user interaction with content', () => {
    const testData = [{ id: '1', title: 'Test Title' }];
    mockUseExternalData(testData);
    render(<CoreFunctionalityComponent />);
    
    fireEvent.click(screen.getByRole('button', { name: /test title/i }));
    expect(screen.getByText(/content interaction successful/i)).toBeInTheDocument();
  });

  test('ensures accessibility features are implemented correctly', () => {
    const testData = [{ id: '1', title: 'Test Title' }];
    mockUseExternalData(testData);
    render(<CoreFunctionalityComponent />);
    
    const button = screen.getByRole('button', { name: /test title/i });
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label');
  });

  test('mocks external dependencies correctly', () => {
    mockUseExternalData({ loading: false, error: null, data: [{ id: '1', title: 'Test Title' }] });
    
    render(<CoreFunctionalityComponent />);
    
    const useExternalData = require('./ExternalDependency').useExternalData;
    expect(useExternalData).toHaveBeenCalled();
  });

});