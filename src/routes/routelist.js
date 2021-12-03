import Login from '../views/login/Login'
import Home from '../views/home/Home'
import Product from '../views/manage/product/Product'
import User from '../views/manage/user/User'
import MainLayout from '../views/layout'
import Introduce from '../views/introduce/Introduce'
import { useRoutes } from 'react-router'
import PersonalCenter from '../views/personalCenter'
import OrderCenter from '../views/orderCenter'
import SetManage from '../views/setingManage'
import ProductItem from '../views/manage/product/ProductItem'

import {
  HomeOutlined,
  UserOutlined,
  TeamOutlined,
  TableOutlined,
  VerifiedOutlined,
  SettingFilled,
  TaobaoCircleFilled
} from '@ant-design/icons';

export const loginRoutes = [
  {
    path: 'login',
    component: Login,
    meta: {
      title: '',
      needLogin: false,
      key: 'login'
    }
  }
]

export const menusRoutes = [
  {
    path: 'home',
    component: Home,
    meta: {
      title: '首页',
      needLogin: true,
      icon: <HomeOutlined />,
      key: 'home'
    }
  },
  {
    path: 'manage',
    meta: {
      title: '管理',
      needLogin: true,
      icon: <TeamOutlined />,
      key: 'users'
    },
    children: [
      {
        path: 'manage/user',
        component: User,
        meta: {
          title: '管理用户',
          needLogin: true,
          icon: <UserOutlined />,
          key: 'user'
        }
      },
      {
        path: 'manage/product',
        component: Product,
        meta: {
          title: '管理商品',
          needLogin: true,
          icon: <TableOutlined />,
          key: 'product',
        }
      }
    ]
  },
  {
    path: 'personalCenter',
    component: PersonalCenter,
    meta: {
      title: '个人中心',
      needLogin: true,
      icon: <UserOutlined />,
      key: 'personalCenter'
    }
  },
  {
    path: 'orderCenter',
    component: OrderCenter,
    meta: {
      title: '订单中心',
      needLogin: true,
      icon: <TaobaoCircleFilled />,
      key: 'orderCenter'
    }
  },
  {
    path: 'setManage',
    component: SetManage,
    meta: {
      title: '设置',
      needLogin: true,
      icon: <SettingFilled />,
      key: 'setManage'
    }
  },
  {
    path: 'introduce',
    component: Introduce,
    meta: {
      title: '公司介绍',
      needLogin: true,
      icon: <VerifiedOutlined />,
      key: 'introduce'
    }
  },
]

export const mainLayoutRoutes = {
  path: '/*',
  component: MainLayout,
  meta: {
    title: '',
    needLogin: true,
    icon: <TeamOutlined />,
    key: 'main'
  },
  children: menusRoutes
};

export const routes = [
  ...loginRoutes,
  mainLayoutRoutes,
];


const contentRoutes = [
  {
    path: 'home',
    element: <Home />,
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'manage/user',
    element: <User />,
  },
  {
    path: 'manage/product',
    element: <Product />,
  },
  {
    path: 'manage/product/:id',
    element: <ProductItem />
  },
  {
    path: 'introduce',
    element: <Introduce />,
  },
  {
    path: 'personalCenter',
    element: <PersonalCenter />,
  },
  {
    path: 'orderCenter',
    element: <OrderCenter />,
  },
  {
    path: 'setManage',
    element: <SetManage />,
  },
]
export function CotentRoute() {
  let element = useRoutes(contentRoutes)
  return element
}