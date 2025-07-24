import { Link } from "react-router-dom";
import {motion} from "framer-motion"

const ProductCard = ({ product }) => {
  return (
   
    <Link to={`/product/${product.id}`}>
      <div className="border rounded-xl p-4 hover:shadow-lg transition duration-300 cursor-pointer">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h2 className="text-lg font-medium">{product.name}</h2>
        <p className="text-gray-500">₹{product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;

