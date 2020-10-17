import React, { useState } from 'react'
import { useShoppingCart } from 'use-shopping-cart'

function Cart(product) {
  const { decrementItem, incrementItem, removeItem, redirectToCheckout, cartCount, cartDetails, formattedTotalPrice } = useShoppingCart()
  const [loading, setLoading] = useState(false)

  const entries = []
  for (const sku in cartDetails) {
    const entry = cartDetails[sku]
    entries.push(
      <article
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '50%'
        }}
      >
        <figure style={{ textAlign: 'center' }}>
          <img
            style={{ height: 200, width: 250 }}
            src={entry.image}
            alt={entry.name}
          />
          <figcaption>{entry.name}</figcaption>
        </figure>
        <p>{entry.formattedValue}</p>

        <section
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-evenly'
          }}
        >
          {/* Increases the quantity of the item */}
          <button
            onClick={() => incrementItem(sku)}
            aria-label={`Add one ${entry.name} to your cart`}
            style={{ height: 50, width: 100, marginBottom: 30 }}
          >
            +
          </button>
          {entry.quantity}
          {/* Decreases the quantity of the item */}
          <button
            onClick={() => decrementItem(sku)}
            aria-label={`Remove one ${entry.name} from your cart`}
            style={{ height: 50, width: 100, marginBottom: 30 }}
          >
            -
          </button>
          <button
            onClick={() => removeItem(sku)}
            aria-label={`Remove ${entry.name} from your cart`}
            style={{ height: 50, width: 100, marginBottom: 30 }}
          >
            x
          </button>
        </section>
      </article>
    )
  }

  if (entries.length) {
    return (
      <>
        {entries}
        {formattedTotalPrice}
        {cartCount}
        <button
        disabled={loading}
        onClick={() => {
          setLoading(true)
          redirectToCheckout()
        }}
      >
        {loading ? 'Loading...' : 'Checkout'}
        </button>        
        {/* <button onClick={clearCart}>Remove all items</button> */}
      </>
      )
  } else {
    return <p>You currently don't have any items in your cart.</p>
  } 
}

export default Cart