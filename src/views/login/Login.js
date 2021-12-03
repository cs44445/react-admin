import React from 'react'
import storage from '../../localStorage'
import { useNavigate, Navigate } from 'react-router';
import './login.css'

import { Form, Input, Button, Checkbox, Card, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useState } from 'react';

export default function Login(props) {
  const navigate = useNavigate()
  const [user, setUser] = useState({ name: '', password: '' })
  const onFinish = values => {
    if (values) {
      user.name = values.name
      user.password = values.password
      setUser(user)
    }
  };

  function clickLogin() {
    navigate('/home')
    storage.set('token', '123')
  }

  return (
    <div className="login-page">
      <Card title='用户登录' className="login-form">
        <Form
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="name"
            rules={[
              { required: true, whitespace: true, message: '请输入用户名!' },
              { min: 4, message: '用户名必须大于4位' },
              { max: 12, message: '用户名必须小于12位' },
              { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成' }
            ]} initialValue={"admin"}>
            <Input prefix={<UserOutlined />} placeholder="用户名:admin" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码!',
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="密码:123" />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>记住我</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={clickLogin}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

