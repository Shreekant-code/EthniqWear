import { useCart } from "../Context/Addtocart";
import { IoTrashBinSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export const Whislist = () => {
  const { wishlist, removeFromWishlist, addTocart } = useCart();
  const navigate = useNavigate();

  if (wishlist.length === 0) {
    return (
      <div className="mt-[60px] px-4 py-8 text-center">
        <p className="text-lg">Your wishlist is empty.</p>
      </div>
    );
  }

  return (
    <div className="mt-[60px] px-4 md:px-8 py-8">
      <h2 className="text-2xl font-bold mb-6">My Wishlist</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {wishlist.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-2 flex flex-col items-center"
          >
           
            <img
              src={product.images}
              alt={product.description}
              className="w-[150px] h-[200px] object-cover mb-2 cursor-pointer"
              onClick={() => navigate(`/products/${product.id}`)}
            />

          
            <p className="text-sm text-center mb-1">
              {product.description
                ? (() => {
                    const words = product.description.split(" ");
                    return words.slice(0, 6).join(" ") + (words.length > 6 ? "..." : "");
                  })()
                : ""}
            </p>

            
            <p className="mb-2">
              <span className="font-bold">₹{product.price}</span>{" "}
              <span className="line-through text-sm">₹{product.finalPrice}</span>{" "}
              <span className="text-green-500">{product.discount} off</span>
            </p>

          
            <div className="flex gap-2">
              <button
                onClick={() => addTocart(product)}
                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-sm"
              >
                Add to Cart
              </button>
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-sm flex items-center"
              >
                <IoTrashBinSharp className="mr-1" /> Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
