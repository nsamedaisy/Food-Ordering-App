import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function DBLeftSec() {
  return (
    <div className='h-full py-12 flex flex-col  bg-lightOverlay backdrop-blur-nd shadow-nd min-w-210 w-308 gap-3'>
      <NavLink to={'/'} className='flex items-center justify-start px-5 gap-4'> Daisy's services
        {/* <img src={logo} alt='' /> */}
      </NavLink>

      <hr />

      <ul className='flex flex-col gap-4'>
        <Link
          to={'/dashboard/home'}>Home</Link>
        <Link to='/dashboard/orders'>Orders</Link>
        <Link to='/dashboard/items'>Items</Link>
        <Link to='/dashboard/newitems'>Add New Items</Link>
      </ul>
    </div>
  )
}

export default DBLeftSec