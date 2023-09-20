import { React, useState } from "react";
import Data from "../data";
import { Link } from "react-router-dom";

function DBMenu() {
  const [menuItems, setMenuItems] = useState([]);

  const handleDelete = (record) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const updatedMenuItems = menuItems.filter((item) => item.id !== record.id);
      setMenuItems(updatedMenuItems);
    }
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
        <button onClick={() => handleDelete(record)}>Remove</button>
      ),
    },
  ];

  return (
    <div className="Dbmenu">
      <h2>Update Meals On This List</h2>
      <table className="dbTable">
        <thead>
          <tr>
            <th className="col1">Menu Item(s)</th>
            <th className="col2">Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{`${item.price} $`}</td>
              <td>
                <button className="remove" onClick={() => handleDelete(item)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={"create"}>
        <button className="addItem">Update Menu</button>
      </Link>
    </div>
  );
}

export default DBMenu;
