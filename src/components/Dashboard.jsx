import React from 'react'
import DBLeftSec from './DBLeftSec'
import DBRightSec from './DBRightSec'

function Dashboard() {
  return (
    <div className='w-screen h-screen flex items-1'>
      <DBLeftSec />
      <DBRightSec />
    </div>
  )
}

export default Dashboard