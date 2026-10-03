import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../features/cartSlice";
import { ShoppingCart, Trash2, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import CheckoutForm from "../components/CheckoutForm";
import { Helmet } from "react-helmet";


const Cart = () => {
    const { cartItems, totalPrice } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [showCheckout, setShowCheckout] = useState(false);

    return (
        <>
            <Helmet>
                <title>Your Shopping Cart | BiovaSurgicals</title>
                <meta name="description" content="View and manage your selected products. Adjust quantities or proceed to secure checkout. Your shopping cart is ready!" />
                <meta name="keywords" content="Shopping cart, Online store, Checkout, E-commerce, Cart page, Order summary, Remove items, Clear cart, ShopZone" />
                <meta property="og:title" content="Your Shopping Cart | ShopZone" />
                <meta property="og:description" content="Manage your cart items and proceed to checkout with ease at ShopZone." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://biovasurgicals.com/cart" />
                <meta property="og:image" content="https://biovasurgicals.com/assets/cart-preview.png" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://biovasurgicals.com/cart" />
            </Helmet>

            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="flex items-center gap-3 mb-8">
                    <ShoppingCart className="w-8 h-8 text-[#008581]" />
                    <h2 className="text-3xl font-bold text-gray-800 playfair">Your Shopping Cart</h2>
                </div>

                {cartItems.length === 0 ? (
                    <div className="bg-[#F0FDFF] rounded-xl p-12 text-center border border-[#DEFDFC] shadow-sm">
                        <ShoppingCart className="w-16 h-16 mx-auto text-[#008581] mb-6" />
                        <p className="text-gray-700 text-xl mb-2">Your cart feels lonely</p>
                        <p className="text-gray-500">Add some products to get started</p>
                        <Link
                            to="/products"
                            className="mt-6 inline-block px-6 py-2 bg-[#008581] hover:bg-[#006D69] text-white rounded-lg transition-colors"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                {cartItems.map((item) => (
                                    <div key={item._id} className="p-5 flex justify-between items-center hover:bg-gray-50 transition-colors">
                                        <Link to={`/product-detail/${item._id}`} className="flex-1">
                                            <div className="flex items-center gap-5">
                                                <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                                                    <img
                                                        src={item.product_images[0]}
                                                        alt={item.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="font-medium text-gray-900 lato text-lg">{item.title}</h3>
                                                    <p className="text-gray-600 font-medium">RS {item.price.toFixed(2)}</p>
                                                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                                                </div>
                                            </div>
                                        </Link>
                                        <button
                                            onClick={() => dispatch(removeFromCart(item))}
                                            className="ml-4 text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors"
                                            aria-label="Remove item"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <Link
                                    to="/products"
                                    className="text-[#008581] hover:text-[#006D69] font-medium flex items-center gap-1"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Continue Shopping
                                </Link>
                                <button
                                    onClick={() => dispatch(clearCart())}
                                    className="flex items-center gap-2 px-4 py-2 text-red-600 hover:text-red-700 border border-red-200 hover:border-red-300 rounded-lg transition-colors"
                                >
                                    <Trash2 className="w-5 h-5" />
                                    Clear Cart
                                </button>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h3>

                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Subtotal</span>
                                        <span className="font-medium">RS {totalPrice.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Shipping</span>
                                        <span className="font-medium text-gray-500">
                                            Calculated at checkout
                                        </span>
                                    </div>
                                    <div className="flex justify-between border-t border-gray-200 pt-3">
                                        <span className="text-gray-800 font-medium">Estimated Total</span>
                                        <span className="text-[#008581] font-bold text-lg">
                                            RS {totalPrice.toFixed(2)}
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setShowCheckout(true)}
                                    className="w-full px-6 py-3 bg-[#008581] hover:bg-[#006D69] text-white rounded-lg transition-colors font-medium"
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {showCheckout && (
                    <div className="fixed inset-0 bg-[#0085816c] flex items-center justify-center p-4 z-[500]">
                        <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                            <CheckoutForm
                                subtotal={totalPrice}
                                onClose={() => setShowCheckout(false)}
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;