import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <section className='w-[95%] m-auto max-w-[1200px] pb-[80px] pt-[40px]'>
            <div className='bg-white rounded-xl shadow-lg p-6 md:p-10'>
                <div className='text-center mb-12'>
                    <h1 className='text-[#00605f] playfair font-bold text-[32px] md:text-[48px] tracking-[1.5px] mb-4'>
                        Terms and Conditions
                    </h1>
                    <div className='w-[100px] h-[4px] bg-[#00605f] mx-auto'></div>
                </div>

                <div className='mb-10'>
                    <p className='text-[#00807b] lato text-[18px] md:text-[20px] leading-relaxed mb-8 bg-[#f5f9f9] p-6 rounded-lg'>
                        Welcome to <span className='font-bold'>Biova Surgicals</span>! These Terms and Conditions govern your use of our website and services. By accessing or purchasing from <span className='font-bold'>Biova Surgicals</span>, you agree to comply with these terms. If you do not agree, please refrain from using our services.
                    </p>
                </div>

                <div className='space-y-12'>
                    {/* Section 1 */}
                    <div className='border-l-4 border-[#00605f] pl-6'>
                        <h2 className='text-[#00605f] playfair font-bold text-[28px] md:text-[36px] tracking-[1px] mb-4'>
                            1. General Terms
                        </h2>
                        <ul className='space-y-3 text-[#00807b] lato text-[16px] md:text-[18px]'>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                These Terms apply to all users, including <span className='font-bold'>visitors, customers, and businesses</span> purchasing from our website.
                            </li>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                We reserve the right to update, modify, or remove any part of these Terms at our discretion.
                            </li>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                Continued use of the website after updates means acceptance of the revised Terms.
                            </li>
                        </ul>
                    </div>

                    {/* Section 2 */}
                    <div className='border-l-4 border-[#00605f] pl-6'>
                        <h2 className='text-[#00605f] playfair font-bold text-[28px] md:text-[36px] tracking-[1px] mb-4'>
                            2. Products and Availability
                        </h2>
                        <ul className='space-y-3 text-[#00807b] lato text-[16px] md:text-[18px]'>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                All products listed on our website are subject to <span className='font-bold'>availability</span>. We do not guarantee that a product will always be in stock.
                            </li>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                Product descriptions, specifications, and images are provided for reference only. While we strive for accuracy, slight variations may occur.
                            </li>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                We reserve the right to <span className='font-bold'>discontinue or modify</span> any product without prior notice.
                            </li>
                        </ul>
                    </div>

                    {/* Section 3 */}
                    <div className='border-l-4 border-[#00605f] pl-6'>
                        <h2 className='text-[#00605f] playfair font-bold text-[28px] md:text-[36px] tracking-[1px] mb-4'>
                            3. Orders and Payments
                        </h2>

                        <h3 className='text-[#00605f] playfair font-bold text-[22px] md:text-[26px] tracking-[1px] mt-6 mb-3'>
                            3.1 Order Process
                        </h3>
                        <ul className='space-y-3 text-[#00807b] lato text-[16px] md:text-[18px] mb-6'>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                Placing an order on our website constitutes an <span className='font-bold'>offer to purchase</span>. We reserve the right to accept or decline any order.
                            </li>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                An order is confirmed only after full payment is received.
                            </li>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                If an item is out of stock after an order is placed, we will inform you and provide a refund or alternative option.
                            </li>
                        </ul>

                        <h3 className='text-[#00605f] playfair font-bold text-[22px] md:text-[26px] tracking-[1px] mt-6 mb-3'>
                            3.2 Pricing and Payment
                        </h3>
                        <ul className='space-y-3 text-[#00807b] lato text-[16px] md:text-[18px]'>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                Prices displayed on our website are in <span className='font-bold'>PKR</span> and are subject to change without notice.
                            </li>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                We accept various <span className='font-bold'>secure payment methods</span>, including credit/debit cards, bank transfers, and digital payment gateways.
                            </li>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                <span className='font-bold'>Taxes, shipping fees, and additional charges</span> (if applicable) will be displayed at checkout.
                            </li>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                If a payment is declined or fraudulent, we reserve the right to <span className='font-bold'>cancel the order</span>
                            </li>
                        </ul>
                    </div>

                    {/* Section 4 */}
                    <div className='border-l-4 border-[#00605f] pl-6'>
                        <h2 className='text-[#00605f] playfair font-bold text-[28px] md:text-[36px] tracking-[1px] mb-4'>
                            4. Shipping and Delivery
                        </h2>
                        <ul className='space-y-3 text-[#00807b] lato text-[16px] md:text-[18px]'>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                We aim to process and ship orders within <span className='font-bold'>3 - 5 business days</span>, but delivery times may vary based on location.
                            </li>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                Delays due to external factors (e.g., customs, courier issues, natural disasters) are <span className='font-bold'>beyond our control</span>, and we are not liable for late deliveries.
                            </li>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                Customers must provide <span className='font-bold'>accurate shipping details</span>. We are not responsible for non-delivery due to incorrect information.
                            </li>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                Shipping fees and estimated delivery times will be displayed at checkout.
                            </li>
                        </ul>
                    </div>

                    {/* Section 5 */}
                    <div className='border-l-4 border-[#00605f] pl-6'>
                        <h2 className='text-[#00605f] playfair font-bold text-[28px] md:text-[36px] tracking-[1px] mb-4'>
                            5. Returns, Refunds, and Cancellations
                        </h2>

                        <h3 className='text-[#00605f] playfair font-bold text-[22px] md:text-[26px] tracking-[1px] mt-6 mb-3'>
                            5.1 Return Policy
                        </h3>
                        <ul className='space-y-3 text-[#00807b] lato text-[16px] md:text-[18px] mb-6'>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                Returns are accepted within <span className='font-bold'>2 days</span> of delivery, provided the item is <span className='font-bold'>unused, undamaged, and in original packaging</span>. (Returns are not applicable for all items).
                            </li>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                Some products, such as sterile medical supplies or personalized items, are <span className='font-bold'>non-returnable</span> for safety reasons.
                            </li>
                        </ul>

                        <h3 className='text-[#00605f] playfair font-bold text-[22px] md:text-[26px] tracking-[1px] mt-6 mb-3'>
                            5.2 Refund Policy
                        </h3>
                        <ul className='space-y-3 text-[#00807b] lato text-[16px] md:text-[18px] mb-6'>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                Refunds will be processed once the returned item is inspected and approved.
                            </li>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                Refunds are issued via the original payment method and may take <span className='font-bold'>2 business days</span> to reflect.
                            </li>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                <span className='font-bold'>Shipping fees are non-refundable</span> unless the return is due to our error.
                            </li>
                        </ul>

                        <h3 className='text-[#00605f] playfair font-bold text-[22px] md:text-[26px] tracking-[1px] mt-6 mb-3'>
                            5.3 Order Cancellations
                        </h3>
                        <ul className='space-y-3 text-[#00807b] lato text-[16px] md:text-[18px]'>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                Orders can only be canceled before they are shipped. Once dispatched, cancellations are <span className='font-bold'>not possible</span>.
                            </li>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                If an order is canceled before shipment, a <span className='font-bold'>full refund</span> will be issued.
                            </li>
                        </ul>
                    </div>

                    {/* Section 6 */}
                    <div className='border-l-4 border-[#00605f] pl-6'>
                        <h2 className='text-[#00605f] playfair font-bold text-[28px] md:text-[36px] tracking-[1px] mb-4'>
                            6. Warranty and Liability
                        </h2>
                        <ul className='space-y-3 text-[#00807b] lato text-[16px] md:text-[18px]'>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                <span className='font-bold'>Biova Surgicals</span> guarantees that all products meet <span className='font-bold'>quality and safety standards</span>.
                            </li>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                We are not liable for <span className='font-bold'>misuse, improper handling, or modifications</span> made to our products after purchase.
                            </li>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                Customers must follow the <span className='font-bold'>manufacturer's guidelines</span> for product use.
                            </li>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                In no event shall <span className='font-bold'>Biova Surgicals</span> be responsible for any <span className='font-bold'>indirect, incidental, or consequential damages</span> arising from product use.
                            </li>
                        </ul>
                    </div>

                    {/* Section 7 */}
                    <div className='border-l-4 border-[#00605f] pl-6'>
                        <h2 className='text-[#00605f] playfair font-bold text-[28px] md:text-[36px] tracking-[1px] mb-4'>
                            7. Intellectual Property
                        </h2>
                        <ul className='space-y-3 text-[#00807b] lato text-[16px] md:text-[18px]'>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                All content on our website, including <span className='font-bold'>logos, product descriptions, images, and graphics</span>, is the <span className='font-bold'>intellectual property of Biova Surgicals</span>.
                            </li>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                Unauthorized use, reproduction, or distribution of our content is strictly prohibited.
                            </li>
                        </ul>
                    </div>

                    {/* Section 8 */}
                    <div className='border-l-4 border-[#00605f] pl-6'>
                        <h2 className='text-[#00605f] playfair font-bold text-[28px] md:text-[36px] tracking-[1px] mb-4'>
                            8. Privacy and Data Protection
                        </h2>
                        <ul className='space-y-3 text-[#00807b] lato text-[16px] md:text-[18px]'>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                We collect, store, and process personal information as outlined in our <Link to="/privacy-policy" className="text-[#00605f] underline hover:text-[#00807b]">Privacy Policy</Link>.
                            </li>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                Customer data is used only for order processing, customer service, and website improvements.
                            </li>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                We do not sell or share customer data with third parties without consent.
                            </li>
                        </ul>
                    </div>

                    {/* Section 9 */}
                    <div className='border-l-4 border-[#00605f] pl-6'>
                        <h2 className='text-[#00605f] playfair font-bold text-[28px] md:text-[36px] tracking-[1px] mb-4'>
                            9. Dispute Resolution
                        </h2>
                        <ul className='space-y-3 text-[#00807b] lato text-[16px] md:text-[18px]'>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                In the event of a dispute, we encourage customers to <span className='font-bold'>first contact us</span> to resolve the issue amicably.
                            </li>
                            <li className='flex items-start'>
                                <span className='text-[#00605f] mr-2 mt-1'>•</span>
                                If a resolution cannot be reached, disputes shall be handled under the laws of <span className='font-bold'>PAKISTAN/KARACHI</span>.
                            </li>
                        </ul>
                    </div>

                    {/* Section 10 */}
                    <div className='border-l-4 border-[#00605f] pl-6'>
                        <h2 className='text-[#00605f] playfair font-bold text-[28px] md:text-[36px] tracking-[1px] mb-4'>
                            10. Contact Us
                        </h2>
                        <div className='text-[#00807b] lato text-[16px] md:text-[18px] bg-[#f5f9f9] p-6 rounded-lg'>
                            <p className='mb-4'>
                                If you have any questions or concerns about this Privacy Policy, you can contact us at:
                            </p>
                            <div className='space-y-3'>
                                <p className='font-bold'>Biova Surgicals</p>
                                <p>
                                    Email: <Link to="mailto:biovasurgicals@gmail.com" className="text-[#00605f] underline hover:text-[#00807b]">
                                        biovasurgicals@gmail.com
                                    </Link>
                                </p>
                                <p>
                                    Phone: <Link to="https://wa.me/03054440378" className="text-[#00605f] underline hover:text-[#00807b]">
                                        +92305-4440378
                                    </Link>,{' '}
                                    <Link to="https://wa.me/03001086684" className="text-[#00605f] underline hover:text-[#00807b]">
                                        +92300-1086684
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TermsAndConditions;