import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { API_NAME } from "../constant/index.js";
import { Helmet } from 'react-helmet';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${API_NAME}/api/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", phone: "", company: "", message: "" }); // Reset form
            } else {
                alert("Failed to send message");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return (
        <><Helmet>
            <title>Contact Us - Biova Surgicals</title>
            <meta name="description" content="Contact Biova Surgicals for medical devices, surgical instruments, and healthcare supplies in Pakistan." />
            <meta name="keywords" content="Nebulizer Machine, BP Apparatus, Glucometer, Thermometer, Stethoscope, Medical Devices in Pakistan, Healthcare Equipment Supplier, Physiotherapy Equipment" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://www.biovasurgicals.com/contact" />
        </Helmet>

            <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight playfair text-gray-900 sm:text-4xl lg:text-5xl">Contact us</h2>
                        <p className="max-w-xl mx-auto mt-4 text-[17px] text-gray-500 lato">If you need any information regarding our medical devices, surgical instruments, or healthcare supplies, feel free to contact us. Our customer support team is available to assist you with</p>
                    </div>

                    <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
                        <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
                            <div className="overflow-hidden bg-white rounded-xl">
                                <div className="p-6">
                                    <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="1"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                    <Link to="https://wa.me/03054440378">
                                        <p className="mt-6 text-lg font-medium text-gray-900 lato">0305-4440378</p>
                                    </Link>
                                    <Link to="https://wa.me/03001086684">
                                        <p className="mt-1 text-lg font-medium text-gray-900 lato">0300-1086684</p>
                                    </Link>
                                </div>
                            </div>

                            <div className="overflow-hidden bg-white rounded-xl">
                                <div className="p-6">
                                    <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <Link to="mailto:biovasurgicals@gmail.com">
                                        <p className="mt-1 text-lg font-medium text-gray-900 lato">biovasurgicals@gmail.com</p>
                                    </Link>
                                </div>
                            </div>

                            <div className="overflow-hidden bg-white rounded-xl">
                                <div className="p-6">
                                    <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="1"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                    <Link to="https://wa.me/03172327487">
                                        <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900 lato">Developer Contact Info <br /> 03172327487</p>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 overflow-hidden bg-white rounded-xl">
                            <div className="px-6 py-12 sm:p-12">
                                <h3 className="text-3xl font-semibold text-center text-gray-900 playfair">Send us a message</h3>

                                <form onSubmit={handleSubmit} className="mt-14">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                        <div>
                                            <label className="text-base font-medium text-gray-900"> Your name </label>
                                            <div className="mt-2.5 relative">
                                                <input type="text" name="name" value={formData.name} onChange={handleChange} id="" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#00605f] caret-[#00605f]" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-base font-medium text-gray-900"> Email address </label>
                                            <div className="mt-2.5 relative">
                                                <input type="email" name="email" value={formData.email} onChange={handleChange} id="" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#00605f] caret-[#00605f]" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-base font-medium text-gray-900"> Phone number </label>
                                            <div className="mt-2.5 relative">
                                                <input type="tel" value={formData.phone} onChange={handleChange} name="phone" id="" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#00605f] caret-[#00605f]" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-base font-medium text-gray-900"> Company name </label>
                                            <div className="mt-2.5 relative">
                                                <input value={formData.company} onChange={handleChange} type="text" name="company" id="" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#00605f] caret-[#00605f]" />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-2">
                                            <label className="text-base font-medium text-gray-900"> Message </label>
                                            <div className="mt-2.5 relative">
                                                <textarea name="message" value={formData.message} onChange={handleChange} id="" placeholder="" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-[#00605f] caret-[#00605f]" rows="4"></textarea>
                                            </div>
                                        </div>

                                        <div className="sm:col-span-2">
                                            <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-[#02BBB6] border border-transparent rounded-md focus:outline-none hover:bg-[#00605f] focus:bg-[#00605f">
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
