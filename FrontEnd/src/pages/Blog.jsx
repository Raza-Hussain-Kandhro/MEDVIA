import React, { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import axios from 'axios';
import { API_NAME } from "../constant/index.js";
import { Helmet } from 'react-helmet';
import LoadingSkeleton from '../components/LoadingSkeleton'; // You'll need to create this component
import { Link, useLocation } from 'react-router-dom';

const Blog = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [featuredPost, setFeaturedPost] = useState(null);

    useEffect(() => {
        axios
            .get(`${API_NAME}/api/all_blogs`)
            .then((result) => {
                setBlogs(result.data);
                // Set the first blog as featured post
                if (result.data.length > 0) {
                    setFeaturedPost(result.data[0]);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.log("ERROR", err);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <Helmet>
                <title>Medical Blog – Healthcare News & Surgical Innovations | Biova Surgicals</title>
                <meta
                    name="description"
                    content="Read the latest blogs from Biova Surgicals covering medical innovations, surgical instruments, healthcare trends, and tips for smarter procurement."
                />
                <meta
                    name="keywords"
                    content="Biova Surgicals blog, medical equipment news, surgical innovations, healthcare supply chain, biomedical blogs, procurement tips"
                />
                <link rel="canonical" href="https://biovasurgicals.com/blog" />

                <meta property="og:title" content="Medical Blog – Healthcare News & Surgical Innovations | Biova Surgicals" />
                <meta property="og:description" content="Explore expert insights and industry updates in medical supplies, surgical instruments, and healthcare technology." />
                <meta property="og:image" content="https://biovasurgicals.com/images/og-blog.jpg" />
                <meta property="og:url" content="https://biovasurgicals.com/blog" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Medical Blog – Healthcare News & Surgical Innovations | Biova Surgicals" />
                <meta name="twitter:description" content="Explore expert insights and industry updates in medical supplies, surgical instruments, and healthcare technology." />
                <meta name="twitter:image" content="https://biovasurgicals.com/images/og-blog.jpg" />
            </Helmet>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-[#02BBB6] to-teal-800 py-20">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 playfair">Biova Surgical Insights</h1>
                        <p className="text-xl text-gray-200 mb-8 lato">Discover the latest in medical technology, surgical innovations, and healthcare best practices</p>
                        <div className="relative max-w-md mx-auto">
                            <input
                                type="text"
                                placeholder="Search articles..."
                                className="w-full py-3 px-6 rounded-full bg-white bg-opacity-20 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
                            />
                            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {featuredPost && !loading && (
                <section className="py-12 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-2 text-sm font-semibold text-teal-600 bg-teal-100 rounded-full mb-4">Featured Post</span>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4 playfair">Editor's Pick</h2>
                            <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-5xl mx-auto">
                            <div className="md:flex">
                                <div className="md:w-1/2">
                                    <img
                                        src={featuredPost.blog_img}
                                        alt={featuredPost.blog_title}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-8 md:w-1/2">
                                    <div className="flex items-center mb-4">
                                        <span className="px-3 py-1 text-xs font-semibold text-teal-800 bg-teal-100 rounded-full mr-3">
                                            {featuredPost.tag}
                                        </span>
                                        <span className="text-sm text-gray-500">
                                            {new Date(featuredPost.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 playfair">
                                        <Link to={`/blog/${featuredPost.blog_title}`} className="hover:text-teal-600 transition-colors">
                                            {featuredPost.blog_title}
                                        </Link>
                                    </h3>
                                    <p className="text-gray-600 mb-6 lato">{featuredPost.description.slice(0, 150)}...</p>
                                    <Link
                                        to={`/blog/${featuredPost.blog_title}`}
                                        className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium transition-colors"
                                        aria-label={`Read featured post: ${featuredPost.blog_title}`}
                                    >
                                        Read full article
                                        <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Blog Grid */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 playfair">Latest Articles</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto lato">Stay updated with our newest content on medical advancements and industry insights</p>
                        <div className="w-20 h-1 bg-teal-500 mx-auto mt-4"></div>
                    </div>

                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[...Array(6)].map((_, i) => (
                                <LoadingSkeleton key={i} />
                            ))}
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {blogs.slice(1).map((blog, i) => (
                                    <BlogCard blog={blog} key={i} />
                                ))}
                            </div>


                        </>
                    )}
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#02BBB6] to-teal-600 rounded-xl shadow-lg p-8 md:p-12 text-center">
                        <h3 className="text-2xl font-bold text-white mb-4 playfair">Stay Updated With Our Newsletter</h3>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto lato">Get the latest medical insights, product updates, and exclusive offers directly to your inbox.</p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-grow px-4 py-3 rounded-lg border-black focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                            <button className="px-6 py-3 bg-white text-[#02BBB6] font-medium rounded-lg hover:bg-gray-100 transition-colors">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-blue-100 text-xs mt-4 lato">We respect your privacy. Unsubscribe at any time.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;