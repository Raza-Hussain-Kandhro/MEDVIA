import React from 'react'
import Brands from './Brands'

const BrandSection = () => {
    return (
        <section className='h-auto py-[40px] bg-[#DEFDFC] flex flex-col justify-between items-center'>
            <h1 className='text-[#00605f] playfair font-bold text-[26px] text-center tracking-[1.5px] mt-[20px]'>Trusted by renowned medical brands worldwide.</h1>
            <Brands />
        </section>
    )
}

export default BrandSection
