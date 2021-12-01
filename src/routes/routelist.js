import Login from '../views/login/Login'
import Home from '../views/home/Home'
import Product from '../views/manage/product/Product'
import User from '../views/manage/user/User'
import NotFound from '../views/notfount/NotFound'

const loginRoutes = {
  path: "/*",
  element: <Login />
}

const notFoundRoutes = {
  path: "/login",
  element: <NotFound />
}

const siderBarRoutes = [
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/product",
    element: <Product />
  },
  {
    path: "/User",
    element: <User />
  },
]

export const routeList = [
  loginRoutes,
  notFoundRoutes,
  siderBarRoutes,
]
