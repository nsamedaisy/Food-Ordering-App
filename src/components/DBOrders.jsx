import React from 'react';
import orders from '../assets/data/orders.json';
import { Card, Table, Tag } from 'antd';
import { useNavigate } from 'react-router-dom';

function DBOrders() {
  const navigate = useNavigate()

  const renderOrderStatus = (orderStatus) => {
    if (orderStatus === 'Accepted') {
      return <Tag color={'green'}>{orderStatus}</Tag>
    }
    if (orderStatus === 'Pending') {
      return <Tag color={'blue'}>{orderStatus}</Tag>
    } if (orderStatus === 'Declined') {
      return <Tag color={'red'}>{orderStatus}</Tag>
    }
  }
  const tableColumns = [
    {
      title: 'OrderID',
      dataIndex: 'OrderID',
      key: 'OrderID',
    },
    {
      title: 'Delivery Address',
      dataIndex: 'Delivery Address',
      key: 'Delivery Address',
    },
    {
      title: 'Price',
      dataIndex: 'Price',
      key: 'Price',
      render: (Price) => `${Price} $`
    },
    {
      title: 'Status',
      dataIndex: 'Status',
      key: 'Status',
      render: renderOrderStatus
    }
  ]
    return (
      <Card title={'List of Orders'} style={{margin: 20}}>
        <Table
        dataSource={orders}
        columns={tableColumns}
        rowKey='orderID'
        onRow={(orderItem) =>  ({
          onClick: () => navigate(`/${orderItem.orderID}/DBDetailorder`)
        })}
        />
        </Card>
    )
}

export default DBOrders