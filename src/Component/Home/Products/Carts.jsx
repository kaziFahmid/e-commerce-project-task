import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function Carts() {

  const { refetch, data: carts = [] } = useQuery({
        queryKey: ['carts'],
        queryFn: async () => {
          const res = await fetch('http://localhost:5000/carts')
          return res.json()
        },
      })

      let handleDelete=(id)=>{
        axios.delete(`/carts/${id}`)
        .then(res=>{if(res.deletedCount>0){
            refetch()
        }})
      }
  return (
    <div>
      


      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Sl</th>
        <th>Image</th>
        <th>Name</th>

        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {carts.map((cart,index)=>{return <tr key={cart._id}>
 <td>{index+1}</td>
   <td><div className="avatar">
  <div className="w-24 rounded">
    <img src={cart.image} />
  </div>
</div></td>
   <td>{cart.title}</td>

   <td><button className='bg-red-600 btn text-white'onClick={()=> handleDelete(cart._id)}>Delete</button></td>
 </tr>})
 
      }
     
    
    </tbody>
  </table>
</div>













    </div>
  )
}
