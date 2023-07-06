import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/Main/Main';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
import ProductDetails from './Component/Home/Products/ProductDetails';
import axios from 'axios';
import AuthProvider from './Component/AuthProvider/AuthProvider';
import Dashboard from './Component/Dashboard/Dashboard';
import ProductList from './Component/Home/Products/ProductList';

axios.defaults.baseURL=`http://localhost:5000/`
axios.interceptors.request.use((req)=>{return req})
axios.interceptors.response.use((res)=>{return res.data})
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main/>,
    children:[
      {
        path:"/",
        element:<Home/>
      }
    ]

  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/productdetails/:id",
    element:<ProductDetails/>,
    loader: ({params})=>fetch(`https://fakestoreapi.com/products/${params.id}`)
  },
  {
    path:"/dashboard",
    element:<Dashboard/>,
    children:[
      {
        path:"/dashboard/productlist",
        element:<ProductList/>,
      }
    ]
 
    
  },


]);
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
