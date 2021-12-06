import React from 'react'
import { connect } from 'react-redux'
import { Layout, Menu, Breadcrumb } from 'antd';
import storage from '../../localStorage';
import { Navigate } from 'react-router';
import SiderBar from './siderBar/SiderBar'
import MainHeader from './header/Header'
import { CotentRoute } from '../../routes/routelist'
import './index.css'
const { Header, Content } = Layout;

function MainLayout(props) {
  return (
    <Layout>
      <Header className="site-layout-background">
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

function isLoginMain() {
  return storage.get('token') ? <MainLayout /> : <Navigate to="/login" />
}

const mapStateToProps = state => {
  return {
    theme: state.themeInfo.theme
  }
}

export default connect(mapStateToProps)(isLoginMain)