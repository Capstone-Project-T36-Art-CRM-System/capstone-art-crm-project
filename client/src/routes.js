// React Routing
import { Navigate, useRoutes } from 'react-router-dom';

// Layouts Import
import DashboardLayout from './layouts/Dashboard';

// Outlet Pages Import
import DashboardMain from './pages/DashboardMain';
import Customers from './pages/Customers';
import Artworks from './pages/Artworks';
import Schedule from './pages/Schedule';
import Classes from './pages/Classes';
import Tasks from './pages/Tasks';
import Finances from './pages/Finances';

import NotFound from './pages/Page404';

export default function Router() {
  return useRoutes([
     {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <DashboardMain /> },
        { path: 'customers', element: <Customers /> },
        { path: 'classes', element: <Classes /> }, 
        { path: 'schedule', element: <Schedule /> },
        { path: 'tasks', element: <Tasks /> }, 
        { path: 'company', element: <NotFound /> }, // Misssing
        { path: 'salaries', element: <NotFound /> }, // Misssing
        { path: 'finances', element: <Finances /> }, 
        { path: 'artworks', element: <Artworks /> },
      ]
    },

    // {
    //   path: '/',
    //   // element: <AuthLayout />,
    //   children: [
    //     { path: '/', element: <Navigate to="/login" /> },
    //     { path: 'login', element: <NotFound /> },
    //     { path: 'register', element: <NotFound /> },
    //   ]
    // },

    { path: '404', element: <NotFound /> },
    { path: '*', element: <Navigate to="/dashboard" replace /> },
    { path: '/', element: <Navigate to="/dashboard" /> },
  ]);
}