import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Check, ShoppingCart } from 'lucide-react'
import { addToCart } from '../features/cartSlice'
import type { Product } from '../types'
import { Badge, buttonClass, formatRs } from './ui'

export default function ProductCard({ product }: { product: Product }) {
  const dispatch = useDispatch()
  const [added, setAdded] = useState(false)
  const timer = useRef<number | undefined>(undefined)
  useEffect(() => () => window.clearTimeout(timer.current), [])

  const add = () => {
    dispatch(addToCart({ ...product, quantity: 1 }))
    setAdded(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setAdded(false), 1600)
  }
  const to = `/product-detail/${product._id}`
  return (
    <article className="flex flex-col rounded-lg border border-line bg-surface p-3 transition-colors duration-150 ease-out hover:border-brand focus-within:border-brand">
      <Link to={to} className="block">
        <img
          src={product.product_images[0]}
          alt={product.title}
          width={400}
          height={400}
          loading="lazy"
          decoding="async"
          className="chamfer aspect-square w-full bg-surface-sunken object-contain"
        />
      </Link>
      <div className="mt-3 flex flex-1 flex-col gap-1">
        {product.category && (
          <div>
            <Badge>{product.category}</Badge>
          </div>
        )}
        <h3 className="text-base">
          <Link to={to} className="hover:text-brand">
            {product.title}
          </Link>
        </h3>
        <p className="tabular mt-auto pt-2 text-lg font-semibold">{formatRs(product.price)}</p>
      </div>
      <button
        type="button"
        onClick={add}
        className={buttonClass(added ? 'secondary' : 'primary', 'mt-3 w-full')}
      >
        {added ? (
          <Check size={18} strokeWidth={2} aria-hidden="true" />
        ) : (
          <ShoppingCart size={18} strokeWidth={2} aria-hidden="true" />
        )}
        {added ? 'Added' : 'Add to cart'}
      </button>
      <span className="sr-only" role="status">
        {added ? `${product.title} added to cart` : ''}
      </span>
    </article>
  )
}
