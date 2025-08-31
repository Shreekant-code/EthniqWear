import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../Context/ProductContext";
import { useCart } from "../Context/Addtocart"; // Cart + Wishlist context
import { FaHeart } from "react-icons/fa6";
import { useMemo } from "react";

export const Womensection = () => {
  const { category } = useParams(); // e.g., "tshirt", "hoodie"
  const { products } = useProducts();
  const { wishlist, addToWishlist, removeFromWishlist } = useCart(); // wishlist functions
  const navigate = useNavigate();

  // Helper: Truncate description to a certain number of words
  const truncate = (text, words = 6) =>
    text
      ? text.split(" ").slice(0, words).join(" ") + (text.split(" ").length > words ? "..." : "")
      : "";

  // Filter products for this category (memoized for performance)
  const filteredProducts = useMemo(
    () =>
      products.filter(
        (p) => p.category === "women" && p.type?.toLowerCase() === category?.toLowerCase()
      ),
    [products, category]
  );

  // Check if product is in wishlist
  const isWishlisted = (id) => wishlist.some((p) => p.id === id);

  // Toggle wishlist
  const handleWishlist = (e, product) => {
    e.stopPropagation();
    if (isWishlisted(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="px-4 md:px-8 py-8 mt-[60px] mb-[20px]">
      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 overflow-hidden">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="relative w-full aspect-[4/5] cursor-pointer rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200 bg-white"
              onClick={() => navigate(`/products/${prod.id}`)}
            >
              {/* Heart Icon */}
              <FaHeart
                className={`absolute top-2 right-2 text-2xl z-10 ${
                  isWishlisted(prod.id) ? "text-red-500" : "text-gray-400"
                }`}
                onClick={(e) => handleWishlist(e, prod)}
              />

              {/* Product Image */}
              <img
                src={prod.images}
                alt={prod.description}
                className="w-full h-[70%] object-cover rounded-t-lg"
              />

              {/* Product Info */}
              <div className="p-2 text-center">
                {/* Description */}
                <p className="text-[12px] mt-1">{truncate(prod.description)}</p>

                {/* Price & Discount */}
                <p className="mt-1">
                  <span className="font-bold text-[15px]">₹{prod.finalPrice}</span>{" "}
                  <span className="line-through text-[12px] text-gray-400">₹{prod.price}</span>{" "}
                  <span className="text-green-500">{prod.discount} off</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
