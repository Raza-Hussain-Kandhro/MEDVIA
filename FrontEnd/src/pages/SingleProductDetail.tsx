import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import { Check, Minus, Plus } from 'lucide-react'
import { API_NAME } from '../constant'
import { addToCart } from '../features/cartSlice'
import type { Product } from '../types'
import Product_reviews_description from '../components/Product_reviews_description'
import { Badge, Container, buttonClass, formatRs } from '../components/ui'

export default function SingleProductDetail() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [products, setProducts] = useState<Product[]>([])
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  const [qty, setQty] = useState(1)
  const [img, setImg] = useState(0)
  const [added, setAdded] = useState(false)
  useEffect(() => {
    axios
      .get<Product[]>(`${API_NAME}/api/product_details`)
      .then((r) => {
        setProducts(r.data)
        setStatus('ready')
      })
      .catch((err: unknown) => {
        console.log('ERROR', err)
        setStatus('error')
      })
  }, [])

  const p = products.find((x) => x._id === id)
  if (status === 'loading')
    return (
      <Container className="py-12">
        <div aria-hidden="true" className="aspect-[4/3] max-w-xl bg-surface-sunken" />
        <p className="sr-only" role="status">
          Loading product
        </p>
      </Container>
    )
  if (status === 'error')
    return (
      <Container className="py-12">
        <p role="alert" className="text-danger">
          The product could not be loaded. Check your connection and reload the page.
        </p>
      </Container>
    )
  if (!p)
    return (
      <Container className="py-12">
        <h1>Product not found</h1>
        <Link to="/products" className={buttonClass('secondary', 'mt-4')}>
          Browse products
        </Link>
      </Container>
    )

  const reviewCount = p.reviews?.length ?? 0
  const discount =
    p.old_price && p.old_price > p.price ? Math.round((1 - p.price / p.old_price) * 100) : 0
  const add = () => {
    dispatch(addToCart({ ...p, quantity: qty }))
    setAdded(true)
  }
  const buyNow = () => {
    dispatch(addToCart({ ...p, quantity: qty }))
    navigate('/your-cart')
  }
  const ld: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.title,
    description: p.description || `${p.title} from MEDVIA`,
    brand: { '@type': 'Brand', name: 'MEDVIA' },
    image: p.product_images[img],
    offers: {
      '@type': 'Offer',
      url: window.location.href,
      priceCurrency: 'PKR',
      price: p.price,
      itemCondition: 'https://schema.org/NewCondition',
    },
  }
  if (reviewCount > 0 && p.averageRating)
    ld.aggregateRating = { '@type': 'AggregateRating', ratingValue: p.averageRating, reviewCount }
  const step =
    'flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-md border border-control hover:bg-surface-sunken'

  return (
    <main id="main">
      <Helmet>
        <title>{p.title} | MEDVIA</title>
        <meta
          name="description"
          content={p.description || `Buy ${p.title} from MEDVIA. Delivery across Pakistan.`}
        />
        <meta property="og:title" content={`${p.title} | MEDVIA`} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content={p.product_images[0]} />
        <script type="application/ld+json">{JSON.stringify(ld)}</script>
      </Helmet>
      <Container className="py-6 md:py-10">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap gap-x-2 text-sm text-muted">
            <li>
              <Link to="/" className="hover:text-brand">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                to={`/products?category=${encodeURIComponent(p.category ?? '')}`}
                className="hover:text-brand"
              >
                {p.category}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-ink">
              {p.title}
            </li>
          </ol>
        </nav>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="chamfer bg-surface-sunken p-4">
              <img
                src={p.product_images[img]}
                alt={p.title}
                width={640}
                height={640}
                className="aspect-square w-full object-contain"
              />
            </div>
            {p.product_images.length > 1 && (
              <ul className="mt-3 flex gap-2 overflow-x-auto">
                {p.product_images.map((src, i) => (
                  <li key={src + i}>
                    <button
                      type="button"
                      aria-label={`Show image ${i + 1} of ${p.product_images.length}`}
                      aria-pressed={i === img}
                      onClick={() => setImg(i)}
                      className={`block h-20 w-20 cursor-pointer overflow-hidden rounded-md border-2 bg-surface-sunken ${i === img ? 'border-brand' : 'border-transparent'}`}
                    >
                      <img
                        src={src}
                        alt=""
                        width={80}
                        height={80}
                        loading="lazy"
                        className="h-full w-full object-contain"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex flex-col gap-5">
            <div>
              {p.category && <Badge>{p.category}</Badge>}
              <h1 className="mt-2">{p.title}</h1>
              <p className="mt-1 text-sm text-muted">
                {reviewCount} {reviewCount === 1 ? 'review' : 'reviews'}
              </p>
            </div>
            <div className="flex flex-wrap items-baseline gap-3">
              <span className="tabular text-3xl font-bold">{formatRs(p.price)}</span>
              {discount > 0 && p.old_price && (
                <>
                  <span className="tabular text-lg text-muted line-through">
                    {formatRs(p.old_price)}
                  </span>
                  <Badge tone="success">Save {discount}%</Badge>
                </>
              )}
            </div>
            <div className="flex items-center gap-3">
              <span id="qty-label" className="font-medium">
                Quantity
              </span>
              <button
                type="button"
                aria-label="Decrease quantity"
                disabled={qty === 1}
                onClick={() => setQty(qty - 1)}
                className={step}
              >
                <Minus size={18} strokeWidth={2} aria-hidden="true" />
              </button>
              <span
                aria-labelledby="qty-label"
                role="status"
                className="tabular w-8 text-center text-lg"
              >
                {qty}
              </span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQty(qty + 1)}
                className={step}
              >
                <Plus size={18} strokeWidth={2} aria-hidden="true" />
              </button>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={buyNow}
                className={buttonClass('primary', 'sm:flex-1')}
              >
                Buy now
              </button>
              <button type="button" onClick={add} className={buttonClass('secondary', 'sm:flex-1')}>
                {added && <Check size={18} strokeWidth={2} aria-hidden="true" />}
                {added ? 'Added to cart' : 'Add to cart'}
              </button>
            </div>
            <ul className="space-y-1 text-sm text-muted">
              <li>Delivery across Pakistan. The fee is shown by province at checkout.</li>
              <li>
                <a
                  className="font-medium text-brand underline"
                  href={`https://wa.me/923054440378?text=${encodeURIComponent(`Hello, I have a question about ${p.title}`)}`}
                >
                  Ask about this product on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Product_reviews_description single_product={p} />
      </Container>
    </main>
  )
}
