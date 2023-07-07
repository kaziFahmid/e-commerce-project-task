import React from 'react'
import Products from './Products/Products'
import Banner from './Banner/Banner'

export default function Home() {
  return (
    <div>
      <Banner/>

      <h2 className='text-4xl text-center mt-20'>Best <span className='text-blue-500'>Product</span></h2>
     <Products/>
    </div>
  )
}
