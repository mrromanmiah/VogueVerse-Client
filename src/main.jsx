import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './layout/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Login from './userAuthentication/Login';
import Register from './userAuthentication/Register';
import AuthProvider from './providers/AuthProvider';
import AddProduct from './pages/AddProduct';
import Cart from './pages/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/brand.json')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addProduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/cart',
        element: <Cart></Cart>
      }
      // {
      //   path: "/brands/:id",
      //   element: <PrivateRout><Details></Details></PrivateRout>,
      //   loader: () => fetch('/card.json')
      // }

    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
