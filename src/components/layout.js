import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import stripeLogo from '../images/powered_by_stripe.svg'

import '@stripe/stripe-js' // https://github.com/stripe/stripe-js#import-as-a-side-effect

import Cart from './Cart'

import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
          <CartProvider
            mode="client-only"
            stripe={stripePromise}
            successUrl={`${window.location.origin}/page-2/`}
            cancelUrl={`${window.location.origin}/`}
            currency="GBP"
            allowedCountries={['US', 'GB', 'CA']}
            billingAddressCollection={true}
          >
          <Cart />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
          <footer>
            <div>
              © 2019, Built by <a href="https://twitter.com/thorwebdev">Thor</a>{' '}
              with <a href="https://www.gatsbyjs.org">Gatsby</a> | View{' '}
              <a href="https://github.com/dayhaysoos/use-shopping-cart/tree/master/examples/gatsby">
                source
              </a>
            </div>
            <div>
              <a href="https://stripe.com">
                <img src={stripeLogo} alt="Payments powered by Stripe" />
              </a>
            </div>
          </footer>
        </div>
        </CartProvider>        
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
