import React from 'react'

import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth'


export default function useAdmin() {


  const{user,loading}=useAuth()


    const{data:isAdmin=[],isLoading:isAdminLoading}= useQuery({
        queryKey: ['admin',user?.email],


        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/allusers/admin/${user?.email}`)
          

          return res.json()
 
        },
      })


  return [isAdmin,isAdminLoading]
}
