import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { API_NAME } from '../constant'
import type { Product } from '../types'
import ProductCard from './ProductCard'
import { Container, buttonClass, formatRs } from './ui'

const categories = [
  'Disposable Medical Items',
  'Biomedical Disposable Items',
  'Dental Disposable Items',
  'Medical Devices',
  'Electronic Accessories for Biomedical Devices',
]

export default function MainSection({ searchQuery }: { searchQuery: string }) {
  const [products, setProducts] = useState<Product[]>([])
  const [failed, setFailed] = useState(false)
  useEffect(() => {
    axios
      .get<Product[]>(`${API_NAME}/api/product_details`)
      .then((r) => setProducts(r.data))
      .catch((err: unknown) => {
        console.log('ERROR', err)
        setFailed(true)
      })
  }, [])
  const q = searchQuery.trim().toLowerCase()
  const results = q ? products.filter((p) => p.title.toLowerCase().includes(q)) : []
  const featured = products[0]

  return (
    <>
      {q && (
        <Container className="pt-8">
          <h2>Results for &ldquo;{searchQuery}&rdquo;</h2>
          {results.length === 0 ? (
            <p className="mt-2 text-muted">No products match. Try a shorter name.</p>
          ) : (
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {results.map((p) => (
                <ProductCard product={p} key={p._id} />
              ))}
            </div>
          )}
        </Container>
      )}
      <section>
        <Container
          className={`grid items-center gap-8 py-10 md:py-16 ${failed ? '' : 'md:grid-cols-[1.1fr_0.9fr]'}`}
        >
          <div className="flex flex-col gap-5">
            <h1>Premium Surgical Equipment and Medical Devices</h1>
            <p className="text-lg text-muted">
              Nebulizers, instruments and disposables for hospitals, clinics and individual buyers.
              Prices in Rs, delivery across Pakistan.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/products" className={buttonClass('primary')}>
                Browse products
              </Link>
            </div>
          </div>
          {/* Opens with a real product on a pouch-shaped tile. Space is reserved so nothing shifts when it loads. */}
          {!failed && (
            <div className="bg-surface-sunken p-4 chamfer">
              {featured ? (
                <Link to={`/product-detail/${featured._id}`} className="block">
                  <img
                    src={featured.product_images[0]}
                    alt={featured.title}
                    width={560}
                    height={560}
                    className="aspect-square w-full object-contain"
                  />
                  <div className="mt-3 flex items-baseline justify-between gap-4">
                    <span className="font-semibold">{featured.title}</span>
                    <span className="tabular shrink-0 font-semibold">
                      {formatRs(featured.price)}
                    </span>
                  </div>
                </Link>
              ) : (
                <div aria-hidden="true" className="aspect-square w-full" />
              )}
            </div>
          )}
        </Container>
      </section>
      <nav aria-label="Shop by category" className="border-y border-line">
        <Container>
          <ul className="flex flex-col md:flex-row md:flex-wrap md:gap-x-8">
            {categories.map((c) => (
              <li key={c}>
                <Link
                  to="/products"
                  className="flex min-h-11 items-center font-medium hover:text-brand"
                >
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </>
  )
}
