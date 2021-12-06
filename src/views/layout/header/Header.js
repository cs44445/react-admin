import React, { useEffect } from 'react'
import './header.css'
import { Layout, Breadcrumb, Dropdown, Menu, Button, Avatar, Badge, Switch } from 'antd'
import { UserOutlined, ContainerOutlined, SettingFilled, ArrowRightOutlined, CommentOutlined } from '@ant-design/icons'
import { useNavigate, useLocation } from 'react-router'
import storage from '../../../localStorage'
import { connect } from 'react-redux'
import { changeThemeAction } from '../../../redux/actions/theme'

function HeaderComp(props) {
  const navigate = useNavigate()

  function navigateRoute(route) {
    if (route.key === "login") {
      storage.set('token', '')
    }
    navigate(route.key)
  }

  let location = useLocation();
  // let path = location.pathname.slice(1)

  const getTitle = (menuList) => {
    //获取当前点击的路径
    // const { pathname } = props.location;

    const pathname = location.pathname
    //获取key
    const key = selectedKey(pathname, menuList);
    //标题
    let title = '';
    menuList.forEach(item => {
      if (item.children) {
        let child = item.children.find(child => {
          return child.key === key;
        })
        if (child) {
          title = child.title;
        }
      } else {
        if (item.key === key) {
          title = item.title;
        }
      }
    })
    return title;
  }

  // 获取selectedKey，遍历整个menuList，模糊匹配获取最近的路由key

  const selectedKey = (pathname, menuList) => {
    let key = '';
    menuList.forEach(item => {
      if (item.children) {
        let child = item.children.find(child => {
          return pathname.indexOf(child.path) !== -1;
        })
        if (child) {
          key = child.key;
        }
      } else {
        if (pathname.indexOf(item.path) !== -1) {
          key = item.key;
        }
      }
    })
    return key;
  }

  const menu = (
    <Menu onClick={navigateRoute} className="header-menu">
      <Menu.Item key="personalCenter"><UserOutlined style={{ paddingRight: '10px' }} />个人中心</Menu.Item>
      <Menu.Item key="orderCenter"><ContainerOutlined style={{ paddingRight: '10px' }} />订单中心</Menu.Item>
      <Menu.Item key="setManage"><SettingFilled style={{ paddingRight: '10px' }} />设置</Menu.Item>
      <Menu.Item key="a"><CommentOutlined style={{ paddingRight: '10px' }} />
        消息通知
        <Badge count={5} />
      </Menu.Item>
      <Menu.Item key="login"><ArrowRightOutlined style={{ paddingRight: '10px' }} />退出登录</Menu.Item>
    </Menu>
  )

  return (
    <Layout>
      <div className="header-logout" style={{ backgroundColor: props.theme === "dark" ? '#001529' : '#fff' }}>
        <Switch
          checkedChildren="日间模式"
          unCheckedChildren="夜间模式"
          style={{ marginRight: '100px' }}
          onClick={() => props.changeTheme()}
        />
        <Dropdown overlay={menu} placement="bottomLeft" arrow>
          <Avatar src="https://joeschmoe.io/api/v1/random" style={{ height: "50px", width: "50px" }} />
        </Dropdown>
      </div>
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    theme: state.themeInfo.theme
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeTheme: function () {
      dispatch(changeThemeAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComp)

