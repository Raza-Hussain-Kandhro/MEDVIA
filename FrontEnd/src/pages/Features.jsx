import React from 'react';
import { Helmet } from 'react-helmet';
import { Check, Truck, Shield, ShoppingCart, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
    return (
        <>
            <Helmet>
                <title>Biova Surgicals Features | Premium Medical Supply Solutions</title>
                <meta
                    name="description"
                    content="Discover Biova Surgicals' key features: certified medical products, competitive pricing, seamless digital procurement, and innovative healthcare supply solutions."
                />
                <meta
                    name="keywords"
                    content="medical supply features, healthcare procurement, certified surgical instruments, hospital supplies, medical equipment distributor, biomedical products"
                />
                <link rel="canonical" href="https://www.biovasurgicals.com/our-features" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Biova Surgicals Features | Premium Medical Supply Solutions" />
                <meta property="og:description" content="Explore our innovative medical supply platform designed for healthcare professionals." />
                <meta property="og:image" content="https://www.biovasurgicals.com/images/features-og.jpg" />
                <meta property="og:url" content="https://www.biovasurgicals.com/our-features" />
            </Helmet>

            <section className="bg-gradient-to-r from-teal-700 to-[#02BBB6] py-16 text-white">
                <div className="container mx-auto px-4 max-w-6xl text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 playfair leading-tight">
                        The Biova Surgical Advantage
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto lato leading-relaxed">
                        Redefining medical procurement with engineered excellence and digital innovation
                    </p>
                </div>
            </section>

            <main className="container mx-auto px-4 py-12 max-w-6xl">

                <section className="mb-16 bg-white rounded-xl shadow-md p-8">
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed lato">
                        At Biova Surgicals, we don't just supply medical products—we engineer solutions that transform healthcare procurement. Our platform combines cutting-edge technology with biomedical expertise to deliver unmatched value.
                    </p>
                </section>

                <div className="grid md:grid-cols-2 gap-8 mb-16">

                    <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-teal-500 hover:shadow-xl transition-shadow">
                        <div className="flex items-center mb-4">
                            <Shield className="text-teal-600 w-8 h-8 mr-4" />
                            <h2 className="text-2xl font-bold text-gray-800 playfair">Premium-Quality Products</h2>
                        </div>
                        <ul className="space-y-3 text-gray-600 lato">
                            <li className="flex items-start">
                                <Check className="text-teal-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                                <span><b>Certified</b>: ISO, CE, FDA-compliant for safety and reliability</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="text-teal-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                                <span><b>Sourced from trusted manufacturers</b> with proven track records</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="text-teal-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                                <span><b>Rigorously tested</b> by our biomedical engineering team</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-amber-500 hover:shadow-xl transition-shadow">
                        <div className="flex items-center mb-4">
                            <ShoppingCart className="text-amber-600 w-8 h-8 mr-4" />
                            <h2 className="text-2xl font-bold text-gray-800 playfair">Competitive Pricing</h2>
                        </div>
                        <ul className="space-y-3 text-gray-600 lato">
                            <li className="flex items-start">
                                <Check className="text-amber-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                                <span><b>Best market prices</b> by eliminating middlemen</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="text-amber-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                                <span><b>Bulk and subscription discounts</b> for partners</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="text-amber-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                                <span><b>Transparent pricing</b> with no hidden costs</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
                        <div className="flex items-center mb-4">
                            <Zap className="text-blue-600 w-8 h-8 mr-4" />
                            <h2 className="text-2xl font-bold text-gray-800 playfair">Digital Procurement</h2>
                        </div>
                        <ul className="space-y-3 text-gray-600 lato">
                            <li className="flex items-start">
                                <Check className="text-blue-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                                <span><b>User-friendly e-catalog</b> with real-time inventory</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="text-blue-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                                <span><b>Advanced search & filters</b> for instant product discovery</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="text-blue-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                                <span><b>Mobile-optimized</b> for orders on the go</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-emerald-500 hover:shadow-xl transition-shadow">
                        <div className="flex items-center mb-4">
                            <Truck className="text-emerald-600 w-8 h-8 mr-4" />
                            <h2 className="text-2xl font-bold text-gray-800 playfair">Reliable Logistics</h2>
                        </div>
                        <ul className="space-y-3 text-gray-600 lato">
                            <li className="flex items-start">
                                <Check className="text-emerald-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                                <span><b>Fast, tracked shipping</b> nationwide</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="text-emerald-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                                <span><b>Eco-friendly packaging</b> to reduce waste</span>
                            </li>
                            <li className="flex items-start">
                                <Check className="text-emerald-500 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                                <span><b>24/7 customer support</b> for urgent needs</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <section className="bg-gradient-to-r from-[#018f8a] to-[#02BBB6] rounded-xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 playfair">Ready to Experience the Difference?</h2>
                    <p className="text-xl max-w-3xl mx-auto lato mb-8 leading-relaxed">
                        Join hundreds of healthcare providers who trust Biova Surgicals for their medical supply needs.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/products">
                            <button className="bg-white text-[#02BBB6] hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors">
                                Explore Catalog
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="border-2 border-white text-white hover:bg-white hover:text-teal-600 font-medium py-3 px-8 rounded-lg transition-colors">
                                Contact Sales
                            </button>
                        </Link>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Features;