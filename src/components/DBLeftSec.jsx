import React from 'react';
import { Link } from 'react-router-dom';

function DBLeftSec() {
  return (
    <div className='h-full py-12 flex flex-col  bg-lightOverlay backdrop-blur-nd shadow-nd min-w-210 w-308 gap-3 left-nav '>
      <div className='flex items-center justify-start px-5 gap-4'> Daisy's services
        {/* <img src={logo} alt='' /> */}
      </div>

      <hr />

      <ul className='flex flex-col gap-4'>
        <Link to='/dashboard/home' className='nav-link'>Home</Link>
        <Link to='/dashboard/orders' className='nav-link'>Orders</Link>
        <Link to='/dashboard/items' className='nav-link'>Items</Link>
        <Link to='/dashboard/newitems' className='nav-link'>Add New Items</Link>
      </ul>
    </div>
  )
}

export default DBLeftSec