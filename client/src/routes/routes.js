import { Navigate, useRoutes } from 'react-router-dom';

// layouts
import DashboardLayout from '../layouts/Dashboard';

// pages
// import DashboardApp from './pages/DashboardApp';
import NotFound from './pages/Page404';

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      // children: [
      //   { element: <Navigate to="/dashboard/app" replace /> },
      //   // { path: 'app', element: <DashboardApp /> },
      // ]
    },
    { path: '404', element: <NotFound /> },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}