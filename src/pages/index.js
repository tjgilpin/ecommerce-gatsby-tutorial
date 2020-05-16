import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Skus from '../components/Products/Skus'
import CartOverview from '../components/CartOverview'
import CartItems from '../components/CartDetails'

import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

const CartExample = () => (
  <Layout>
    <SEO title="Cart Example" />
    <h1>Checkout with cart example</h1>
    <h2>
      With{' '}
      <a href="https://use-shopping-cart.netlify.app/">use-shopping-cart</a>
    </h2>
    <CartProvider
      stripe={stripePromise}
      successUrl={`${window.location.origin}/page-2/`}
      cancelUrl={`${window.location.origin}/`}
      currency="GBP"
      allowedCountries={['US', 'GB', 'CA']}
      billingAddressCollection={true}
    >
      <div>
        <CartOverview />
        <CartItems />
      </div>
      <Skus />
    </CartProvider>
  </Layout>
)

export default CartExample
