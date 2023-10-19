import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Authprovider from './SharedComponents/Authprovider';
import Addproducts from './Pages/Addproducts';
import Products from './Pages/Products';
import Login from './Pages/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/products",
        element: <Products></Products>,
        loader: ()=> fetch('http://localhost:5000/products')
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      },
      {
        path: "/addproducts",
        element: <Addproducts></Addproducts>
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
    <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,
)
