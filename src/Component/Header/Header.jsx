import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
<div className="navbar  shadow-md bg-white text-neutral-content flex justify-between items-center">
  <div>
  <a className="btn btn-ghost normal-case text-xl ms-20 text-blue-500">E-Commerce</a>
  </div>
  <ul className='flex justify-center items-center gap-5 me-20'>
  <Link><li className='hover:text-blue-500 duration-300 btn btn-ghost normal-case text-xl text-slate-700'>Home</li></Link>
  <Link to='/login'> <li className='text-slate-700 hover:text-blue-500 duration-300 btn btn-ghost normal-case text-xl'>Login</li></Link>
  <Link to='/signup'>  <li className='text-slate-700 hover:text-blue-500 duration-300 btn btn-ghost normal-case text-xl'>Signup</li></Link>

  </ul>

</div>
  )
}
