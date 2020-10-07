import { Link } from 'gatsby'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'

export default function Success() {
  const { clearCart } = useShoppingCart()

  clearCart()

  return (
    <div>
      <h1>Thank you so much!</h1>
      <Link to="/">Click here to go back</Link>
    </div>
  )
}
