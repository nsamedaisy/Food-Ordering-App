import React from 'react'
import DBHeader from './DBHeader'
import { Route, Routes } from 'react-router-dom'
import DBHome from './DBHome'
import DBLogin from './DBLogin'
import DBNewitems from './DBNewitems'

function DBRightSec() {
  return (
    <div className='flex flex-col py-12 px-12 flex-1 h-full'>
      <DBHeader />
      <div className='flex flex-col flex-1 overflow-y-scroll scrollbar-none'>
        <Routes>
          <Route path='/home' element={<DBHome />} />
          <Route path='/login' element={<DBLogin />} />
          <Route path='/newitems' element={<DBNewitems />} />
        </Routes>
      </div>
    </div>
  )
}

export default DBRightSec