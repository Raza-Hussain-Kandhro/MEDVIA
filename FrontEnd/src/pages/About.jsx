import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Award, HeartPulse, ShieldCheck, Target } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const About = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <Helmet>
                <title>About Biova Surgicals – Trusted Medical & Biomedical Supplier</title>
                <meta
                    name="description"
                    content="Learn about Biova Surgicals, a reliable supplier of certified medical and biomedical products. Founded by biomedical engineers, our mission is to deliver quality, innovation, and affordability to the healthcare industry."
                />
                <meta
                    name="keywords"
                    content="Biova Surgicals, About Us, Medical Supplier Pakistan, Biomedical Products, Surgical Instruments, Lab Equipment, Diagnostic Devices, Medical Procurement"
                />
                <link rel="canonical" href="https://www.biovasurgicals.com/about-us" />

                {/* Open Graph */}
                <meta property="og:title" content="About Biova Surgicals – Trusted Medical & Biomedical Supplier" />
                <meta property="og:description" content="Discover how Biova Surgicals is redefining healthcare supply with innovative, reliable, and cost-effective solutions." />
                <meta property="og:image" content="https://www.biovasurgicals.com/images/og-image.jpg" />
                <meta property="og:url" content="https://www.biovasurgicals.com/about" />
                <meta property="og:type" content="website" />
            </Helmet>

            <section className="relative bg-gradient-to-r from-teal-800 to-cyan-700 py-20 text-white">
                <div className="container mx-auto px-4 max-w-6xl text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 playfair leading-tight">
                        About Biova Surgicals
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto lato leading-relaxed">
                        Engineering precision meets healthcare excellence in medical supply solutions
                    </p>
                </div>
            </section>

            <main className="container mx-auto px-4 py-12 max-w-6xl">
                {/* Introduction */}
                <section className="mb-16">
                    <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
                        <p className="text-gray-700 text-lg md:text-xl leading-relaxed lato">
                            In a rapidly evolving healthcare landscape, finding a dependable supplier for medical and biomedical products can be a challenge. At Biova Surgicals, we combine engineering precision with healthcare expertise to deliver products that meet the highest industry standards.
                        </p>
                    </div>
                </section>

                <section className="mb-16 grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-1 bg-teal-600 mr-4"></div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 playfair">Our Story</h2>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed lato mb-6">
                            Founded in 2024 by three passionate biomedical engineers, Biova Surgicals was built on a vision to redefine the medical and biomedical supply industry. With expertise in the field, we recognized the challenges healthcare professionals face in sourcing reliable, high-quality supplies at competitive prices.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed lato">
                            That's why we took on the mission to bridge this gap—offering affordable, premium-grade products while ensuring an effortless digital purchasing experience.
                        </p>
                    </div>
                    <div className="bg-gray-100 rounded-xl h-64 md:h-80 flex items-center justify-center">
                        {/* <span className="text-gray-400">Founders Image/Illustration</span> */}
                        <img src="https://github.com/ABDULMOIZGHANI/Images/blob/main/BIOVA%20SURGICALS%20IMAGE/BLOG/surgery-1807541_1280%201.png?raw=true" className="h-[100%] w-[100%] rounded-xl" alt="" />
                    </div>
                </section>

                {/* Mission & Vision Cards */}
                <section className="mb-16">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Vision Card */}
                        <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-teal-600">
                            <div className="flex items-center mb-6">
                                <Target className="text-teal-600 w-8 h-8 mr-4" />
                                <h3 className="text-2xl font-bold text-gray-800 playfair">Our Vision</h3>
                            </div>
                            <ul className="space-y-4 text-gray-600 lato">
                                <li className="flex items-start">
                                    <span className="text-teal-600 mr-2">•</span>
                                    Offering the best market prices without compromising quality
                                </li>
                                <li className="flex items-start">
                                    <span className="text-teal-600 mr-2">•</span>
                                    Modernizing the industry through digital solutions
                                </li>
                                <li className="flex items-start">
                                    <span className="text-teal-600 mr-2">•</span>
                                    Bringing innovation to enhance medical supply chains
                                </li>
                            </ul>
                        </div>

                        {/* Mission Card */}
                        <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-cyan-600">
                            <div className="flex items-center mb-6">
                                <HeartPulse className="text-cyan-600 w-8 h-8 mr-4" />
                                <h3 className="text-2xl font-bold text-gray-800 playfair">Our Mission</h3>
                            </div>
                            <ul className="space-y-4 text-gray-600 lato">
                                <li className="flex items-start">
                                    <span className="text-cyan-600 mr-2">•</span>
                                    <span className="font-medium">Delivering Excellence:</span> Providing certified, high-quality medical supplies
                                </li>
                                <li className="flex items-start">
                                    <span className="text-cyan-600 mr-2">•</span>
                                    <span className="font-medium">Ensuring Accessibility:</span> Simple, fast online procurement
                                </li>
                                <li className="flex items-start">
                                    <span className="text-cyan-600 mr-2">•</span>
                                    <span className="font-medium">Driving Innovation:</span> Revolutionizing the biomedical industry
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Future Section */}
                <section className="mb-16 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-8 md:p-12">
                    <div className="flex items-center mb-6">
                        <ShieldCheck className="text-teal-600 w-8 h-8 mr-4" />
                        <h2 className="text-3xl font-bold text-gray-800 playfair">The Future of Medical Supply</h2>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed lato">
                        We believe the future of medical supplies is smart, digital, and efficient. Our goal is to blend technology with traditional sales, offering a seamless shopping experience while continuing to introduce cutting-edge solutions that shape the industry.
                    </p>
                </section>

                <section className="text-center py-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 playfair mb-6">Join Us on This Journey</h2>
                    <p className="text-gray-600 text-xl max-w-3xl mx-auto lato mb-8 leading-relaxed">
                        At Biova Surgicals, every order represents a step toward better healthcare delivery. Whether you're a surgeon, lab technician, or hospital administrator, we're here to simplify your supply chain.
                    </p>
                    <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
                        Explore Our Catalog
                    </button>
                </section>
            </main>
        </>
    )
}

export default About