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
import Privateroute from './SharedComponents/Privateroute';
import Brandallproducts from './Pages/Brandallproducts';

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
        element: <Privateroute><Products></Products></Privateroute>,
        loader: ()=> fetch('http://localhost:5000/products')
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      },
      {
        path: "/addproducts",
        element: <Privateroute><Addproducts></Addproducts></Privateroute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/products/:brand",
        element: <Brandallproducts></Brandallproducts>,
        loader: ({params})=> fetch(`http://localhost:5000/products/${params.brand}`)
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
