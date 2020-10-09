import React from 'react'

function Product({ pageContext }) {
  const { product } = pageContext
  return (
    <div>
      Name: {product.product.name}
      Price: {product.unit_amount}
      Description: {product.product.description}
    </div>
  )
}

export default Product