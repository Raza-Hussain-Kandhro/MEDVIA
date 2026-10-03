import React from 'react'

const Testimonials = () => {
    const review = [
        {
            img: "/reviews/testimonial-1.png",
            message: "We've been using instruments from this platform for over a year now, and the precision and durability are unmatched. The customer support team is always responsive and helpful. Highly recommended!",
            userName: "Mohammad Ali"
        },
        {
            img: "/reviews/testimonial-2.png",
            message: "Excellent quality medical tools that meet international standards. The prices are competitive, and delivery is always on time. This platform has become our trusted partner for all medical supplies",
            userName: "Dr. Rukhsar"
        }
    ]

    return (
        <section className='h-auto py-[40px] bg-[#DEFDFC] flex flex-col justify-between items-center mt-[50px] relative'>
            <p className='text-[#02BBB6] text-center lato text-[20px] mb-[-20px]'>3940+ Happy Landingfolio Users</p>
            <h1 className='text-[#00605f] playfair font-bold text-[30px] md:text-[46px] text-center tracking-[1.5px] mt-[20px] mb-[40px]'>Don’t Just Take Our Words</h1>


            <img src="/reviews/skeleton.png" alt="" className='absolute bottom-[0px] h-[545px] left-[-150px] z-[1]' />

            <div className='w-[95%] lg:w-[85%] m-auto flex md:flex-row flex-col gap-[40px] justify-between relative z-[2]'>
                {
                    review.map((rev, i) => <div key={i} className='flex  gap-[20px] md:w-[50%]'>
                        <div><img src={rev.img} alt="" className='' /></div>

                        <div className='flex flex-col gap-[20px]'>
                            <img src="/reviews/Stars .png" alt="" className='w-[128px]' />
                            <p className='lato font-regular text-[16px] '>{rev.message}</p>
                            <h4 className='lato font-bold text-[18px] text-[#262626}'>{rev.userName}</h4>
                        </div>
                    </div>)
                }

            </div>
        </section>

    )
}

export default Testimonials
