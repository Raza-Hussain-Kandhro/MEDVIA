import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cartSlice'
import CheckoutForm from './CheckoutForm'

const provinces = {
  provinces: [
    { name: 'Sindh', deliveryFee: 220 },
    { name: 'Punjab', deliveryFee: 520 },
  ],
}

async function renderForm() {
  const store = configureStore({ reducer: { cart: cartReducer } })
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CheckoutForm subtotal={1000} onClose={() => undefined} />
      </MemoryRouter>
    </Provider>,
  )
  // Wait for the provinces request to settle so the form is in its final state.
  await screen.findByRole('option', { name: /Sindh/ })
}

beforeEach(() => {
  vi.stubGlobal(
    'fetch',
    vi.fn(() => Promise.resolve(new Response(JSON.stringify(provinces)))),
  )
})

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('CheckoutForm', () => {
  it('shows an error beside each required field and sends no order when submitted empty', async () => {
    const user = userEvent.setup()
    await renderForm()
    await user.click(screen.getByRole('button', { name: /place order/i }))
    expect(screen.getByText('Enter your first name.')).toBeInTheDocument()
    expect(screen.getByText('Enter your last name.')).toBeInTheDocument()
    expect(screen.getByText('Enter an email address like name@example.com.')).toBeInTheDocument()
    expect(screen.getByText('Choose a province to see the delivery fee.')).toBeInTheDocument()
    expect(screen.getByRole('alert')).toHaveTextContent('Fix the highlighted fields')
    // Only the provinces request was made; no order was posted.
    expect(globalThis.fetch).toHaveBeenCalledTimes(1)
  })

  it('rejects a short phone number and accepts a valid Pakistani mobile number', async () => {
    const user = userEvent.setup()
    await renderForm()
    const phone = screen.getByLabelText(/phone/i)
    await user.type(phone, '123')
    await user.tab()
    expect(screen.getByText(/10 to 13 digits/)).toBeInTheDocument()
    await user.clear(phone)
    await user.type(phone, '0300 1234567')
    await user.tab()
    expect(screen.queryByText(/10 to 13 digits/)).not.toBeInTheDocument()
  })

  it('adds the selected province delivery fee to the order total', async () => {
    const user = userEvent.setup()
    await renderForm()
    expect(screen.getByText('Choose a province')).toBeInTheDocument()
    await user.selectOptions(screen.getByLabelText(/province/i), 'Sindh')
    expect(screen.getByText('Rs 220')).toBeInTheDocument()
    expect(screen.getByText('Rs 1,220')).toBeInTheDocument()
  })
})
