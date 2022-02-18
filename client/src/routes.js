// React Routing
import { Navigate, useRoutes } from 'react-router-dom';

// Layout Imports
import DashboardLayout from './layouts/Dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';

// Dashboard Outlet Page Imports
import DashboardMain from './pages/DashboardMain';
import Customers from './pages/Customers';
import Artworks from './pages/Artworks';
import Schedule from './pages/Schedule';
import Classes from './pages/Classes';
import Tasks from './pages/Tasks';
import Finances from './pages/Finances';

// Logo Only Outlet Page Imports
import Login from './pages/Login';

// Other Page Imports
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

    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/login" /> },
        { path: 'login', element: <Login /> },
        // { path: 'register', element: <register /> },
      ]
    },

    { path: '404', element: <NotFound /> },
    { path: '*', element: <Navigate to="/dashboard" replace /> },
  ]);
}