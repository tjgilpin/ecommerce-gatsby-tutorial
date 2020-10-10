import React from 'react'
import Layout from '../components/layout'

function Product({ pageContext }) {
  const { product } = pageContext
  return (
    <Layout>
    <div>
      <h1>{product.product.name}</h1>
      <img src={product.product.images} alt={product.product.name}/>
      <p>{product.unit_amount}</p>
      <p>{product.product.description}</p>
    </div>
    </Layout>
  )
}

export default Product