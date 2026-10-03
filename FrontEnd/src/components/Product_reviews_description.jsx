import React, { useState } from 'react'

const Product_reviews_description = ({ single_product }) => {
    const [activeTab, setActiveTab] = useState("description");
    return (
        <div className="mt-8">
            {/* Tabs */}
            <div className="flex border-b border-[#b3b3b3]">
                <button
                    className={`px-4 py-2 font-semibold ${activeTab === "description" ? "border-b-2 border-black text-black" : "text-gray-500 lato cursor-pointer"
                        }`}
                    onClick={() => setActiveTab("description")}
                >
                    Description
                </button>
                <button
                    className={`px-4 py-2 font-semibold ml-4 ${activeTab === "reviews" ? "border-b-2 border-black text-black" : "text-gray-500 lato cursor-pointer"
                        }`}
                    onClick={() => setActiveTab("reviews")}
                >
                    Reviews ({single_product.reviews.length})
                </button>
            </div>

            {/* Description Section */}
            {activeTab === "description" && (
                <div className="mt-4">

                    <h2 className="text-xl font-semibold">{single_product.description_heading}</h2>
                    <p className="text-gray-600 mt-2">{single_product.description}</p>
                </div>
            )}

            {/* Reviews Section */}
            {activeTab === "reviews" && (
                <div className="mt-4">
                    {single_product.reviews.map((review, index) => (
                        <div key={index} className=" rounded-lg p-4 mt-2">
                            <div className="flex items-center gap-4">
                                <img
                                    src={review.user_image}
                                    alt={review.user_name}
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <img src="/reviews/Stars .png" alt="" className='h-[21px] mt-1 mb-3' />
                                    <p className="font-semibold">{review.user_name}</p>
                                    <p className="text-gray-600 text-sm">{review.comment}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Product_reviews_description
