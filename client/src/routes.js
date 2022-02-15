// React Routing
import { Navigate, useRoutes } from 'react-router-dom';

// Layouts Import
import DashboardLayout from './layouts/Dashboard';

// Outlet Pages Import
import DashboardMain from './pages/DashboardMain';
import ClientsMain from './pages/ClientsMain';
import NotFound from './pages/Page404';

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <DashboardMain /> },
        { path: 'clients', element: <ClientsMain /> },
      ]
    },

    { path: '404', element: <NotFound /> },
    { path: '*', element: <Navigate to="/dashboard" replace /> }

  ]);
}