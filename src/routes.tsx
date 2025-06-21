import { createBrowserRouter } from 'react-router';
import Homepage from './pages/Homepage'; // The main page component
import Layout from './pages/Layout'; // A wrapper component for consistent layout

// Define your application's routes
const router = createBrowserRouter([
  {
    path: '/', // The root path (e.g., your-app.com/)
    element: <Layout />, // The component to render for this path (e.g., header, footer, sidebar)
    children: [
      // Nested routes that will render inside the <Outlet /> of the Layout
      {
        index: true, // This makes Homepage the default child route for '/'
        element: <Homepage />, // The actual content for the homepage
      },
    ],
  },
  // You could add more routes here, e.g.:
  // {
  //   path: '/about',
  //   element: <AboutPage />,
  // },
]);

export default router;
