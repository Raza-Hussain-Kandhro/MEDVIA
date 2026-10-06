import { Helmet } from 'react-helmet'
import MainSection from '../components/MainSection'
import FeaturedProducts from '../components/FeaturedProducts'
import { Section } from '../components/ui'

const notes = [
  {
    t: 'Order support on WhatsApp',
    d: 'Ask about a product, a bulk quantity or an order, and get an answer from the seller directly.',
  },
  {
    t: 'Delivery across Pakistan',
    d: 'The delivery fee is shown by province at checkout, before you place the order.',
  },
  { t: 'Bulk and custom orders', d: 'For hospitals, clinics and individual healthcare providers.' },
]
export default function Home({ searchQuery }: { searchQuery: string }) {
  return (
    <main id="main">
      <Helmet>
        <title>MEDVIA - Surgical and Medical Equipment in Pakistan</title>
        <meta
          name="description"
          content="Surgical instruments, medical devices and disposables for hospitals, clinics and individual buyers. Prices in Rs, delivery across Pakistan."
        />
      </Helmet>
      <MainSection searchQuery={searchQuery} />
      <FeaturedProducts />
      <Section>
        <h2>How ordering works</h2>
        <dl className="mt-6 grid gap-x-12 gap-y-6 md:grid-cols-2">
          {notes.map((n) => (
            <div key={n.t}>
              <dt className="font-semibold">{n.t}</dt>
              <dd className="text-muted">{n.d}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </main>
  )
}
