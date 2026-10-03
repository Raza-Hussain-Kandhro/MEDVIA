import React from 'react'

const Button = ({ value }) => {
    return (
        <button className='rounded-[5px] bg-[#00625F] lato font-bold text-[17px] text-[#fff] px-7 py-3 cursor-pointer'>{value}</button>
    )
}

export default Button
