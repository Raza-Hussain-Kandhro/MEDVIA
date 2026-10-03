import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_NAME } from "../constant/index.js"
import Product_card from '../components/Product_card.jsx';
import { FaChevronDown } from "react-icons/fa";
import WhyChoose from '../components/WhyChoose.jsx';

const Products = ({ searchQuery }) => {

    const [products, setProduct] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    // console.log(products);

    useEffect(() => {
        axios
            .get(`${API_NAME}/api/product_details`)
            .then((result) => {
                setProduct(result.data);
            })
            .catch((err) => console.log("ERROR", err));
    }, []);

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (<>
        <div className='mt-[30px] md:mt-[70px] w-[95%] max-w-[1350px] m-auto'>

            <div className="flex justify-center sm:justify-end mt-[0px] md:mt-4 mb-10">
                <div className="relative w-[100%] sm:w-[333px]">

                    <div
                        className="flex items-center border-[#02BBB6] border-[2px] h-[41px] rounded-md bg-white cursor-pointer relative overflow-hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >

                        <div className="w-full bg-white text-gray-700 px-4 py-3 pr-10">
                            {selectedCategory || "Select Product Categories"}
                        </div>

                        <button className="bg-[#02BBB6] text-white px-3.5 py-3 cursor-pointer">
                            <FaChevronDown />
                        </button>
                    </div>


                    {isOpen && (
                        <ul className="absolute w-full bg-white border border-gray-300 rounded-md shadow-md mt-1 z-10">
                            {[
                                "Select Product Categories",
                                "Disposable Medical Items",
                                "Biomedical Disposable Items",
                                "Dental Disposable Items",
                                "Medical Devices",
                                "Electronic Accessories for Biomedical Devices",
                            ].map((category) => (
                                <li
                                    key={category}
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                    onClick={() => {
                                        setSelectedCategory(category);
                                        setIsOpen(false);
                                    }}
                                >
                                    {category}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            <h1 className='text-[#00605f] mb-4 playfair font-bold text-[30px] md:text-[46px] text-center tracking-[1.5px] mt-[20px]'>Explore High-Quality Surgical & Medical Equipments</h1>
            <p className='text-[#02BBB6] text-center lato text-[20px] mb-[80px]'>Biova Surgical brings you a wide range of premium surgical instruments, medical devices, and healthcare solutions. Designed for precision, durability, and reliability, our products are trusted by top healthcare professionals and medical institutions worldwide.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15px] w-[100%] mx-auto mt-[50px]">
                {filteredProducts
                    .filter(product =>
                        selectedCategory === "Select Product Categories" || selectedCategory === "" || product.category === selectedCategory
                    )
                    .map((product) => (
                        <Product_card product={product} key={product._id} />
                    ))}
            </div>

        </div>



        <WhyChoose />
    </>
    )
}

export default Products
