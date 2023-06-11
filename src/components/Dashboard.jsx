import React from 'react';
import DashboardSideMenu from '../components/DashboardSideMenu';
import { Route, Routes } from 'react-router-dom';
import DBSettings from './DBSettings';
import DBOrders from './DBOrders';
import DBMenu from './DBMenu';
import DBDetailorder from './DBDetailorder';
import { Layout, Image } from 'antd';
import CreateMenuItem from './CreateMenuItem';

let { Sider, Content } = Layout;

function Dashboard() {
  return (
    <Layout>
      <Sider style={{height: '90vh', backgroundColor: '#3662186f' }}>
        <Image src='https://media.istockphoto.com/id/91318579/photo/daisy.jpg?s=2048x2048&w=is&k=20&c=J2tP7mpbuv9XQv_D4O4ZVwCbBuSMGXPLWpHnAX14t0Q=' preview={false}/>
        <DashboardSideMenu />
      </Sider>
      <Layout>
        <Content style={{ backgroundImage: `url('https://plus.unsplash.com/premium_photo-1678283974882-a00a67c542a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80')`, width: '86vw', backgroundPosition: 'center', backgroundSize: 'cover' }}>
          <Routes>
            <Route path='/order' element={<DBOrders />} />
            <Route path='/detailorder' element={<DBDetailorder />} />
            <Route path='/menu' element={<DBMenu />} />
            <Route path='/menu/create' element={<CreateMenuItem />} />
            <Route path='/settings' element={<DBSettings />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Dashboard