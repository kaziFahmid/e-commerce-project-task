import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-12'>
      <div className=' md:block hidden col-span-2'>
        <div className='h-screen bg-slate-500 pt-28'>
            <h2 className='text-2xl text-center '>Admin</h2>
            <ul className='mt-12 text-start ms-12'>
               <Link to='/dashboard/productlist'><li>Product List</li></Link>
               <Link to='/dashboard/customerlist'><li className='mt-6'>Customer List</li></Link>
            
            </ul>
        </div>
      </div>
      <div className=' col-span-10'>
      <div className="navbar bg-white shadow-sm text-primary-content">
  <a className="btn btn-ghost normal-case text-xl text-black">Dashboard</a>
  

  <div className="drawer text-right z-50">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content  block md:hidden">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-60 h-full bg-base-200 text-base-content">
     <li> <h2 className='text-2xl text-center mt-28 '>Admin</h2></li>
      <li className='mt-10'><Link to='/dashboard/productlist '>Product List</Link></li>
      <li><Link to='/dashboard/customerlist'>Customer List</Link></li>
      
    </ul>
  </div>
</div>
















</div>
<Outlet/>
      </div>
    </div>
  )
}
