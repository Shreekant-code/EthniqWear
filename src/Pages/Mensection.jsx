import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../Context/ProductContext";
import { useCart } from "../Context/Addtocart"; // Cart + Wishlist context
import { FaHeart } from "react-icons/fa6";
import { useMemo } from "react";
import { useTheme } from "../Context/Toggletheme";

export const Mensection = () => {
  const { category } = useParams(); 
  const { products } = useProducts();
  const { wishlist, addToWishlist, removeFromWishlist } = useCart(); 
  const navigate = useNavigate();
  const { theme } = useTheme(); // "light" | "dark"
  
  const truncate = (text, words = 6) =>
    text
      ? text.split(" ").slice(0, words).join(" ") + (text.split(" ").length > words ? "..." : "")
      : "";

  const filteredProducts = useMemo(
    () =>
      products.filter(
        (p) => p.category === "men" && p.type?.toLowerCase() === category?.toLowerCase()
      ),
    [products, category]
  );

  const isWishlisted = (id) => wishlist.some((p) => p.id === id);

  const handleWishlist = (e, product) => {
    e.stopPropagation();
    if (isWishlisted(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div
      className={`px-4 md:px-8 py-8 mt-[60px] mb-[20px] min-h-screen transition-colors ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {filteredProducts.length === 0 ? (
        <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
          No products found in this category.
        </p>
      ) : (
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 overflow-hidden`}
        >
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className={`relative w-full aspect-[4/5] cursor-pointer rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200 ${
                theme === "dark" ? "bg-gray-900" : "bg-white"
              }`}
              onClick={() => navigate(`/products/${prod.id}`)}
            >
             
              <FaHeart
                className={`absolute top-2 right-2 text-2xl z-10 cursor-pointer ${
                  isWishlisted(prod.id)
                    ? "text-red-500"
                    : theme === "dark"
                    ? "text-gray-500"
                    : "text-gray-400"
                }`}
                onClick={(e) => handleWishlist(e, prod)}
              />
<p className="absolute bottom-[30%] left-1 text-black">{prod.rating}</p>
              
              <img
                src={prod.images}
                alt={prod.description}
                className="w-full h-[70%] object-cover rounded-t-lg"
              />

             
              <div className="p-2 text-center">
              
                <p
                  className={`text-[12px] mt-1 ${
                    theme === "dark" ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {truncate(prod.description)}
                </p>

              
                <p className="mt-1">
                  <span
                    className={`font-bold text-[15px] ${
                      theme === "dark" ? "text-gray-100" : "text-gray-900"
                    }`}
                  >
                    ₹{prod.finalPrice}
                  </span>{" "}
                  <span
                    className={`line-through text-[12px] ${
                      theme === "dark" ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    ₹{prod.price}
                  </span>{" "}
                  <span
                    className={`${
                      theme === "dark" ? "text-green-400" : "text-green-600"
                    }`}
                  >
                    {prod.discount} off
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
