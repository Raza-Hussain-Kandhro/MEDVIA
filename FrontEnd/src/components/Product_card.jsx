import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const Product_card = ({ product }) => {

    const [value, setValue] = useState(1);

    const decrementValue = () => {
        setValue(prevValue => prevValue > 1 ? prevValue - 1 : prevValue);
    };

    const incrementValue = () => {
        setValue(prevValue => prevValue + 1);
    };

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({ ...product, quantity: value }));
    };

    return (
        <div className='w-full  px-[12px] py-[23px] border-[2px] border-[#00625F] rounded-[5px] bg-[#DEFDFC] flex flex-col gap-[15px]'>
            <Link to={`/product-detail/${product._id}`}>
                <div className="relative overflow-hidden group">
                    <img
                        src={product.product_images[0]}
                        alt=""
                        className="w-full transition-opacity duration-300 ease-in-out group-hover:opacity-0 cursor-pointer"
                    />
                    <img
                        src={product.product_images[1]}
                        alt=""
                        className="absolute top-0 left-0 w-full opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 cursor-pointer"
                    />
                </div>
            </Link>
            <h3 className='lato text-[14px] sm:text-[16px] font-semibold text-[#262626] text-center'>{product.title}</h3>

            <div className='flex justify-between items-center cursor-pointer underline'>
                <img src='/reviews/Stars .png' alt="" className='w-[100px] sm:w-[127px]' />
                <Link to={`/product-detail/${product._id}`}>
                    <p>see more...</p>
                </Link>
            </div>
            <div className='flex justify-between items-center'>
                <p className='lato text-[15px] sm:text-[17px] font-semibold text-[#262626]'>RS {product.price}</p>

                <div className="flex items-center space-x-2 sm:space-x-4">
                    <button
                        onClick={decrementValue}
                        className="bg-[#02BBB6] text-white px-3 sm:px-4 py-1 sm:py-2 hover:bg-[#008f8a] cursor-pointer text-[16px] sm:text-[18px] font-bold"
                    >
                        -
                    </button>
                    <span className="text-[14px] sm:text-lg">{value}</span>
                    <button
                        onClick={incrementValue}
                        className="bg-[#02BBB6] text-white px-3 sm:px-4 py-1 sm:py-2 hover:bg-[#008f8a] cursor-pointer text-[16px] sm:text-[18px] font-bold"
                    >
                        +
                    </button>
                </div>
            </div>
            <button onClick={handleAddToCart} className='rounded-[5px] bg-[#02BBB6] lato font-bold text-[15px] sm:text-[17px] text-[#fff] px-5 sm:px-7 py-2 sm:py-3 cursor-pointer'>ADD TO CART</button>
        </div>
    )
}

export default Product_card

