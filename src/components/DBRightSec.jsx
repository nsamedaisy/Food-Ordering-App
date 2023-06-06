import React from 'react'
import DBHeader from './DBHeader'
import { Route, Routes } from 'react-router-dom'
import DBHome from './DBHome'
import DBOrders from './DBOrders'
import DBNewitems from './DBNewitems'
import DBItems from './DBItems'

function DBRightSec() {
  return (
    <div className='flex flex-col py-12 px-12 flex-1 h-full'>
      <DBHeader />
      <div className='flex flex-col flex-1  scrollbar-none'>
        <Routes>
          <Route path='/home' element={<DBHome />} />
          <Route path='/orders' element={<DBOrders />} />
          <Route path='/items' element={<DBItems />} />
          <Route path='/newitems' element={<DBNewitems />} />
        </Routes>
      </div>
    </div>
  )
}

export default DBRightSec