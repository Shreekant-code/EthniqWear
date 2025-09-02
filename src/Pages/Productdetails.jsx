import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../Context/ProductContext";
import { useCart } from "../Context/Addtocart";

export const Productdetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useProducts();
  const { cart, addTocart, increment, decrement } = useCart();

  const product = products.find((p) => p.id === Number(id));
  const [selectedSize, setSelectedSize] = useState(null);

  if (!product) return <p className="px-8 py-8">Product not found!</p>;

  // find product in cart (match both id & size)
  const cartItem = cart.find(
    (item) => item.id === product.id && item.size === selectedSize
  );

  // Size chart
  const sizeChart = {
    S: "Chest: 34 inch",
    M: "Chest: 36 inch",
    L: "Chest: 40 inch",
  };

  return (
    <div className="px-4 md:px-8 py-8 mt-[60px] flex flex-col md:flex-row justify-center items-center gap-8">
      {/* Product Image */}
      <img
        src={product.images}
        alt={product.description}
        className="w-full md:w-[300px] h-[300px] md:h-[400px] object-cover rounded shadow-md"
      />

      {/* Product Details */}
      <div className="w-full md:w-1/2">
        <p className="mb-2 text-lg">{product.description}</p>

        <p className="mb-4">
          <span className="font-bold text-xl">₹{product.finalPrice}</span>{" "}
          <span className="line-through text-sm text-gray-500">
            ₹{product.price}
          </span>{" "}
          <span className="text-green-500">{product.discount} off</span>
        </p>

        {/* Size Selection */}
        <div className="mb-4">
          <p className="mb-2 font-medium">Select Size:</p>
          <div className="flex gap-3 flex-wrap">
            {["S", "M", "L"].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 rounded border ${
                  selectedSize === size
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
          {selectedSize && (
            <p className="mt-2 text-sm text-gray-600">
              {sizeChart[selectedSize]}
            </p>
          )}
        </div>

        {/* Qty controls */}
        {cartItem && (
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => decrement(product.id, selectedSize)}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              -
            </button>
            <span className="font-medium">{cartItem.quantity}</span>
            <button
              onClick={() => increment(product.id, selectedSize)}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              +
            </button>
          </div>
        )}

        {/* Add to Cart OR Go to Cart */}
        {cartItem ? (
          <button
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 w-full md:w-auto"
            onClick={() => navigate("/mycart")}
          >
            Go to Cart
          </button>
        ) : (
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 w-full md:w-auto"
            onClick={() => addTocart({ ...product, size: selectedSize })}
            disabled={!selectedSize}
          >
            {selectedSize ? "Add to Cart" : "Select Size First"}
          </button>
        )}
      </div>
    </div>
  );
};
