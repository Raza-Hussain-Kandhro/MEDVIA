import { Helmet } from 'react-helmet'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'
import { API_NAME } from '../constant'
import type { Product } from '../types'
import ProductCard from '../components/ProductCard'
import { Container, ProductGridSkeleton } from '../components/ui'

const categories = [
  'Disposable Medical Items',
  'Biomedical Disposable Items',
  'Dental Disposable Items',
  'Medical Devices',
  'Electronic Accessories for Biomedical Devices',
]

export default function Products({ searchQuery }: { searchQuery: string }) {
  const [params] = useSearchParams()
  const initial = params.get('category') ?? ''
  const [products, setProducts] = useState<Product[]>([])
  const [category, setCategory] = useState(categories.includes(initial) ? initial : '')
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')
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
  const q = searchQuery.trim().toLowerCase()
  const shown = products.filter(
    (p) => p.title.toLowerCase().includes(q) && (category === '' || p.category === category),
  )

  return (
    <main id="main">
      <Helmet>
        <title>Products | MEDVIA</title>
        <meta
          name="description"
          content="Browse surgical instruments, medical devices and disposables from MEDVIA. Prices in Rs."
        />
      </Helmet>
      <Container className="py-8 md:py-12">
        <h1>Explore high-quality surgical and medical equipment</h1>
        <p className="mt-2 text-muted">Instruments, devices and disposables. Prices in Rs.</p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div className="sm:w-80">
            <label htmlFor="category" className="mb-1 block text-sm font-medium">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="min-h-11 w-full rounded-md border border-control bg-surface px-3"
            >
              <option value="">All categories</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          {status === 'ready' && (
            <p role="status" className="text-sm text-muted">
              {shown.length} {shown.length === 1 ? 'product' : 'products'}
            </p>
          )}
        </div>
        <div className="mt-6">
          {status === 'loading' && <ProductGridSkeleton />}
          {status === 'error' && (
            <p role="alert" className="text-danger">
              Products could not be loaded. Check your connection and reload the page.
            </p>
          )}
          {status === 'ready' && shown.length === 0 && (
            <p>No products match. Clear the search or choose another category.</p>
          )}
          {status === 'ready' && shown.length > 0 && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {shown.map((p) => (
                <ProductCard product={p} key={p._id} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </main>
  )
}
