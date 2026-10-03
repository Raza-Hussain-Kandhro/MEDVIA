import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import { API_NAME } from "../constant/index.js";
import LoadingSkeleton from "../components/LoadingSkeleton";

const SingleBlog = () => {
    const { title } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const response = await axios.get(`${API_NAME}/api/all_blogs`);
                const allBlogs = response.data;

                const foundBlog = allBlogs.find(b =>
                    b.blog_title.toLowerCase() === title.toLowerCase()
                );

                if (foundBlog) {
                    setBlog(foundBlog);

                    const related = allBlogs.filter(b =>
                        b.tag === foundBlog.tag &&
                        b.blog_title !== foundBlog.blog_title
                    ).slice(0, 3);
                    setRelatedPosts(related);
                }

                setLoading(false);
            } catch (err) {
                console.error("ERROR", err);
                setLoading(false);
            }
        };

        fetchBlogData();
    }, [title]);

    if (loading) {
        return (
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
                <LoadingSkeleton />
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Blog Not Found</h1>
                <p className="text-gray-600 mb-6">We couldn't find the blog post you're looking for.</p>
                <Link
                    to="/blog"
                    className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
                >
                    Back to Blog
                </Link>
            </div>
        );
    }

    const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    return (
        <>
            <Helmet>
                <title>{`${blog.blog_title} | Biova Surgical Blog`}</title>
                <meta name="description" content={blog.description} />
                <meta name="keywords" content={`${blog.tag}, ${blog.blog_title}, medical blog, surgical innovations`} />
                <link rel="canonical" href={`https://biovasurgicals.com/blog/${title}`} />

                <meta property="og:type" content="article" />
                <meta property="og:title" content={blog.blog_title} />
                <meta property="og:description" content={blog.description} />
                <meta property="og:image" content={blog.blog_img} />
                <meta property="og:url" content={`https://biovasurgicals.com/blog/${title}`} />
                <meta property="og:site_name" content="Biova Surgical" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={blog.blog_title} />
                <meta name="twitter:description" content={blog.description} />
                <meta name="twitter:image" content={blog.blog_img} />
            </Helmet>

            <article className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

                <nav className="flex mb-8" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2">
                        <li className="inline-flex items-center">
                            <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-teal-600">
                                Home
                            </Link>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <Link to="/blog" className="ml-1 text-sm font-medium text-gray-700 hover:text-teal-600 md:ml-2">Blog</Link>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">{blog.blog_title}</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <header className="mb-12 text-center">
                    <div className="flex justify-center mb-6">
                        <span className="px-4 py-2 text-sm font-semibold tracking-wider text-teal-800 bg-teal-100 rounded-full">
                            {blog.tag}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        {blog.blog_title}
                    </h1>
                    <div className="flex items-center justify-center space-x-4 text-gray-500">
                        <time dateTime={new Date(blog.date).toISOString()} className="text-sm">
                            Published on {formattedDate}
                        </time>
                        <span>•</span>
                        <span className="text-sm">5 min read</span>
                    </div>
                </header>

                <div className="mb-12 rounded-xl overflow-hidden shadow-lg w-[95%] md:w-[70%] m-auto">
                    <img
                        src={blog.blog_img}
                        alt={blog.img_alt || blog.blog_title}
                        className="w-full h-auto object-cover"
                        loading="eager"
                    />
                </div>

                <div className="prose prose-lg max-w-none mx-auto w-[95%] md:w-[80%] m-auto">
                    <p className="text-[18px] text-gray-600 leading-relaxed mb-8">
                        {blog.description}
                    </p>

                    <div className="text-[18px] text-gray-600 leading-relaxed mb-8">
                        {blog.second_description && (
                            <p>{blog.second_description}</p>
                        )}

                        {blog.content && (
                            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                        )}
                    </div>
                </div>

                {/* Author Bio (optional) */}
                <div className="mt-16 p-6 bg-gray-50 rounded-xl flex items-center">
                    <div className="mr-4">
                        <img
                            src="/Navbar Images/BIOVA SURGICAL LOGO.png"
                            alt="Author"
                            className="w-10 object-cover"
                        />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900">Biova Surgical Team</h4>
                        <p className="text-gray-600 text-sm">Our team of medical experts shares insights on surgical innovations and healthcare advancements.</p>
                    </div>
                </div>


                {/* Back to Blog Link */}
                <div className="mt-16 text-center">
                    <Link
                        to="/blog"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors"
                    >
                        <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        Back to Blog
                    </Link>
                </div>
            </article>
        </>
    );
};

export default SingleBlog;