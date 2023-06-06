import React from 'react';
import DBLeftSec from './DBLeftSec';
import DBRightSec from './DBRightSec';
import DBOrders from './DBOrders';

function Dashboard() {
  return (
    <div className='w-screen h-screen flex items-1'>
      <DBLeftSec />
      <DBRightSec />
      {/* <DBOrders /> */}
    </div>
  )
}

export default Dashboard