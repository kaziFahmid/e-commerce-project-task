

import React from 'react'
import { Link } from 'react-router-dom'
import useProducts from '../../../hooks/useProducts'

export default function ProductList() {
    const[refetch,products]=useProducts()

 

  return (
    <>
    
    <div className='text-end'>

        <Link to='/dashboard/addproduct'><button className='btn bg-emerald-400 mt-5' >Add Product</button></Link>
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
          <th>Details</th>
        
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
          <td><Link to={`/productdetails/${product._id}`}><button className='bg-red-500 btn'>Details</button></Link></td>
        </tr>})}
       

      </tbody>
    </table>
  </div>
    
    
    
    
    
    
    </>
  )
}
