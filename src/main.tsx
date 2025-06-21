import React from 'react';
import ReactDom from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router';
import router from './routes'; // Your defined routes
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; // For debugging data fetches
import './index.css'; // Global styles

// Create a client for React Query. This manages data fetching, caching, and more.
const queryClient = new QueryClient();

// Render your React application into the 'root' element in index.html
ReactDom.createRoot(document.getElementById('root') as HTMLElement).render(
  // StrictMode helps in identifying potential problems in an application
  <React.StrictMode>
    {/* QueryClientProvider makes the queryClient available to all components */}
    <QueryClientProvider client={queryClient}>
      {/* RouterProvider manages navigation based on your defined routes */}
      <RouterProvider router={router} />
      {/* ReactQueryDevtools is a powerful debugging tool for React Query */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
