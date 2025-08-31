import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../Context/ProductContext";
import { useCart } from "../Context/Addtocart"; // Cart + Wishlist context
import { FaHeart } from "react-icons/fa6";

export const Womensection = () => {
  const { category } = useParams(); // "tshirt", "hoodie", etc.
  const { products } = useProducts();
  const { wishlist, addToWishlist, removeFromWishlist } = useCart(); // wishlist functions
  const navigate = useNavigate();

  // Filter products for this category
  const filteredProducts = products.filter(
    (p) => p.category === "women" && p.type.toLowerCase() === category.toLowerCase()
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
    <div className="px-4 md:px-8 py-8 mt-[60px]">
      {filteredProducts.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 overflow-hidden">
          {filteredProducts.map((prod) => (
            <div
              className="h-[300px] relative w-[200px] cursor-pointer"
              key={prod.id}
              onClick={() => navigate(`/products/${prod.id}`)}
            >
              {/* Heart Icon */}
              <FaHeart 
                className={`absolute top-[10px] right-4 text-2xl ${
                  isWishlisted(prod.id) ? "text-red-500 " : "text-gray-400"
                }`}
                onClick={(e) => handleWishlist(e, prod)}
              />

              {/* Product Image */}
              <img
                src={prod.images}
                alt={prod.description}
                className="w-[180px] h-[250px] mx-auto mt-2"
              />

              {/* Product Description */}
              <p className="text-[12px] mt-1">
                {prod.description
                  ? (() => {
                      const words = prod.description.split(" ");
                      return words.slice(0, 6).join(" ") + (words.length > 6 ? "..." : "");
                    })()
                  : ""}
              </p>

              {/* Price & Discount */}
              <p className="mt-1">
                <span className="font-bold text-[15px]">₹{prod.finalPrice}</span>{" "}
                <span className="line-through text-[12px]">₹{prod.price}</span>{" "}
                <span className="text-green-500">{prod.discount} off</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
