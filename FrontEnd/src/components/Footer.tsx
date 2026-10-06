import { Link } from 'react-router-dom'
import { COMMIT_SHA } from '../constant/version'
import { Container, Wordmark } from './ui'

const groups = [
  { title: 'Shop', items: [{ to: '/products', label: 'All products' }, { to: '/your-cart', label: 'Cart' }] },
  { title: 'Company', items: [{ to: '/about-us', label: 'About' }, { to: '/our-features', label: 'Features' }, { to: '/blog', label: 'Blog' }, { to: '/contact', label: 'Contact' }] },
  { title: 'Legal', items: [{ to: '/terms-and-conditions', label: 'Terms and Conditions' }, { to: '/privacy-policy', label: 'Privacy Policy' }] },
]
export default function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-surface-sunken pb-24 pt-12 md:pb-12">
      <Container className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div>
          <Wordmark className="h-6 text-ink" />
          <p className="mt-4 text-sm text-muted">Surgical instruments, medical devices and disposables for hospitals, clinics and individual buyers. Delivery across Pakistan.</p>
          <a href="https://wa.me/923054440378" className="mt-4 inline-flex min-h-11 items-center font-semibold text-brand underline">Order on WhatsApp</a>
        </div>
        {groups.map((g) => (
          <nav key={g.title} aria-label={g.title}>
            <h2 className="text-base">{g.title}</h2>
            <ul className="mt-2">{g.items.map((i) => <li key={i.to}><Link to={i.to} className="flex min-h-11 items-center text-sm text-muted hover:text-brand">{i.label}</Link></li>)}</ul>
          </nav>
        ))}
      </Container>
      <Container className="mt-10 flex flex-wrap justify-between gap-2 text-sm text-muted"><span>&copy; {new Date().getFullYear()} MEDVIA. All rights reserved.</span><span>Version {COMMIT_SHA}</span></Container>
    </footer>
  )
}
