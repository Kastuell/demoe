import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './App';
import './index.css';
import Layout from './Layout';
import AdminPanel from './pages/AdminPanel';
import CreateOrder from './pages/CreateOrder';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Registration from './pages/Registration';


const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home />),
  },
  {
    path: "/login",
    element: (<Login />),
  },
  {
    path: "/registration",
    element: (<Registration />),
  },
  {
    path: "/orders",
    element: (<Orders />),
  },
  {
    path: "/create_order",
    element: (<CreateOrder />),
  },
  {
    path: "/admin_panel",
    element: (<AdminPanel />),
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Layout>
    <RouterProvider router={router} />
  </Layout>
);

