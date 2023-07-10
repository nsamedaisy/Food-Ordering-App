import { React, useState } from "react";
import { Card, Table, Button, Modal } from "antd";
import Data from "./data";
import { Link } from "react-router-dom";

function DBMenu() {
  const [menuItems, setMenuItems] = useState([]);
  const handleDelete = (record) => {
    Modal.confirm({
      title: "Confirm Delete",
      content: "Are you sure you want to delete this menu item?",
      okText: "Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk: () => {
        const updatedMenuItems = menuItems.filter(
          (item) => item.id !== record.id
        );
        setMenuItems(updatedMenuItems);
      },
    });
  };

  const tableColumns = [
    {
      title: "Menu Item(s)",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `${price} $`,
    },
    {
      title: "Action",
      key: "Action",
      render: (text, record) => (
        <Button danger onClick={() => handleDelete(record)}>
          Remove
        </Button>
      ),
    },
  ];

  return (
    <Card
      title={"Choose from the menu below the available meal"}
      style={{ margin: 50, backgroundColor: "#151414b1" }}
    >
      <Table
        style={{ margin: 20 }}
        dataSource={Data}
        columns={tableColumns}
        rowKey="id"
      />
      <Link to={"create"}>
        <Button type="primary" style={{ backgroundColor: "#151414b1" }}>
          New Item
        </Button>
      </Link>
    </Card>
  );
}

export default DBMenu;
