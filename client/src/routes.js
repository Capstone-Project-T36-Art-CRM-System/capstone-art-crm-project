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

import EventList from './pages/_dashboard/EventList';
import EventDetails from './pages/_dashboard/EventDetails';

import ArtworkList from './pages/_dashboard/ArtworkList';
import ArtworkDetails from './pages/_dashboard/ArtworkDetails';
import ArtworkCreate from './pages/_dashboard/ArtworkCreate';

import Calendar from './pages/_dashboard/Calendar';

import Company from './pages/_dashboard/Company';

// Logo Only Outlet Page Imports
import Login from './pages/Login';

// Other Page Imports
import NotFound from './pages/Page404';
import PrivateRoute from './components/PrivateRoute';


export default function Router() {
  return useRoutes([
     {
      path: '/dashboard',
      element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
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
        {
          path: 'artwork',
          children: [
            { element: <Navigate to="/dashboard/artwork/list" replace />, index: true },
            { path: 'list', element: <ArtworkList /> },
            { path: ':artworkId', element: <ArtworkDetails /> },
            { path: 'new', element: <ArtworkCreate /> },
            { path: ':artworkId/edit', element: <ArtworkCreate /> },
          ],
        },
        {
          path: 'event',
          children: [
            { element: <Navigate to="/dashboard/event/list" replace />, index: true },
            { path: 'list', element: <EventList /> },
            { path: ':eventId', element: <EventDetails /> },
          ],
        },
        { path: 'calendar', element: <Calendar /> },
        { path: 'company', element: <Company /> },
        // { path: 'tasks', element: <Tasks /> }, 
        // { path: 'artworks', element: <Artworks /> },
      ]
    },

    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/login" /> },
        { path: 'login', element: <Login /> },
      ]
    },

    { path: '404', element: <NotFound /> },
    { path: '*', element: <Navigate to="/dashboard" replace /> },
  ]);
}