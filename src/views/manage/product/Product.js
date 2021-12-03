import React from 'react'
import ProductItem from './ProductItem'
import { NavLink } from 'react-router-dom'
import { productList } from '../../../mockData'

export default function Product() {
  return (
    <div >
      {
        productList.map(item =>
          <div key={item.id} style={{ padding: "5px" }}>
            <span style={{ margin: "10px" }}>id:{item.id}</span>
            订单号：{item.trackingNumber}
            <NavLink
              key={item.id} to={`${item.id}`}
              style={{ margin: "10px" }}
            >查看详情：</NavLink>
          </div>)
      }
    </div>
  )
}

