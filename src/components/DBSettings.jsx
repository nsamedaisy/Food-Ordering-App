import React from 'react';
import { Form, Input, Card, Button } from 'antd';
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

function DBSettings() {
  return (
    <Card title='Restaurant Details' style={{ margin: 90, backgroundColor: '#3662186f' }}>
      <Form layout='vertcal' wrapperCol={{ span: 15 }} >
        <Form.Item label='Restaurant Name' required>
          <Input placeholder='Enter restaurant name here' />
        </Form.Item>

        <Form.Item label='Restaurant Address' required>
        <Input placeholder='Enter restaurant address here' />
          {/* <GooglePlacesAutocomplete apiKey=''/> */}
        </Form.Item>

        <Form.Item>
          <Button type='primary' style={{backgroundColor: 'green'}} >Submit</Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default DBSettings