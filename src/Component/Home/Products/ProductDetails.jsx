import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function ProductDetails() {
    const data=useLoaderData()
    
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 '>
<div >
   <img src={data.image} className=' mx-auto h-3/5 md:ms-7 md:mt-20'/>
</div>

<div>
  <div className='md:mt-28' >
  <h1 className='text-3xl mt-6'>{data.title}</h1>

  </div>
  <div className='mt-8'>
    <p>{data.description}</p>
  </div>
  <h3 className='text-xl mt-5'>Price : <span>{data.price}</span></h3>

</div>

    </div>
  )
}
