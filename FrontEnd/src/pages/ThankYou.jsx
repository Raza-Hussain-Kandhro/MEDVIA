import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Thank You for Your Order!
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Your order has been successfully placed. We will notify you once it is
        shipped.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-[#008581] hover:bg-[#006D69] text-white rounded-lg transition-colors font-medium"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default ThankYou;
