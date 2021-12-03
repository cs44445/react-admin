import React from 'react'
import { useParams } from 'react-router'
import { productList } from '../../../mockData'
import { Card } from 'antd'

function getProduct(id) {
  return productList.find(
    item => item.id === id
  )
}

export default function ProductItem() {
  let params = useParams()
  let product = getProduct(Number(params.id))
  return (
    <div style={{ padding: '30px', background: '#ececec' }}>
      <Card title="Card title" bordered={false} style={{ width: 300 }}>
        <p>订单号：{product.name}</p>
        <p>订单号：{product.trackingNumber}</p>
        <p>价格：{product.price}</p>
        <p>支付账号：{product.account}</p>
        <p>价格：{product.price}</p>
        <p>创建时间：{product.createTime}</p>
        <p>付款时间：{product.payTime}</p>
        <p>发货时间：{product.deliveryTime}</p>
      </Card>
    </div>

  )
}
