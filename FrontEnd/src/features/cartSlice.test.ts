import { describe, expect, it } from 'vitest'
import reducer, { addToCart, clearCart, initialState, removeFromCart } from './cartSlice'
import type { CartItem } from '../types'

const make = (overrides: Partial<CartItem> = {}): CartItem => ({
  _id: 'p1',
  title: 'Digital Nebulizer',
  price: 1500,
  product_images: ['/n.png'],
  quantity: 1,
  ...overrides,
})

describe('cartSlice', () => {
  it('starts with an empty cart', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState)
  })

  it('adds a new item and updates quantity and price totals', () => {
    const state = reducer(initialState, addToCart(make({ quantity: 2 })))
    expect(state.cartItems).toHaveLength(1)
    expect(state.totalQuantity).toBe(2)
    expect(state.totalPrice).toBe(3000)
  })

  it('merges quantity when the same product is added again', () => {
    let state = reducer(initialState, addToCart(make({ quantity: 1 })))
    state = reducer(state, addToCart(make({ quantity: 3 })))
    expect(state.cartItems).toHaveLength(1)
    expect(state.cartItems[0]?.quantity).toBe(4)
    expect(state.totalQuantity).toBe(4)
    expect(state.totalPrice).toBe(6000)
  })

  it('keeps separate lines for different products and sums the totals', () => {
    let state = reducer(initialState, addToCart(make()))
    state = reducer(
      state,
      addToCart(make({ _id: 'p2', title: 'Face mask', price: 200, quantity: 3 })),
    )
    expect(state.cartItems).toHaveLength(2)
    expect(state.totalQuantity).toBe(4)
    expect(state.totalPrice).toBe(1500 + 600)
  })

  it('removes an item and subtracts its quantity and price', () => {
    let state = reducer(initialState, addToCart(make({ quantity: 2 })))
    state = reducer(state, addToCart(make({ _id: 'p2', price: 200, quantity: 1 })))
    state = reducer(state, removeFromCart({ _id: 'p1' }))
    expect(state.cartItems.map((i) => i._id)).toEqual(['p2'])
    expect(state.totalQuantity).toBe(1)
    expect(state.totalPrice).toBe(200)
  })

  it('ignores removal of a product that is not in the cart', () => {
    const before = reducer(initialState, addToCart(make()))
    const after = reducer(before, removeFromCart({ _id: 'missing' }))
    expect(after).toEqual(before)
  })

  it('clears every item and resets the totals', () => {
    const filled = reducer(initialState, addToCart(make({ quantity: 5 })))
    expect(reducer(filled, clearCart())).toEqual(initialState)
  })
})
