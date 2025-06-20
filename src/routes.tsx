import { createBrowserRouter } from 'react-router';
import Homepage from './pages/Homepage';
import Layout from './pages/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <Homepage /> }],
  },
]);

export default router;
