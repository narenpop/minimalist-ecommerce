import React, { useState } from "react";
import useCartStore from "../store/CartStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Checkout = () => {
    
  const { cart } = useCartStore();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.address) {
      toast.error("Please fill in all fields");
      return;
    }

    toast.success("Order placed successfully!");

    // Optionally clear cart or redirect
    setTimeout(() => {
      navigate("/orderSuccess");
    }, 2000);
  };

  return (
    <motion.div
  className="max-w-6xl mx-auto p-6"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
>
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid gap-4 mb-8">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="border rounded p-3 w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border rounded p-3 w-full"
        />
        <textarea
          name="address"
          placeholder="Shipping Address"
          value={form.address}
          onChange={handleChange}
          rows="4"
          className="border rounded p-3 w-full"
        />
        <button
          type="submit"
          className="bg-black text-white py-3 rounded-md hover:bg-gray-800"
        >
          Place Order
        </button>
      </form>

      <div className="border-t pt-6">
        <h2 className="text-lg font-medium mb-4">Order Summary</h2>
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <p>{item.name} x {item.qty}</p>
            <p>₹{item.price * item.qty}</p>
          </div>
        ))}
        <div className="text-right font-semibold mt-4">
          Total: ₹{total}
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Checkout;
