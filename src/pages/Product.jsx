import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import useCartStore from "../store/CartStore";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const addToCart = useCartStore((state) => state.addToCart);

  if (!product) return <div className="p-6">Product not found</div>;

  return (
 
    <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
      <img src={product.image} className="w-full h-[500px] object-cover rounded-xl" />
      <div>
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <p className="text-gray-500 text-lg mt-4">₹{product.price}</p>
        <p className="text-sm text-gray-600 mt-2">
          This is a premium fashion piece crafted with care and minimalist design.
        </p>
        <button
          onClick={() => {addToCart(product); 
          toast.success(`${product.name} added to cart`);}}
          className="mt-6 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800"
        >
          Add to Cart
        </button>
      </div>
    </div>
  
  );
};

export default Product;
