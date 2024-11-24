import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const handleError = (error: Error, info: React.ErrorInfo) => {
    // Log error and information about where it occurred
    console.error('Error caught by ErrorBoundary:', error, info);
  };

  const fallbackRender = ({
    resetErrorBoundary,
  }: {
    resetErrorBoundary: () => void;
  }) => (
    <div>
      <h2>Something went wrong.</h2>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  );

  return (
    <ReactErrorBoundary
      FallbackComponent={fallbackRender}
      onError={handleError}
    >
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
