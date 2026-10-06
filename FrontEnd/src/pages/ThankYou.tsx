import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Container, buttonClass } from '../components/ui'

export default function ThankYou() {
  return (
    <main id="main">
      <Helmet><title>Order received | MEDVIA</title><meta name="robots" content="noindex" /></Helmet>
      <Container className="py-16 md:py-24">
        <h1>Thank you for your order</h1>
        <p className="mt-3 text-lg text-muted">Your order has been placed. We will notify you once it is shipped.</p>
        <Link to="/" className={buttonClass('primary', 'mt-6')}>Continue shopping</Link>
      </Container>
    </main>
  )
}
