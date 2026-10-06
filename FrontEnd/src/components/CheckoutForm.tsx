import { useEffect, useMemo, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { X } from 'lucide-react'
import { clearCart } from '../features/cartSlice'
import { API_NAME } from '../constant'
import type { CartState } from '../types'
import { Input, buttonClass, formatRs } from './ui'

interface Province { name: string; deliveryFee?: number }
interface Fields {
  firstName: string; lastName: string; email: string; phone: string; address: string
  apartment: string; city: string; country: string; province: string; saveInfo: boolean
}
type Errors = Partial<Record<keyof Fields, string>>

function validate(f: Fields): Errors {
  const e: Errors = {}
  if (!f.firstName.trim()) e.firstName = 'Enter your first name.'
  if (!f.lastName.trim()) e.lastName = 'Enter your last name.'
  if (!/^\S+@\S+\.\S+$/.test(f.email.trim())) e.email = 'Enter an email address like name@example.com.'
  if (!/^\+?\d{10,13}$/.test(f.phone.replace(/[\s-]/g, ''))) e.phone = 'Enter a phone number with 10 to 13 digits, for example 0300 1234567.'
  if (!f.address.trim()) e.address = 'Enter your street address.'
  if (!f.city.trim()) e.city = 'Enter your city.'
  if (!f.province) e.province = 'Choose a province to see the delivery fee.'
  return e
}

export default function CheckoutForm({ subtotal, onClose }: { subtotal: number; onClose: () => void }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { cartItems } = useSelector((s: { cart: CartState }) => s.cart)
  const [provinces, setProvinces] = useState<Province[]>([])
  const [loadingProvinces, setLoadingProvinces] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({})
  const [serverError, setServerError] = useState('')
  const [form, setForm] = useState<Fields>({ firstName: '', lastName: '', email: '', phone: '', address: '', apartment: '', city: '', country: 'Pakistan', province: '', saveInfo: false })

  useEffect(() => {
    const load = async () => {
      setLoadingProvinces(true)
      try {
        const res = await fetch(`${API_NAME}/api/delivery/provinces`)
        const data = (await res.json()) as { provinces?: Province[] }
        setProvinces(data.provinces || [])
      } catch (error) { console.error('Error fetching provinces:', error) } finally { setLoadingProvinces(false) }
    }
    void load()
  }, [])

  const deliveryFee = useMemo(() => provinces.find((p) => p.name === form.province)?.deliveryFee || 0, [provinces, form.province])
  const totalPrice = subtotal + deliveryFee
  const errors = validate(form)
  const show = (k: keyof Fields): string | undefined => (submitted || touched[k] ? errors[k] : undefined)
  const onBlur = (k: keyof Fields) => () => setTouched((t) => ({ ...t, [k]: true }))
  const change = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    const checked = e.target instanceof HTMLInputElement && e.target.type === 'checkbox' ? e.target.checked : undefined
    setForm((prev) => ({ ...prev, [name]: checked ?? value }))
  }

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setServerError('')
    if (Object.keys(errors).length > 0) return
    setSubmitting(true)
    const orderData = { ...form, cartItems, subtotal, deliveryFee, totalPrice, orderDate: new Date().toISOString() }
    try {
      const response = await fetch(`${API_NAME}/api/orders/create-order`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(orderData) })
      if (response.ok) { dispatch(clearCart()); onClose(); navigate('/thank-you') }
      else { const err = (await response.json()) as { message?: string }; setServerError(err.message || 'Failed to place order') }
    } catch (error) { console.error('Error placing order:', error); setServerError('The order could not be sent. Check your connection and try again.') }
    finally { setSubmitting(false) }
  }
  const common = (k: keyof Fields) => ({ name: k, value: String(form[k]), onChange: change, onBlur: onBlur(k), error: show(k) })

  return (
    <div className="p-5 sm:p-6">
      <div className="mb-5 flex items-center justify-between">
        <h2 id="checkout-title">Checkout</h2>
        <button type="button" onClick={onClose} aria-label="Close checkout" className="flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-md hover:bg-surface-sunken"><X size={22} strokeWidth={2} aria-hidden="true" /></button>
      </div>
      <form onSubmit={(e) => void submit(e)} noValidate className="space-y-4">
        <p className="text-sm text-muted">Fields marked required must be filled in.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Input label="First name (required)" autoComplete="given-name" {...common('firstName')} />
          <Input label="Last name (required)" autoComplete="family-name" {...common('lastName')} />
        </div>
        <Input label="Email (required)" type="email" autoComplete="email" hint="Your order confirmation is sent here." {...common('email')} />
        <Input label="Phone (required)" type="tel" inputMode="tel" autoComplete="tel" hint="The seller may call or message you about delivery." {...common('phone')} />
        <Input label="Address (required)" autoComplete="address-line1" {...common('address')} />
        <Input label="Apartment, suite, etc. (optional)" autoComplete="address-line2" {...common('apartment')} />
        <div className="grid gap-4 md:grid-cols-3">
          <Input label="Country" readOnly {...common('country')} />
          <Input label="City (required)" autoComplete="address-level2" {...common('city')} />
          <div>
            <label htmlFor="province" className="mb-1 block text-sm font-medium">Province (required)</label>
            <select id="province" name="province" value={form.province} onChange={change} onBlur={onBlur('province')} disabled={loadingProvinces}
              aria-invalid={show('province') ? true : undefined} aria-describedby={show('province') ? 'province-err' : undefined}
              className={`min-h-11 w-full rounded-md border bg-surface px-3 ${show('province') ? 'border-danger' : 'border-control'}`}>
              <option value="">{loadingProvinces ? 'Loading provinces' : 'Select your province'}</option>
              {provinces.map((p) => <option key={p.name} value={p.name}>{p.name} (delivery {formatRs(p.deliveryFee || 0)})</option>)}
            </select>
            {show('province') && <p id="province-err" className="mt-1 text-sm text-danger">{show('province')}</p>}
          </div>
        </div>
        <label className="flex min-h-11 items-center gap-3 text-sm"><input type="checkbox" name="saveInfo" checked={form.saveInfo} onChange={change} className="h-5 w-5" />Save this information for next time</label>

        <section aria-labelledby="summary-title" className="rounded-lg bg-surface-sunken p-4">
          <h3 id="summary-title">Order summary</h3>
          <ul className="mt-2 divide-y divide-line text-sm">{cartItems.map((i) => (
            <li key={i._id} className="flex justify-between gap-4 py-2"><span>{i.title} x {i.quantity}</span><span className="tabular shrink-0">{formatRs(i.price * i.quantity)}</span></li>
          ))}</ul>
          <dl className="mt-3 space-y-1">
            <div className="flex justify-between"><dt className="text-muted">Subtotal</dt><dd className="tabular">{formatRs(subtotal)}</dd></div>
            <div className="flex justify-between"><dt className="text-muted">Delivery</dt><dd className="tabular">{form.province ? formatRs(deliveryFee) : 'Choose a province'}</dd></div>
            <div className="flex justify-between border-t border-line pt-2 text-lg font-bold"><dt>Total</dt><dd className="tabular">{formatRs(totalPrice)}</dd></div>
          </dl>
        </section>
        {serverError && <p role="alert" className="rounded-md border border-danger p-3 text-danger">{serverError}</p>}
        {submitted && Object.keys(errors).length > 0 && <p role="alert" className="text-sm text-danger">Fix the highlighted fields to place your order.</p>}
        <button type="submit" disabled={submitting} className={buttonClass('primary', 'w-full')}>{submitting ? 'Placing order' : 'Place order'}</button>
      </form>
    </div>
  )
}
