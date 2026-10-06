import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cartSlice'
import type { Product } from '../types'
import ProductCard from './ProductCard'

const product: Product = {
  _id: 'p1',
  title: 'Digital Nebulizer',
  price: 1500,
  product_images: ['/n.png'],
  category: 'Medical Devices',
}

function renderCard() {
  const store = configureStore({ reducer: { cart: cartReducer } })
  render(
    <Provider store={store}>
      <MemoryRouter>
        <ProductCard product={product} />
      </MemoryRouter>
    </Provider>,
  )
  return store
}

describe('ProductCard', () => {
  it('shows the name, price, category and a described image that link to the product page', () => {
    renderCard()
    expect(screen.getByRole('heading', { name: 'Digital Nebulizer' })).toBeInTheDocument()
    expect(screen.getByText('Rs 1,500')).toBeInTheDocument()
    expect(screen.getByText('Medical Devices')).toBeInTheDocument()
    expect(screen.getByAltText('Digital Nebulizer')).toBeInTheDocument()
    for (const link of screen.getAllByRole('link')) {
      expect(link).toHaveAttribute('href', '/product-detail/p1')
    }
  })

  it('adds one item to the cart and confirms it on the button', async () => {
    const user = userEvent.setup()
    const store = renderCard()
    await user.click(screen.getByRole('button', { name: /add to cart/i }))
    expect(store.getState().cart.totalQuantity).toBe(1)
    expect(store.getState().cart.totalPrice).toBe(1500)
    expect(await screen.findByRole('button', { name: /added/i })).toBeInTheDocument()
  })
})
