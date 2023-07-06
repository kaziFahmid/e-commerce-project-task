import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function ProductList() {
  const { refetch, data: products = [] } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetch('https://fakestoreapi.com/products')
      return res.json()
    },
  })
 

  return (
    <>
    
    <div className='text-end'>
        <button className='btn bg-emerald-400 mt-5' onClick={handleAddProduct}>Add Product</button>
    </div>
    <div className="overflow-x-auto h-96 mt-16">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>Sl</th>
          <th>Image</th>
          <th>Title</th>
          <th>Category</th>
        
        </tr>
      </thead>
      <tbody>
    {products.map((product,index)=>{return  <tr>
        <td>{index+1}</td>
          <td><div className="avatar">
  <div className="w-14 rounded-full">
    <img src={product.image}/>
  </div>
</div></td>
          <td>{product.title}</td>
          <td>{product.category} </td>
        </tr>})}
       

      </tbody>
    </table>
  </div>
    
    
    
    
    
    
    </>
  )
}
