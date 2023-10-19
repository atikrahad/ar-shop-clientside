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
        path: "/signup",
        element: <Signup></Signup>
      },
      {
        path: "/addproducts",
        element: <Addproducts></Addproducts>
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
