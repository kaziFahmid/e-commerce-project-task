import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'



export default function PrivateRoute({children}) {
const{user,loading}=useContext(AuthContext)

let location = useLocation();
if(loading){
    return <h1>.....Loading</h1>
}
if(user){
    return children
}
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}
