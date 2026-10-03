import React, { useEffect, useState } from 'react'
import axios from "axios"
import { API_NAME } from "../constant/index.js"
import Product_card from './Product_card';
import MainButton from './MainButton';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
    const [products, setProduct] = useState([]);

    // console.log(products);

    useEffect(() => {
        axios
            .get(`${API_NAME}/api/product_details`)
            .then((result) => {
                setProduct(result.data);
            })
            .catch((err) => console.log("ERROR", err));
    }, []);


    return (
        <div className='mt-[70px]'>
            <p className='text-[#02BBB6] text-center lato text-[20px] mb-[-20px]'>Highly Affordable Products</p>
            <h1 className='text-[#00605f] playfair font-bold text-[30px] md:text-[46px] text-center tracking-[1.5px] mt-[20px]'>Featured Products</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15px] w-[95%] md:w-[100%] mx-auto mt-[50px]">
                {products.filter(feature_products => feature_products.feature_product === "true").map((product) => (
                    <Product_card product={product} key={product._id} />))}
            </div>

            <Link to="/products">
                <div className='text-center m-20'>
                    <MainButton value="EXPLORE COLLECTION" />
                </div>
            </Link>
        </div>
    )
}

export default FeaturedProducts
