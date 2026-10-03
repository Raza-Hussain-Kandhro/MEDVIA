import React from 'react'
import MainButton from './MainButton'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <section className="py-10 bg-[#DEFDFC] sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10 gap-y-12 gap-x-8 xl:gap-x-12">
                    <div className="col-span-2 md:col-span-4 xl:pr-8">
                        <img className="w-auto h-16" src="/Navbar Images/BIOVA SURGICAL LOGO.png" alt="" />

                        <h1 className='playfair text-[20px] font-semibold mt-[20px]'>Stay Connected with Biova Surgicals</h1>
                        <p className="text-base leading-relaxed text-gray-600 lato">Your Trusted Partner in Medical & Surgical Supplies!</p>

                        <Link to="/products">
                            <div className='mt-[30px]'>
                                <MainButton value="Explore Collection" />
                            </div>
                        </Link>
                    </div>

                    <div className="lg:col-span-2">
                        <p className="text-base font-semibold text-gray-900">Company</p>

                        <ul className="mt-6 space-y-5">
                            <li>
                                <Link to="/about-us" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#02BBB6] focus:text-[#02BBB6]"> About </Link>
                            </li>

                            <li>
                                <Link to="/our-features" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#02BBB6] focus:text-[#02BBB6]"> Features </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <p className="text-base font-semibold text-gray-900">Help</p>

                        <ul className="mt-6 space-y-4">
                            <li>
                                <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#02BBB6] focus:text-[#02BBB6]"> Customer Support </a>
                            </li>

                            <li>
                                <Link to="/terms-and-conditions" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#02BBB6] focus:text-[#02BBB6]"> Terms & Conditions </Link>
                            </li>

                            <li>
                                <Link to="/privacy-policy" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#02BBB6] focus:text-[#02BBB6]"> Privacy Policy </Link>
                            </li>
                        </ul>
                    </div>

                    {/* <div className="lg:col-span-2">
                        <p className="text-base font-semibold text-gray-900">Resources</p>

                        <ul className="mt-6 space-y-5">
                            <li>
                                <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#02BBB6] focus:text-[#02BBB6]"> Free eBooks </a>
                            </li>

                            <li>
                                <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#02BBB6] focus:text-[#02BBB6]"> Development Tutorial </a>
                            </li>

                            <li>
                                <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#02BBB6] focus:text-[#02BBB6]"> How to - Blog </a>
                            </li>

                            <li>
                                <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#02BBB6] focus:text-[#02BBB6]"> YouTube Playlist </a>
                            </li>
                        </ul>
                    </div> */}

                    <div className="lg:col-span-2">
                        <p className="text-base font-semibold text-gray-900">Extra Links</p>

                        <ul className="mt-6 space-y-5">
                            <li>
                                <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#02BBB6] focus:text-[#02BBB6]"> Customer Support </a>
                            </li>

                            <li>
                                <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#02BBB6] focus:text-[#02BBB6]"> Delivery Details </a>
                            </li>

                            <li>
                                <Link to="/terms-and-conditions" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#02BBB6] focus:text-[#02BBB6]"> Terms & Conditions </Link>
                            </li>

                            <li>
                                <Link to="/privacy-policy" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-[#02BBB6] focus:text-[#02BBB6]"> Privacy Policy </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="mt-16 mb-10 border-gray-200" />

                <div className="sm:flex sm:items-center sm:justify-between">
                    <p className="text-sm text-gray-600">© Copyright 2025, All Rights Reserved by Biova Surgicals</p>

                    <ul className="flex items-center mt-5 space-x-3 md:order-3 sm:mt-0">


                        <li>
                            <Link
                                to="https://www.facebook.com/profile.php?id=61560562255196"
                                title=""
                                target="_blank"
                                className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-[#02BBB6] hover:text-white focus:text-white hover:bg-[#02BBB6] hover:border-[#02BBB6] focus:border-[#02BBB6]"
                            >
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                </svg>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="https://www.instagram.com/biovasurgicals/"
                                target='_blank'
                                title=""
                                className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-[#02BBB6] hover:text-white focus:text-white hover:bg-[#02BBB6] hover:border-[#02BBB6] focus:border-[#02BBB6]"
                            >
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                    <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                    <path
                                        d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                                    ></path>
                                </svg>
                            </Link>
                        </li>


                    </ul>
                </div>
            </div>
        </section>

    )
}

export default Footer
