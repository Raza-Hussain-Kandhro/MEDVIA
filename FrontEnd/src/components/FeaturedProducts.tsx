import { useEffect, useState } from 'react'
import axios from 'axios'
import { API_NAME } from '../constant'
import type { Product } from '../types'
import ProductCard from './ProductCard'
import { Section } from './ui'

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    axios.get<Product[]>(`${API_NAME}/api/product_details`).then((r) => setProducts(r.data)).catch((err: unknown) => console.log('ERROR', err))
  }, [])
  const featured = products.filter((p) => p.feature_product === 'true')
  if (featured.length === 0) return null
  return (
    <Section>
      <h2>Featured products</h2>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{featured.map((p) => <ProductCard product={p} key={p._id} />)}</div>
    </Section>
  )
}
