import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomerList() {
    const token=localStorage.getItem('access-token')
    const { refetch, data: allusers = [] } = useQuery({
        queryKey: ['allusers'],
        queryFn: async () => {
          const res = await fetch('https://e-commerce-server-hazel.vercel.app/allusers',{
            headers:{
              authorization:`bearer ${token}`
            }
          })
          return res.json()
        },
      })

  

  return (
    <div>
        <div className='text-end mt-8' >
        <Link to='/dashboard/addacustomer'><button className="btn btn-primary">Add a Customer</button></Link>
        </div>
      <div className="overflow-x-auto">
  <table className="table">

    <thead>
      <tr>
        <th>Sl</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
{
    allusers.map((alluser,index)=>{
        return <tr>
        <td>{index+1}</td>
        <td>{alluser.email}</td>
        <td><Link to={`/dashboard/customerdetails/${alluser._id}`}><button className='btn bg-yellow-400'>Details</button></Link></td>
      </tr>
    })
}
      

  
    
    </tbody>
  </table>
</div>
    </div>
  )
}
