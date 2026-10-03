import Navbar from './components/Navbar'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Products from "./pages/Products.jsx"
import Blog from "./pages/Blog.jsx"
import Contact from "./pages/Contact.jsx"
import SingleProductDetail from './pages/SingleProductDetail.jsx';
import Footer from './components/Footer.jsx';
import SingleBlog from './pages/SingleBlog.jsx';
import Cart from './pages/Cart.jsx';
import ThankYou from './pages/ThankYou.jsx';
import { useState } from 'react';
import About from './pages/About.jsx';
import Features from './pages/Features.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsAndConditions from './pages/TermsAndConditions.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import CreateBlog from './pages/BlogPost.jsx';

function App() {

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/products" element={<Products searchQuery={searchQuery} />} />
        <Route path="/product-detail/:id" element={<SingleProductDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:title" element={<SingleBlog />} />
        <Route path="/create-blog" element={<CreateBlog/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/your-cart" element={<Cart />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-features" element={<Features />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
      <Link to="https://wa.me/03054440378">
        <img
          src="/Home/whatsApp.png"
          alt="WhatsApp Icon"
          className="fixed bottom-[25px] right-[25px] w-[65px] z-[9999] cursor-pointer"
        />
      </Link>
      <Footer />
    </BrowserRouter>
  )
}

export default App
