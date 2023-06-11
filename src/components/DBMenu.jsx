import React from 'react';
import { Card, Table, Button } from 'antd';
import Data from './data';
import { Link } from 'react-router-dom';

function DBMenu() {
  const tableColumns = [
    {
      title: 'Menu Item(s)',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => `${price} $`
    },{
      title: 'Action',
      key: 'Action',
      render: () => <Button danger>Remove</Button>
    },
  ];

  return (
    <Card title={'Menu'} style={{ margin: 20}}>
        <Table dataSource={Data} columns={tableColumns} rowKey='id' />
        <Link to={'create'}>
          <Button type='primary' style={{backgroundColor: 'green'}}>New Item</Button>
        </Link>
    </Card>
  )
}

export default DBMenu