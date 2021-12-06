import React, { useState, useEffect } from 'react'
import { Layout, Menu } from "antd"
import { Link, useLocation } from 'react-router-dom';
import { menusRoutes } from '../../../routes/routelist'
import './siderbar.css'
// import { connect } from "react-redux"

const { SubMenu } = Menu;
const { Sider } = Layout;

function SideMenus(props) {
  const [collapsed, setCollapsed] = useState(false)

  let location = useLocation();
  let path = location.pathname.slice(1)

  // 收缩侧边栏
  const onCollapse = collapsed => {
    setCollapsed(collapsed)
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed} onCollapse={onCollapse}
    >
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={[path]}
        selectedKeys={[path]}
      >
        {
          menusRoutes.map(route => {
            if (route.children) {
              const childMenu = route.children.map(item => {
                return (
                  <Menu.Item key={item.meta.key} icon={item.meta.icon}>
                    <Link key={item.meta.key} to={item.path}>{item.meta.title}</Link>
                  </Menu.Item>
                )
              });
              return (
                <SubMenu key={route.meta.key} icon={route.meta.icon} title={route.meta.title}>
                  {childMenu}
                </SubMenu>
              );
            } else {
              return (
                <Menu.Item key={route.meta.key} icon={route.meta.icon}>
                  <Link key={route.meta.key} to={route.path}>{route.meta.title}</Link>
                </Menu.Item>
              );
            }
          })
        }
      </Menu>
    </Sider>
  );
}

export default SideMenus