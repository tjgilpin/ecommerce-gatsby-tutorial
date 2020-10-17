import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'

function Cart(product) {
  const { decrementItem, incrementItem, clearCart, cartDetails, formattedTotalPrice } = useShoppingCart()

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

          {/* Decreases the quantity of the item */}
          <button
            onClick={() => decrementItem(sku)}
            aria-label={`Remove one ${entry.name} from your cart`}
            style={{ height: 50, width: 100, marginBottom: 30 }}
          >
            -
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
        <button onClick={clearCart}>Remove all items</button>
      </>
      )
  } else {
    return <p>You currently don't have any items in your cart.</p>
  } 
}

export default Cart