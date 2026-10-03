import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cartSlice";
import { API_NAME } from "../constant/index";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ subtotal, onClose }) => {
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart);
    const navigate = useNavigate();
    const [deliveryFee, setDeliveryFee] = useState(0);
    const [totalPrice, setTotalPrice] = useState(subtotal);
    const [availableProvinces, setAvailableProvinces] = useState([]);
    const [isLoadingProvinces, setIsLoadingProvinces] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        apartment: '',
        city: '',
        country: 'Pakistan',
        province: '',
        saveInfo: false
    });

    useEffect(() => {
        const fetchProvinces = async () => {
            setIsLoadingProvinces(true);
            try {
                const response = await fetch(`${API_NAME}/api/delivery/provinces`);
                const data = await response.json();
                setAvailableProvinces(data.provinces || []);
            } catch (error) {
                console.error("Error fetching provinces:", error);
            } finally {
                setIsLoadingProvinces(false);
            }
        };
        fetchProvinces();
    }, []);

    useEffect(() => {
        if (formData.province) {
            const selectedProvince = availableProvinces.find(p => p.name === formData.province);
            if (selectedProvince) {
                const fee = selectedProvince.deliveryFee || 0;
                setDeliveryFee(fee);
                setTotalPrice(subtotal + fee);
            }
        } else {
            setDeliveryFee(0);
            setTotalPrice(subtotal);
        }
    }, [formData.province, subtotal, availableProvinces]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const orderData = {
            ...formData,
            cartItems,
            subtotal,
            deliveryFee,
            totalPrice,
            orderDate: new Date().toISOString()
        };

        try {
            const response = await fetch(`${API_NAME}/api/orders/create-order`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(orderData),
            });

            if (response.ok) {
                dispatch(clearCart());
                onClose();
                navigate("/thank-you");
            } else {
                const errorData = await response.json();
                alert(errorData.message || "Failed to place order");
            }
        } catch (error) {
            console.error("Error placing order:", error);
            alert("An error occurred while placing your order");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Checkout</h2>
                <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"
                >
                    <X className="w-6 h-6" />
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                            First Name*
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#008581] focus:border-[#008581]"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                            Last Name*
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#008581] focus:border-[#008581]"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address*
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#008581] focus:border-[#008581]"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number*
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#008581] focus:border-[#008581]"
                    />
                </div>

                <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Street Address*
                    </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#008581] focus:border-[#008581]"
                    />
                </div>

                <div>
                    <label htmlFor="apartment" className="block text-sm font-medium text-gray-700 mb-1">
                        Apartment, Suite, etc. (Optional)
                    </label>
                    <input
                        type="text"
                        id="apartment"
                        name="apartment"
                        value={formData.apartment}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#008581] focus:border-[#008581]"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                            Country*
                        </label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                            readOnly
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#008581] focus:border-[#008581] bg-gray-100"
                        />
                    </div>

                    <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                            City*
                        </label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#008581] focus:border-[#008581]"
                        />
                    </div>

                    <div>
                        <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-1">
                            Province*
                        </label>
                        {isLoadingProvinces ? (
                            <div className="animate-pulse py-2 bg-gray-200 rounded-lg"></div>
                        ) : (
                            <select
                                id="province"
                                name="province"
                                value={formData.province}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#008581] focus:border-[#008581]"
                            >
                                <option value="">Select your Province</option>
                                {availableProvinces.map((province) => (
                                    <option key={province.name} value={province.name}>
                                        {province.name} (Delivery: RS {province.deliveryFee?.toFixed(2) || 0})
                                    </option>
                                ))}
                            </select>
                        )}
                    </div>
                </div>

                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="saveInfo"
                        name="saveInfo"
                        checked={formData.saveInfo}
                        onChange={handleChange}
                        className="h-4 w-4 text-[#008581] focus:ring-[#008581] border-gray-300 rounded"
                    />
                    <label htmlFor="saveInfo" className="ml-2 block text-sm text-gray-700">
                        Save this information for next time
                    </label>
                </div>

                <div className="border-t border-gray-200 pt-6">
                    <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="font-medium">RS {subtotal.toFixed(2)}</span>
                        </div>
                        {formData.province && (
                            <div className="flex justify-between">
                                <span className="text-gray-600">Delivery Fee</span>
                                <span className="font-medium">RS {deliveryFee.toFixed(2)}</span>
                            </div>
                        )}
                        <div className="flex justify-between border-t border-gray-200 pt-3">
                            <span className="text-gray-800 font-medium">Total</span>
                            <span className="text-[#008581] font-bold text-lg">
                                RS {totalPrice.toFixed(2)}
                            </span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full px-6 py-3 bg-[#008581] hover:bg-[#006D69] text-white rounded-lg transition-colors font-medium flex justify-center items-center"
                        disabled={!formData.province || isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                            </>
                        ) : (
                            "Complete Order"
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;