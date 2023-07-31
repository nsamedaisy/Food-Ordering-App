import React from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

function DashboardSideMenu() {
  const navigate = useNavigate();

  const menuItems = [
    {
      key: 'orders',
      label: 'Orders',
    },
    {
      key: 'menu',
      label: 'Menu',
    },
    // {
    //   key: 'order-history',
    //   label: 'Order History',
    // },
    {
      key: 'settings',
      label: 'Settings',
    },
  ];

  return (
    <Menu className='menu-items' items={menuItems} onClick= {(menuItem) => navigate(menuItem.key)} />
  )
}

export default DashboardSideMenu