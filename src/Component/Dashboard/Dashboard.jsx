import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-12'>
      <div className=' md:block hidden col-span-2'>
        <div className='h-screen bg-slate-500 pt-28'>
            <h2 className='text-2xl text-center '>Admin</h2>
            <ul className='mt-12 text-center'>
               <Link to='/dashboard/productlist'><li>Product List</li></Link>
               <Link><li>Product List</li></Link>
            
            </ul>
        </div>
      </div>
      <div className=' col-span-10'>
      <div className="navbar bg-primary text-primary-content">
  <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
</div>
<Outlet/>
      </div>
    </div>
  )
}
