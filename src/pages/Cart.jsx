import React from "react";
import useCartStore from "../store/cartStore";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCartStore();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between border p-4 rounded-md"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-500">₹{item.price}</p>
                    <div className="flex items-center mt-2 space-x-2">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        -
                      </button>
                      <span>{item.qty}</span>
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-4 text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-right mt-6">
            <p className="text-lg font-medium">Total: ₹{total}</p>
            <Link
  to="/checkout"
  className="mt-4 inline-block bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800"
>
  Proceed to Checkout
</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

