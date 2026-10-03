import React from 'react'

const ShopWithConfidence = () => {

    const shop = [
        {
            img: "/Home/CustomerSupport.png",
            heading: "Dedicated Customer Support",
            para: "24/7 assistance for all your queries.",
        },
        {
            img: "/Home/Quality.png",
            heading: "Dedicated to Precision",
            para: "Each item is carefully examined before reaching you.",
        },
        {
            img: "/Home/SecureShipping.png",
            heading: " Fast & Secure Shipping",
            para: "Delivering medical supplies all over Pakistan.",
        },
    ];

    return (
        <div className='h-auto pt-[70px]'>
            <p className='text-[#02BBB6] text-center lato text-[20px]'>Biova Surgical Guarantee</p>
            <h1 className='text-[#00605f] playfair font-bold text-[30px] md:text-[46px] text-center tracking-[1.5px] mb-[30px]'>Shop With Confidence</h1>

            <div className="w-[90%] max-w-[1450px] m-auto bg-[#DEFDFC] flex justify-evenly gap-[20px] p-[30px] pt-[50px] pb-[50px] rounded-[12px] mb-20 shadow-[8px_8px_12px_rgba(0,0,0,0.25)]  flex-col md:flex-row">
                {shop.map((value, i) => (
                    <div
                        key={i}
                        className="text-center flex flex-col gap-5 mb-10 md:mb-0 md:w-[33%]"
                    >
                        <img src={value.img} alt="" className="block m-auto" />
                        <h3 className="text-[16px] text-[#00605f] font-bold playfair">
                            {value.heading}
                        </h3>
                        <p className="lato text-[14px] font-light text-[#00605f]">
                            {value.para}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShopWithConfidence
