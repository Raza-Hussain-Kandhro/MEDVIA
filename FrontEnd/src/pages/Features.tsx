import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Container, PageHeader, buttonClass } from '../components/ui'

const groups = [
  { t: 'Premium-quality products', i: ['ISO, CE, FDA-compliant for safety and reliability', 'Sourced from trusted manufacturers with proven track records', 'Rigorously tested by our biomedical engineering team'] },
  { t: 'Competitive pricing', i: ['Best market prices by eliminating middlemen', 'Bulk and subscription discounts for partners', 'Transparent pricing with no hidden costs'] },
  { t: 'Digital procurement', i: ['User-friendly e-catalog with real-time inventory', 'Advanced search and filters for instant product discovery', 'Mobile-optimized for orders on the go'] },
  { t: 'Reliable logistics', i: ['Fast, tracked shipping nationwide', 'Eco-friendly packaging to reduce waste', '24/7 customer support for urgent needs'] },
]
export default function Features() {
  return (
    <main id="main">
      <Helmet><title>Features | MEDVIA</title><meta name="description" content="What MEDVIA offers: quality products, competitive pricing, digital procurement and reliable logistics." /></Helmet>
      <PageHeader title="The MEDVIA advantage" lead="Redefining medical procurement with engineered excellence and digital innovation." />
      <Container className="py-10 md:py-14">
        <p>At MEDVIA, we do not just supply medical products, we engineer solutions that transform healthcare procurement. Our platform combines cutting-edge technology with biomedical expertise to deliver unmatched value.</p>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {groups.map((g) => (
            <section key={g.t} className="grid gap-3 py-6 md:grid-cols-[1fr_2fr]"><h2 className="text-xl">{g.t}</h2><ul className="list-disc space-y-2 pl-5">{g.i.map((x) => <li key={x}>{x}</li>)}</ul></section>
          ))}
        </div>
        <h2 className="mt-12">Ready to see the difference?</h2>
        <p className="mt-2 text-muted">For hospitals, clinics and individual healthcare providers.</p>
        <div className="mt-5 flex flex-wrap gap-3"><Link to="/products" className={buttonClass('primary')}>Explore catalog</Link><Link to="/contact" className={buttonClass('secondary')}>Contact sales</Link></div>
      </Container>
    </main>
  )
}
