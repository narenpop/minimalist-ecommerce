import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <CheckCircle className="w-20 h-20 text-green-600 mb-4" />
      <h1 className="text-2xl font-bold mb-2">Order Placed Successfully!</h1>
      <p className="text-gray-500 mb-6">Thank you for shopping with us.</p>
      <Link
        to="/"
        className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderSuccess;
