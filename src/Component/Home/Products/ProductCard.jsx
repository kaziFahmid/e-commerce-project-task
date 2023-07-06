import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({image,title,price,description,_id}) {
  return (
    <div className="card mt-12   bg-base-100 shadow-xl">
    <figure><img src={image}  className='img-fluid h-56'alt="Shoes" /></figure>
    <div className="card-body">
  
  
      <h2 className="card-title ">{title}</h2>
      <p>Price : {price}</p>
      <div className="card-actions justify-center mt-4">
       <Link to={`/productdetails/${_id}`}> <button className="btn btn-primary">View Details</button></Link>
      
      </div>
    </div>
  </div>
  )
}
