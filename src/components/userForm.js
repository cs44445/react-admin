import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Form, Select, Input } from 'antd'
import { useState } from 'react'

const Item = Form.Item
const Option = Select.Option

function UserForm(props) {

  // static propTypes = {
  //   setForm: PropTypes.func.isRequired,
  //   roles: PropTypes.array.isRequired,
  //   user: PropTypes.object
  // }

  // componentWillMount() {
  //   this.props.setForm(this.props.form)
  // }

  // [变量，操作方法] = React Hooks(值)
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  // const [form] = Form.useForm();


  const { roles, user } = props
  const { getFieldDecorator } = props.form
  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 15 }
  }

  return (
    <Form {...formItemLayout}>
      <Item label="用户名">
        {
          getFieldDecorator('username', {
            initialValue: user.username,
            rules: [
              { required: true, message: '用户名必须输入' },
              { min: 3, max: 10, message: '用户名长度在3到10位' }
            ]
          })(
            <Input placeholder="请输入用户名"></Input>
          )
        }
      </Item>
      {
        user._id ? null : (
          <Item label="密码">
            {
              getFieldDecorator('password', {
                initialValue: user.password,
                rules: [
                  { required: true, message: '密码必须输入' }
                ]
              })(
                <Input type="password" placeholder="请输入密码"></Input>
              )
            }
          </Item>
        )
      }

      <Item label="手机号">
        {
          getFieldDecorator('phone', {
            initialValue: user.phone,
            rules: [
              { required: true, message: '手机号必须输入' }
            ]
          })(
            <Input placeholder="请输入手机号"></Input>
          )
        }
      </Item>
      <Item label="邮箱">
        {
          getFieldDecorator('email', {
            initialValue: user.email,
            rules: [
              { required: true, message: '邮箱必须输入' }
            ]
          })(
            <Input placeholder="请输入邮箱"></Input>
          )
        }
      </Item>
      <Item label="角色">
        {
          getFieldDecorator('role_id', {
            initialValue: user.role_id
          })(
            <Select>
              {
                roles.map(role => <Option key={role._id} value={role._id}>{role.name}</Option>)
              }
            </Select>
          )
        }
      </Item>
    </Form>
  )


}

export default UserForm

  // .useForm(UserForm)


