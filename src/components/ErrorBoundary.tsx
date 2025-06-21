import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'; // Library for error boundaries
import styled from '@emotion/styled';

// Styled component for the error message display
const ErrorContainer = styled.div`
  padding: 20px;
  margin: 20px auto;
  border: 1px solid red;
  border-radius: 8px;
  background-color: #ffebeb;
  color: #d8000c;
  text-align: center;
`;

const ErrorButton = styled.button`
  background-color: #d8000c;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;

  &:hover {
    background-color: #a30009;
  }
`;

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  // This function is called when an error is caught
  const handleError = (error: Error, info: React.ErrorInfo) => {
    // You can send this error to an error logging service (e.g., Sentry)
    console.error('Error caught by ErrorBoundary:', error, info);
  };

  // This function defines the UI to render when an error occurs
  const fallbackRender = ({
    resetErrorBoundary, // Function to reset the error boundary (try again)
  }: {
    resetErrorBoundary: () => void;
  }) => (
    <ErrorContainer>
      <h2>Oops! Something went wrong.</h2>
      <p>Please try refreshing the page or searching again.</p>
      <ErrorButton onClick={resetErrorBoundary}>Try Again</ErrorButton>
    </ErrorContainer>
  );

  return (
    <ReactErrorBoundary
      FallbackComponent={fallbackRender} // Component to show on error
      onError={handleError} // Function to call when an error is caught
    >
      {children} {/* The components that this ErrorBoundary protects */}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
