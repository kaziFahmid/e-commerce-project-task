import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useAdmin from '../../hooks/useAdmin'

export default function Header() {
    const{user,logOut}=useAuth()
    const [isAdmin,isAdminLoading]=useAdmin()
  return (
<div className="navbar  shadow-md bg-white text-neutral-content flex justify-between items-center">
  <div>
  <a className="btn btn-ghost normal-case text-xl ms-20 text-blue-500">E-Commerce</a>
  </div>
  <div>


  <div className="drawer drawer-end text-right md:hidden block z-50">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open Menu</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
    <ul className="menu p-4 w-64  h-full bg-base-200 text-base-content">
    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Close</label>
    <Link><li className='hover:text-blue-500 duration-300 mt-32 btn btn-ghost normal-case text-xl text-slate-700'>Home</li></Link>
   
   
    {user?.email?  <Link to='/carts'><li className='hover:text-blue-500 duration-300 btn btn-ghost normal-case text-xl text-slate-700'>Cart</li></Link>:''}
{isAdmin.admin&&  <Link to='/dashboard'>
    
    <li className='hover:text-blue-500 duration-300 btn btn-ghost normal-case text-xl text-slate-700'>Dashboard</li></Link>}
  {user?.email? <li className='text-slate-700 hover:text-blue-500 duration-300 btn btn-ghost normal-case text-xl mt-14' onClick={()=>logOut()}>Logout</li> :<Link to='/login'> <li className='text-slate-700 hover:text-blue-500 duration-300 btn btn-ghost normal-case text-xl'>Login</li></Link>}
{!user?.email&&
  <Link to='/signup'>  <li className='text-slate-700 hover:text-blue-500 duration-300 btn btn-ghost normal-case text-xl'>Signup</li></Link>}
    </ul>
  </div>
</div>






  </div>
  <ul className='md:flex hidden justify-center items-center gap-5 md:me-20'>
  <Link><li className='hover:text-blue-500 duration-300 btn btn-ghost normal-case text-xl text-slate-700'>Home</li></Link>
   
{user?.email?  <Link to='/carts'><li className='hover:text-blue-500 duration-300 btn btn-ghost normal-case text-xl text-slate-700'>Cart</li></Link>:''}

  {isAdmin.admin&&<Link to='/dashboard'>
    <li className='hover:text-blue-500 duration-300 btn btn-ghost normal-case text-xl text-slate-700'>Dashboard</li></Link>}
  
  {user?.email? <li className='text-slate-700 hover:text-blue-500 duration-300 btn btn-ghost normal-case text-xl' onClick={()=>logOut()}>Logout</li> :<Link to='/login'> <li className='text-slate-700 hover:text-blue-500 duration-300 btn btn-ghost normal-case text-xl'>Login</li></Link>}
{!user?.email&&
  <Link to='/signup'>  <li className='text-slate-700 hover:text-blue-500 duration-300 btn btn-ghost normal-case text-xl'>Signup</li></Link>}

  </ul>

</div>
  )
}
