import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [form] = Form.useForm();
  const [error, setError] = useState('');

  const onFinish = (values: any) => {
    // Send login request to the server
    // If successful, redirect the user to the dashboard
    // If not, set the error state to display an error message
  };

  return (
    <div className="login-container">
      <Form
        form={form}
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
        {error && <div className="error-message">{error}</div>}
      </Form>
    </div>
  );
};

export default Login;
