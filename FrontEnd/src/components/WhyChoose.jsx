import React from 'react'

const WhyChoose = () => {

    const shop = [
        {
            img: "/Products/Certified.png",
            heading: "Certified & Trusted",
            para: "Our products meet international medical safety and quality standards.",
        },
        {
            img: "/Products/Affordable.png",
            heading: "Affordable Pricing",
            para: "Get competitive prices without compromising on quality.",
        },
        {
            img: "/Products/Bulk.png",
            heading: " Bulk & Custom Orders",
            para: "Catering to hospitals, clinics, and individual healthcare providers.",
        },
    ];

    return (
        <div className='h-auto pt-[70px]'>

            <h1 className='text-[#00605f] playfair font-bold text-[30px] md:text-[46px] text-center w-[90%] m-auto tracking-[1.5px] mb-[30px]'>Why Choose Biova Surgical for Your Medical Equipment Needs?</h1>

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

export default WhyChoose
