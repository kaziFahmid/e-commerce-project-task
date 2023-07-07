import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function CustomerDetails() {
    const data=useLoaderData()
    console.log(data)
  return (
    <div>
        <div className='mt-20 md:ms-14'>
        <h1 className='md:text-5xl text-3xl'>{data.email}</h1>
        <p className='mt-8'><span className='font-bold text-xl '>Type:</span><span className='text-lg'>{data.role}</span></p>
        <p className='mt-8'><span className='font-bold text-xl '>Phone:</span>{data.phone}</p>
        </div>
    </div>
  )
}
