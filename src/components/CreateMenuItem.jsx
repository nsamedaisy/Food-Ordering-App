import React from 'react';
import { Form, Input, Button, Card, InputNumber } from 'antd';

const { TextArea } = Input;

function CreateMenuItem() {
  return (
    <div className='createmenuitem'>
    <Card title='New Menu Item' style={{ margin: 100, backgroundColor: '#3662186f' }}>
      <Form layout='vertical' wrapperCol={{ span: 15}}>
        <Form.Item label='Dish Name' required>
          <Input placeholder='Enter dish name' />
        </Form.Item>

        <Form.Item label='Dish Description' required>
          <TextArea rows={4} placeholder='Enter dish description' />
        </Form.Item>

        <Form.Item label='Price ($)' required>
          <InputNumber />
        </Form.Item>

        <Form.Item>
          <Button type='primary' style={{ backgroundColor: '#3662186f'}}>Submit</Button>
        </Form.Item>
      </Form>
    </Card>
    </div>
  )
}

export default CreateMenuItem