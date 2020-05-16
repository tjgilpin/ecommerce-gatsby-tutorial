import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'

export function CartItems() {
  const {
    cartDetails,
    reduceItemByOne,
    addItem,
    removeCartItem,
  } = useShoppingCart()
  const cart = []
  // Note: Object.keys().map() takes 2x as long as a for-in loop
  for (const sku in cartDetails) {
    const cartEntry = cartDetails[sku]
    // all of your basic product data still exists (i.e. name, image, price)
    cart.push(
      <article>
        {/* image here */}
        {/* name here */}
        <p>Line total: {cartEntry.formattedValue}</p>
        {/* What if we want to remove one of the item... or add one */}
        <button
          onClick={() => reduceItemByOne(cartEntry.sku)}
          aria-label={`Remove one ${cartEntry.name} from your cart`}
        >
          -
        </button>
        <p>{cartEntry.name} Quantity: {cartEntry.quantity}</p>
        <button
          onClick={() => addItem(cartEntry)}
          aria-label={`Add one ${cartEntry.name} to your cart`}
        >
          +
        </button>
        {/* What if we don't want this product at all */}
        <button
          onClick={() => removeCartItem(cartEntry.sku)}
          aria-label={`Remove all ${cartEntry.name} from your cart`}
        >
          Remove
        </button>
      </article>
    )
  }
  return cart
}

export default CartItems