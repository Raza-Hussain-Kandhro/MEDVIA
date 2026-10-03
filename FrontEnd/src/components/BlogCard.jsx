import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BlogCard = ({ blog }) => {
    const getFormattedDate = () => {
        try {
            return blog?.date
                ? new Date(blog.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                })
                : '';
        } catch {
            return '';
        }
    };

    const getBlogSlug = () => {
        if (blog?.slug) return blog.slug;
        if (blog?.blog_title) {
            return blog.blog_title
                .toLowerCase()
                .replace(/[^\w\s]/gi, '')
                .replace(/\s+/g, '-');
        }
        return '';
    };

    return (
        <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col bg-white border border-gray-100 hover:border-teal-100">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

            {/* Image container with hover zoom effect */}
            <div className="relative h-60 overflow-hidden rounded-t-2xl">
                <Link to={`/blog/${blog.blog_title}`} className="block h-full">
                    <img
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                        src={blog?.blog_img || '/default-blog-image.jpg'}
                        alt={blog?.img_alt || blog?.blog_title || 'Blog post image'}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/default-blog-image.jpg';
                        }}
                    />
                </Link>

                {/* Tag with modern style */}
                {blog?.tag && (
                    <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 text-xs font-bold tracking-wider text-white uppercase bg-gradient-to-r from-teal-500 to-teal-600 rounded-full shadow-md">
                            {blog.tag}
                        </span>
                    </div>
                )}

                {/* Date overlay */}
                {blog?.date && (
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-sm">
                        <span className="text-xs font-medium text-gray-700">
                            {getFormattedDate()}
                        </span>
                    </div>
                )}
            </div>

            {/* Content area */}
            <div className="p-6 flex-grow flex flex-col z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors duration-300">
                    <Link to={`/blog/${getBlogSlug()}`} className="hover:underline decoration-2 underline-offset-4">
                        {blog?.blog_title || 'Untitled Blog Post'}
                    </Link>
                </h3>

                <p className="text-gray-600 mb-5 line-clamp-3 leading-relaxed">
                    {blog?.description || 'No description available'}
                </p>

                <div className="mt-auto">
                    <Link
                        to={`/blog/${blog.blog_title}`}
                        className="inline-flex items-center font-semibold text-teal-600 hover:text-teal-800 transition-colors group/readmore"
                    >
                        <span className="mr-2 group-hover/readmore:mr-3 transition-all duration-300">
                            Read full article
                        </span>
                        <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover/readmore:translate-x-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Hover effect element */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
    );
};

BlogCard.propTypes = {
    blog: PropTypes.shape({
        blog_title: PropTypes.string,
        blog_img: PropTypes.string,
        tag: PropTypes.string,
        date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
        description: PropTypes.string,
        slug: PropTypes.string,
        img_alt: PropTypes.string
    }).isRequired
};

export default BlogCard;