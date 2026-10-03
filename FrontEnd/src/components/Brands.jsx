import React from "react";
import "./Brand.css";
const review = [
    { id: 1, CLIENT_REVIEW: "/Home/Brand01.png" },
    { id: 2, CLIENT_REVIEW: "/Home/Brand01.png" },
    { id: 3, CLIENT_REVIEW: "/Home/Brand01.png" },
    { id: 4, CLIENT_REVIEW: "/Home/Brand01.png" },
    { id: 5, CLIENT_REVIEW: "/Home/Brand02.png" },
    { id: 6, CLIENT_REVIEW: "/Home/Brand02.png" },
    { id: 7, CLIENT_REVIEW: "/Home/Brand02.png" },
    { id: 8, CLIENT_REVIEW: "/Home/Brand02.png" },
];

const Brands = () => {
    return (
        <div className="scroller" data-speed="slow" data-animated="true">
            <div className="tag-list scroller__inner">
                {review.map((item) => {
                    return (
                        <div className="review-box" key={item.id}>
                            <img src={item.CLIENT_REVIEW} alt="" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Brands;
