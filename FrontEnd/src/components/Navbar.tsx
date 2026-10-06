import { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Menu, Search, ShoppingCart, X } from 'lucide-react'
import { Container, Wordmark } from './ui'

const links = [
  { to: '/', label: 'Home' }, { to: '/products', label: 'Products' },
  { to: '/blog', label: 'Blog' }, { to: '/contact', label: 'Contact' },
]
const linkClass = ({ isActive }: { isActive: boolean }) =>
  `flex min-h-11 items-center px-3 font-medium hover:text-brand ${isActive ? 'text-brand' : 'text-ink'}`

export default function Navbar({ setSearchQuery }: { setSearchQuery: (q: string) => void }) {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])
  const count = useSelector((s: { cart: { totalQuantity: number } }) => s.cart.totalQuantity)

  const search = (
    <form role="search" className="flex w-full md:w-64" onSubmit={(e) => { e.preventDefault(); navigate('/products') }}>
      <label htmlFor="site-search" className="sr-only">Search products</label>
      <input id="site-search" type="search" placeholder="Search products" onChange={(e) => setSearchQuery(e.target.value)}
        className="min-h-11 w-full rounded-l-md border border-r-0 border-control bg-surface px-3" />
      <button type="submit" aria-label="Search" className="flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-r-md bg-brand text-on-brand hover:bg-brand-strong">
        <Search size={20} strokeWidth={2} aria-hidden="true" />
      </button>
    </form>
  )

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link to="/" aria-label="MEDVIA home" className="flex min-h-11 items-center text-ink"><Wordmark className="h-6" /></Link>
        <nav aria-label="Primary" className="hidden md:block"><ul className="flex">{links.map((l) => <li key={l.to}><NavLink to={l.to} end={l.to === '/'} className={linkClass}>{l.label}</NavLink></li>)}</ul></nav>
        <div className="flex items-center gap-2">
          <div className="hidden md:block">{search}</div>
          <Link to="/your-cart" aria-label={`Cart, ${count} items`} className="relative flex min-h-11 min-w-11 items-center justify-center rounded-md hover:bg-surface-sunken">
            <ShoppingCart size={24} strokeWidth={2} aria-hidden="true" />
            {count > 0 && <span className="absolute right-0 top-0 min-w-5 rounded-full bg-brand px-1 text-center text-xs font-semibold text-on-brand">{count}</span>}
          </Link>
          <button type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(!open)} className="flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-md hover:bg-surface-sunken md:hidden">
            {open ? <X size={24} strokeWidth={2} aria-hidden="true" /> : <Menu size={24} strokeWidth={2} aria-hidden="true" />}
          </button>
        </div>
      </Container>
      {/* Always mounted so an open/close mid-transition reverses smoothly. Transform + opacity only. */}
      <div id="mobile-menu" inert={!open}
        className={`absolute inset-x-0 top-full origin-top border-b border-line bg-surface md:hidden transition-[opacity,transform,visibility] ease-out motion-reduce:translate-y-0 ${open ? 'visible translate-y-0 opacity-100 duration-(--duration-menu)' : 'invisible -translate-y-2 opacity-0 duration-(--duration-press)'}`}>        <Container className="py-3">
          <div className="mb-3">{search}</div>
          <ul>{links.map((l) => <li key={l.to}><NavLink to={l.to} end={l.to === '/'} onClick={() => setOpen(false)} className={linkClass}>{l.label}</NavLink></li>)}</ul>
        </Container>
      </div>
    </header>
  )
}
