import React from 'react'
import MainSection from '../components/MainSection'
import BrandSection from '../components/BrandSection'
import FeaturedProducts from '../components/FeaturedProducts'
import Testimonials from '../components/Testimonials'
import ShopWithConfidence from '../components/ShopWithConfidence'

const Home = ({ searchQuery }) => {
    return (
        <main>
            <MainSection searchQuery={searchQuery} />
            <FeaturedProducts />
            <BrandSection />
            <Testimonials />
            <ShopWithConfidence />
        </main>
    )
}

export default Home
