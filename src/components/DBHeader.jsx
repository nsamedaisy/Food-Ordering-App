import React from 'react';
import { useSelector } from 'react-redux'

function DBHeader() {
  const user = useSelector((state) => state.user);
  return (
    <div className='w-full flex items-center justify-between gap-3'>
      <h2 className='head-nav' >Admin's Dashboard
        {user?.name}
      </h2>

      <div className='flex items-center justify-center gap-4'>

        <div className='DBSearch'>
          <input type='text' placeholder='Search Here...' />
        </div>

      </div>
    </div>
  )
}

export default DBHeader