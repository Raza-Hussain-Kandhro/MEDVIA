import { useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Products from './pages/Products'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import SingleProductDetail from './pages/SingleProductDetail'
import SingleBlog from './pages/SingleBlog'
import Cart from './pages/Cart'
import ThankYou from './pages/ThankYou'
import About from './pages/About'
import Features from './pages/Features'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import CreateBlog from './pages/BlogPost'

/** Hidden on the cart so it never covers the checkout button. */
function WhatsAppButton() {
  const { pathname } = useLocation()
  if (pathname === '/your-cart') return null
  return (
    <a href="https://wa.me/923054440378" aria-label="Chat with MEDVIA on WhatsApp"
      className="fixed bottom-4 right-4 z-30 flex min-h-12 items-center gap-2 rounded-full bg-brand px-4 font-semibold text-on-brand shadow-md hover:bg-brand-strong">
      <MessageCircle size={22} strokeWidth={2} aria-hidden="true" /><span className="hidden sm:inline">WhatsApp</span>
    </a>
  )
}
export default function App() {
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <BrowserRouter>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-surface focus:px-3 focus:py-2">Skip to content</a>
      <ScrollToTop />
      <Navbar setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/products" element={<Products searchQuery={searchQuery} />} />
        <Route path="/product-detail/:id" element={<SingleProductDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:title" element={<SingleBlog />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/your-cart" element={<Cart />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-features" element={<Features />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </BrowserRouter>
  )
}
