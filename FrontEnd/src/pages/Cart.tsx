import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Trash2, X } from 'lucide-react'
import { clearCart, removeFromCart } from '../features/cartSlice'
import type { CartState } from '../types'
import CheckoutForm from '../components/CheckoutForm'
import { Container, buttonClass, formatRs } from '../components/ui'

export default function Cart() {
  const { cartItems, totalPrice } = useSelector((s: { cart: CartState }) => s.cart)
  const dispatch = useDispatch()
  const [checkout, setCheckout] = useState(false)
  const dialog = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!checkout) return
    dialog.current?.focus()
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setCheckout(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [checkout])

  return (
    <main id="main">
      <Helmet><title>Your cart | MEDVIA</title><meta name="robots" content="noindex" /></Helmet>
      <Container className="py-8 md:py-12">
        <h1>Your cart</h1>
        {cartItems.length === 0 ? (
          <div className="mt-6 rounded-lg bg-surface-sunken p-8">
            <p className="text-lg font-semibold">Your cart is empty</p>
            <p className="mt-1 text-muted">Add products to see your order total and delivery options.</p>
            <Link to="/products" className={buttonClass('primary', 'mt-5')}>Browse products</Link>
          </div>
        ) : (
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_22rem]">
            <div>
              <ul className="divide-y divide-line border-y border-line">{cartItems.map((item) => (
                <li key={item._id} className="flex items-center gap-4 py-4">
                  <Link to={`/product-detail/${item._id}`} className="chamfer h-20 w-20 shrink-0 bg-surface-sunken"><img src={item.product_images[0]} alt={item.title} width={80} height={80} className="h-full w-full object-contain" /></Link>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-base"><Link to={`/product-detail/${item._id}`} className="hover:text-brand">{item.title}</Link></h2>
                    <p className="tabular text-sm text-muted">{formatRs(item.price)} x {item.quantity}</p>
                  </div>
                  <p className="tabular font-semibold">{formatRs(item.price * item.quantity)}</p>
                  <button type="button" onClick={() => dispatch(removeFromCart(item))} aria-label={`Remove ${item.title}`} className="flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-md text-danger hover:bg-surface-sunken"><X size={20} strokeWidth={2} aria-hidden="true" /></button>
                </li>
              ))}</ul>
              <div className="mt-4 flex flex-wrap justify-between gap-3">
                <Link to="/products" className={buttonClass('ghost')}>Continue shopping</Link>
                <button type="button" onClick={() => dispatch(clearCart())} className={buttonClass('secondary')}><Trash2 size={18} strokeWidth={2} aria-hidden="true" />Clear cart</button>
              </div>
            </div>
            <aside className="h-fit rounded-lg bg-surface-sunken p-5 lg:sticky lg:top-24">
              <h2>Order summary</h2>
              <dl className="mt-3 space-y-2">
                <div className="flex justify-between"><dt className="text-muted">Subtotal</dt><dd className="tabular">{formatRs(totalPrice)}</dd></div>
                <div className="flex justify-between"><dt className="text-muted">Delivery</dt><dd className="text-muted">Set at checkout</dd></div>
                <div className="flex justify-between border-t border-line pt-2 text-lg font-bold"><dt>Estimated total</dt><dd className="tabular">{formatRs(totalPrice)}</dd></div>
              </dl>
              <button type="button" onClick={() => setCheckout(true)} className={buttonClass('primary', 'mt-5 w-full')}>Proceed to checkout</button>
            </aside>
          </div>
        )}
        {checkout && (
          <div className="dialog-overlay fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4">
            <div ref={dialog} tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby="checkout-title" className="dialog-panel max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-surface">
              <CheckoutForm subtotal={totalPrice} onClose={() => setCheckout(false)} />
            </div>
          </div>
        )}
      </Container>
    </main>
  )
}
