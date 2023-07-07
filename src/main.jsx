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

axios.defaults.baseURL=`https://e-commerce-server-hazel.vercel.app/`
axios.interceptors.request.use((req)=>{return req})
axios.interceptors.response.use((res)=>{return res.data})
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AddProduct from './Component/Home/Products/AddProduct';
import Carts from './Component/Home/Products/Carts';
import CustomerList from './Component/CustomerList/CustomerList';
import CustomerDetails from './Component/CustomerList/CustomerDetails';
import AddaCustomer from './Component/CustomerList/AddaCustomer';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/carts",
        element:<Carts/>
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
    loader: ({params})=>fetch(`https://e-commerce-server-hazel.vercel.app/products/${params.id}`)
  },
  {
    path:"/dashboard",
    element:<Dashboard/>,
    children:[
      {
        path:"/dashboard/productlist",
        element:<ProductList/>,
      },
      {
        path:"/dashboard/addproduct",
        element:<AddProduct/>
      },
      {
        path:"/dashboard/customerlist",
        element:<CustomerList/>
      },
      {
        path:"/dashboard/addacustomer",
        element:<AddaCustomer/>
      },
      {
        path:"/dashboard/customerdetails/:id",
        element:<CustomerDetails/>,
        loader:({params})=> fetch(`https://e-commerce-server-hazel.vercel.app/allusers/${params.id}`)

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
