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
import CartContainer from './pages/Cart/CartContainer';
import Products from './pages/Products';
import Details from './components/details/Details';
import UpdateProduct from './pages/UpdateProduct';
import PrivateRoute from './privateRoutes/PrivateRoute';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/brand.json'),
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
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/updateProduct/:id',
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({params}) => fetch (`http://localhost:5000/updateProduct/${params.id}`)
      },
      {
        path: '/cart/:email',
        element: <PrivateRoute><CartContainer></CartContainer></PrivateRoute>,
        loader: ({params}) => fetch (`http://localhost:5000/cart/${params.email}`)
      },
      {
        path: '/products/:brandName',
        element: <Products></Products>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.brandName}`)
      },
      {
        path: '/details/:id',
        element: <Details></Details>,
        loader: ({params}) => fetch (`http://localhost:5000/product/${params.id}`)
      }
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
