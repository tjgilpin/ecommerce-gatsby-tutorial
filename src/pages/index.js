import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Skus from '../components/Products/Skus'

const CartExample = () => (
  <Layout>
    <SEO title="Cart Example" />
    <h1>Checkout with cart example</h1>
    <h2>
      With{' '}
      <a href="https://use-shopping-cart.netlify.app/">use-shopping-cart</a>
    </h2>
      <Skus />
  </Layout>
)

export default CartExample
