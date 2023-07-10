import React from "react";
import { Form, Input, Button, Card, InputNumber } from "antd";
// import data from "../components/data"

const { TextArea } = Input;

function CreateMenuItem() {

  return (
    <div className="createmenuitem">
      <Card title="New Menu Item" style={{ margin: 100 }}>
        <Form layout="vertical" wrapperCol={{ span: 15 }}>
          <Form.Item label="Dish Image" required></Form.Item>
          <Form.Item label="Dish Name" required>
            <Input placeholder="Enter dish name" />
          </Form.Item>

          <Form.Item label="Dish Description" required>
            <TextArea rows={4} placeholder="Enter dish description" />
          </Form.Item>

          <Form.Item label="Price ($)" required>
            <InputNumber />
          </Form.Item>

          <Form.Item>
            <Button type="link" style={{ backgroundColor: "#3662186f" }} >
              Add Item
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default CreateMenuItem;


// onClick={() => addItem()}