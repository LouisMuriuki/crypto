import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  const [form] = Form.useForm();
  const [error, setError] = useState<string>('');
  const [isloading, setIsLoading] = useState<boolean>(false);


  const onFinish = async (values: any) => {
    setIsLoading(true);
    try {
      await axios.post('/api/register', values);
      // If the request is successful, redirect the user to the login page
      // You can use the `useHistory` hook from the `react-router-dom` library to do this
    } catch (err:any) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-container">
      <Form
        form={form}
        name="normal_register"
        className="register-form"
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[            {              type: 'email',              message: 'The input is not valid E-mail!',            },            {              required: true,              message: 'Please input your E-mail!',            },          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[            {              required: true,              message: 'Please input your password!',            },          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[            {              required: true,              message: 'Please confirm your password!',            },            ({ getFieldValue }) => ({              validator(rule, value) {                if (!value || getFieldValue('password') === value) {                  return Promise.resolve();                }                return Promise.reject('The two passwords that you entered do not match!');              },            }),          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="register-form-button">
            Register
          </Button>
        </Form.Item>
        {error && <div className="error-message">{error}</div>}
      </Form>
    </div>
  );
}
export default Register;

