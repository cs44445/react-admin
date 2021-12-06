import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import storage from '../../localStorage';
import { Navigate } from 'react-router';
import SiderBar from './siderBar/SiderBar'
import MainHeader from './header/Header'
import { CotentRoute } from '../../routes/routelist'
import './index.css'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;



function MainLayout() {
  return (
    <Layout>
      <Header>
        <MainHeader />
      </Header>
      <Layout>
        <SiderBar />
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <CotentRoute />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default function Main() {
  return storage.get('token') ? <MainLayout /> : <Navigate to="/login" />
}