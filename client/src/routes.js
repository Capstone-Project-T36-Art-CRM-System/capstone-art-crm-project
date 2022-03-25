// React Routing
import { Navigate, useRoutes } from 'react-router-dom';

// Layout Imports
import DashboardLayout from './layouts/Dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';

// Dashboard Outlet Page Imports
import DashboardMain from './pages/_dashboard/Main';
import CustomerList from './pages/_dashboard/CustomerList';
import CustomerAccount from './pages/_dashboard/CustomerAccount';
import CustomerCreate from './pages/_dashboard/CustomerCreate';

import Calendar from './pages/_dashboard/Calendar';

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
        {
          path: 'customer',
          children: [
            { element: <Navigate to="/dashboard/customer/list" replace />, index: true },
            { path: 'list', element: <CustomerList /> },
            { path: ':customerId', element: <CustomerAccount /> },
            { path: 'new', element: <CustomerCreate /> },
            { path: ':customerId/edit', element: <CustomerCreate /> },
          ],
        },
        // { path: 'customers/:customerId', element: <CustomerInfo /> },
        // { path: 'classes', element: <Classes /> }, 
        { path: 'calendar', element: <Calendar /> },
        // { path: 'tasks', element: <Tasks /> }, 
        // { path: 'company', element: <NotFound /> }, // Misssing
        // { path: 'salaries', element: <NotFound /> }, // Misssing
        // { path: 'finances', element: <Finances /> }, 
        // { path: 'artworks', element: <Artworks /> },
      ]
    },

    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/login" /> },
        { path: 'login', element: <Login /> },
        // { path: 'register', element: <Register /> },
      ]
    },

    { path: '404', element: <NotFound /> },
    { path: '*', element: <Navigate to="/dashboard" replace /> },
  ]);
}