import React from 'react';
import { Form, Upload , Icon , message, Input, Button, InputNumber   } from 'antd';
const {TextArea } = Input;
const FormItem = Form.Item;

const addProduct = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  
    const { getFieldDecorator } = props.form;
    return (
      <Form onSubmit={handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Product title!' }],
          })(
            <Input type="text" placeholder="Product title" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('description', {
            rules: [{ required: true, message: 'Product description' }],
          })(
            <TextArea   type="text" placeholder="Product description" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('price', {
            rules: [{ required: true, message: 'Price is required' }],
          })(
            <InputNumber  placeholder="Price"/>
          )}
        </FormItem>
        
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Save
          </Button>
        </FormItem>
      </Form>
    );
 
}

export default Form.create()(addProduct); 