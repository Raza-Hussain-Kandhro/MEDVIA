import React, { useEffect, useState } from "react";
import { API_NAME } from "../constant/index.js";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addToCart } from "../features/cartSlice";
import { Helmet } from "react-helmet";
import Product_reviews_description from "../components/Product_reviews_description.jsx";

const SingleProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState(1);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Track selected image index

    useEffect(() => {
        axios
            .get(`${API_NAME}/api/product_details`)
            .then((result) => {
                setProducts(result.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log("ERROR", err);
                setLoading(false);
            });
    }, []);

    const decrementValue = () => {
        setValue((prevValue) => (prevValue > 1 ? prevValue - 1 : prevValue));
    };

    const incrementValue = () => {
        setValue((prevValue) => prevValue + 1);
    };

    // Function to handle thumbnail click
    const handleThumbnailClick = (index) => {
        setSelectedImageIndex(index);
    };

    const single_product = products.find((product) => product._id === id);

    if (loading) return <div className="min-h-[60vh] flex items-center justify-center">Loading...</div>;
    if (!single_product) return <div className="min-h-[60vh] flex items-center justify-center">Product not found</div>;

    // Function to add to cart
    const handleAddToCart = () => {
        dispatch(addToCart({ ...single_product, quantity: value }));
    };

    // Function to buy now (add to cart & navigate to cart page)
    const handleBuyNow = () => {
        dispatch(addToCart({ ...single_product, quantity: value }));
        navigate("/your-cart");
    };

    // Generate structured data for SEO
    const productStructuredData = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": single_product.title,
        "description": single_product.description || `${single_product.title} - High quality product from Biova Surgicals`,
        "brand": {
            "@type": "Brand",
            "name": "Biova Surgicals"
        },
        "image": single_product.product_images[selectedImageIndex],
        "offers": {
            "@type": "Offer",
            "url": window.location.href,
            "priceCurrency": "PKR",
            "price": single_product.price,
            "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": single_product.averageRating || 4.5,
            "reviewCount": single_product.reviews.length
        }
    };

    return (
        <>
            {/* SEO Meta Tags */}
            <Helmet>
                <title>{single_product.title} | Biova Surgicals</title>
                <meta name="description" content={single_product.description || `${single_product.title} - Available at Biova Surgicals. High quality medical products at competitive prices.`} />
                <meta name="keywords" content={`${single_product.title}, ${single_product.category}, medical supplies, surgical instruments, Pakistan`} />
                <meta property="og:title" content={`${single_product.title} | Biova Surgicals`} />
                <meta property="og:description" content={single_product.description || `${single_product.title} - Available at Biova Surgicals`} />
                <meta property="og:image" content={single_product.product_images[selectedImageIndex]} />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="product.item" />
                <script type="application/ld+json">
                    {JSON.stringify(productStructuredData)}
                </script>
            </Helmet>

            <main className="w-[100%] md:w-[90%] m-auto p-4 max-w-[1400px]">
                {/* Breadcrumb Navigation */}
                <nav className="mb-4" aria-label="Breadcrumb">
                    <ol className="flex items-center space-x-2 text-sm text-gray-600">
                        <li>
                            <Link to="/" className="hover:text-[#02BBB6] transition-colors">Home</Link>
                        </li>
                        <li>/</li>
                        <li>
                            <Link to={`/products?category=${single_product.category}`} className="hover:text-[#02BBB6] transition-colors capitalize">
                                {single_product.category}
                            </Link>
                        </li>
                        <li>/</li>
                        <li className="text-gray-800 font-medium line-clamp-1" aria-current="page">
                            {single_product.title}
                        </li>
                    </ol>
                </nav>

                {/* Product Category */}
                <h1 className="text-gray-500 text-lg mb-2 capitalize">{single_product.category}</h1>

                <div className="flex flex-col lg:flex-row gap-6 px-0 sm:px-4">
                    {/* Image Gallery */}
                    <div className="flex flex-col-reverse sm:flex-row gap-4 w-full lg:w-[55%]">
                        {/* Thumbnails */}
                        <div className="flex flex-row sm:flex-col gap-2 sm:gap-3 overflow-x-auto sm:overflow-x-visible pb-2 sm:pb-0">
                            {single_product.product_images.map((img, index) => (
                                <div
                                    key={index}
                                    className={`bg-[#DEFDFC] rounded border w-20 sm:w-24 flex-shrink-0 sm:flex-shrink cursor-pointer transition-all ${selectedImageIndex === index ? 'ring-2 ring-[#02BBB6]' : ''}`}
                                    onClick={() => handleThumbnailClick(index)}
                                >
                                    <img
                                        src={img}
                                        alt={`${single_product.title} - Thumbnail ${index + 1}`}
                                        className="h-16 sm:h-20 w-full object-cover rounded"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Main Image */}
                        <div className="bg-[#DEFDFC] rounded-lg flex-1 h-fit">
                            <img
                                src={single_product.product_images[selectedImageIndex]}
                                alt={single_product.title}
                                className="w-full h-auto max-h-[400px] object-contain p-4"
                                loading="eager"
                            />
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col gap-4 w-full lg:w-[45%]">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold playfair">{single_product.title}</h2>
                            <div className="text-base sm:text-lg mt-1 flex items-center gap-3">

                                <span>{single_product.reviews.length} Reviews</span>
                            </div>
                        </div>

                        <div className="mt-2">
                            <div className="flex items-baseline gap-2">
                                <span className="text-2xl sm:text-3xl font-bold text-gray-800 cinzel">
                                    RS {single_product.price}
                                </span>
                                {single_product.old_price && (
                                    <span className="text-lg sm:text-xl text-gray-500 line-through cinzel">
                                        RS {single_product.old_price}
                                    </span>
                                )}
                            </div>
                            {single_product.old_price && (
                                <div className="lato flex gap-2 items-center text-gray-500 text-sm sm:text-base mt-1">
                                    <img src="/Products/Sale Icon.png" alt="Sale" className="h-4" />
                                    Save {Math.round((1 - single_product.price / single_product.old_price) * 100)}% now
                                </div>
                            )}
                        </div>

                        {/* Quantity Selector */}
                        <div className="flex items-center gap-3 sm:gap-4 mt-2">
                            <label htmlFor="quantity" className="text-sm sm:text-base">Quantity:</label>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={decrementValue}
                                    className="bg-[#02BBB6] text-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-[#008f8a] rounded"
                                    aria-label="Decrease quantity"
                                >
                                    -
                                </button>
                                <span id="quantity" className="w-8 text-center">{value}</span>
                                <button
                                    onClick={incrementValue}
                                    className="bg-[#02BBB6] text-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-[#008f8a] rounded"
                                    aria-label="Increase quantity"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="mt-4 flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={handleBuyNow}
                                className="px-6 py-3 border text-[#fff] border-[#02BBB6] bg-[#008f8a] rounded-lg hover:bg-[#244644] transition-colors w-full sm:w-auto"
                            >
                                BUY NOW
                            </button>
                            <button
                                onClick={handleAddToCart}
                                className="px-6 py-3 border text-[#02BBB6] border-[#02BBB6] rounded-lg hover:bg-[#DEFDFC] transition-colors w-full sm:w-auto"
                            >
                                ADD TO CART
                            </button>
                        </div>

                        {/* Features */}
                        <div className="mt-4 text-gray-600 flex flex-col gap-2">
                            <p className="flex items-center gap-3 text-sm sm:text-base">
                                <img src="/Products/World Wide.png" alt="Worldwide shipping" className="w-4" />
                                Free shipping worldwide
                            </p>
                            <p className="flex items-center gap-3 text-sm sm:text-base">
                                <img src="/Products/pure.png" alt="Pure material" className="w-4" />
                                100% pure material
                            </p>
                            <p className="flex items-center gap-3 text-sm sm:text-base">
                                <img src="/Products/Professional.png" alt="Professional quality" className="w-4" />
                                Made by professionals
                            </p>
                        </div>
                    </div>
                </div>

                {/* Product Description and Reviews */}
                <Product_reviews_description single_product={single_product} />
            </main>
        </>
    );
};

export default SingleProductDetail;