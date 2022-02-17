// React Routing
import { Navigate, useRoutes } from 'react-router-dom';

// Layouts Import
import DashboardLayout from './layouts/Dashboard';

// Outlet Pages Import
import DashboardMain from './pages/DashboardMain';
import Customers from './pages/Customers';
import Artworks from './pages/Artworks';
import Schedule from './pages/Schedule';

import NotFound from './pages/Page404';

export default function Router() {
  return useRoutes([
     {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard" replace /> },
        { path: '', element: <DashboardMain /> },
        { path: 'customers', element: <Customers /> },
        { path: 'classes', element: <NotFound /> }, // Misssing
        { path: 'schedule', element: <Schedule /> },
        { path: 'tasks', element: <NotFound /> }, // Misssing
        { path: 'company', element: <NotFound /> }, // Misssing
        { path: 'salaries', element: <NotFound /> }, // Misssing
        { path: 'finances', element: <NotFound /> }, // Misssing
        { path: 'artworks', element: <Artworks /> },
      ]
    },

    {
      path: '/',
      element: <NotFound />,
      // element: <AuthLayout />,
      children: [
        { path: 'login', element: <NotFound /> },
        { path: 'register', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
      ]
    },

    { path: '404', element: <NotFound /> },
    { path: '*', element: <Navigate to="/dashboard" replace /> }

  ]);
}