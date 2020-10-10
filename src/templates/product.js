import React from 'react'

function Product({ pageContext }) {
  const { product } = pageContext
  return (
    <div>
      <h1>{product.product.name}</h1>
      <img src={product.product.images} alt={product.product.name}/>
      <p>{product.unit_amount}</p>
      <p>{product.product.description}</p>
    </div>
  )
}

export default Product