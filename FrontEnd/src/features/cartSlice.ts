import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { CartItem, CartState } from '../types'

export const initialState: CartState = { cartItems: [], totalQuantity: 0, totalPrice: 0 }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const incoming = action.payload
      const existing = state.cartItems.find((item) => item._id === incoming._id)
      if (existing) {
        existing.quantity += incoming.quantity
      } else {
        state.cartItems.push(incoming)
      }
      state.totalQuantity += incoming.quantity
      state.totalPrice += incoming.price * incoming.quantity
    },
    removeFromCart: (state, action: PayloadAction<Pick<CartItem, '_id'>>) => {
      const index = state.cartItems.findIndex((item) => item._id === action.payload._id)
      const removed = state.cartItems[index]
      if (index !== -1 && removed) {
        state.totalQuantity -= removed.quantity
        state.totalPrice -= removed.price * removed.quantity
        state.cartItems.splice(index, 1)
      }
    },
    clearCart: (state) => {
      state.cartItems = []
      state.totalQuantity = 0
      state.totalPrice = 0
    },
  },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
