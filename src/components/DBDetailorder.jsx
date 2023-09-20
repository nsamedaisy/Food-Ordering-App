import React from "react";
import { Card, Descriptions, Divider, List, Button } from "antd";
import Data from "./data";

function DBDetailorder() {
  return (
    <Card title={`Order`} style={{ margins: 20 }}>
      <Descriptions bordered column={{ lg: 1, md: 1, sm: 1 }}>
        <Descriptions.Item label="Customer Name">
          {" "}
          Daisy Berri{" "}
        </Descriptions.Item>
        <Descriptions.Item label="Customer Address">
          Address 15-29, City, Country
        </Descriptions.Item>
      </Descriptions>

      <Divider />

      <List
        dataSource={Data}
        renderItem={(DataItem) => (
          <List.Item>
            <div style={{ fontWeight: "bold" }}>{DataItem.title}</div>
            <div> $ {DataItem.price}</div>
          </List.Item>
        )}
      />
      <Divider />
      <div>
        <h2>Total:</h2>
        <h2>$ 42.98</h2>
      </div>

      <div>
        <Button block types="danger">
          Decline Order
        </Button>
        <Button block types="primary">
          Accept Order
        </Button>
      </div>
      <Button block types="primary">
        Food is ready
      </Button>
    </Card>
  );
}

export default DBDetailorder;
