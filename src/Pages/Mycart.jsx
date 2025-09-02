import { useState } from "react";
import { useCart } from "../Context/Addtocart";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../Context/Toggletheme";

export const CartPage = () => {
  const { cart, increment, decrement, removeFromCart } = useCart();
  const navigate = useNavigate();
  const [isclickcheckout, setcheckout] = useState(false);
  const { theme } = useTheme();

  const subtotal = cart.reduce(
    (acc, item) => acc + item.finalPrice * item.quantity,
    0
  );
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal - total;
  const platformFee = cart.length > 0 ? 10 : 0;
  const finalTotal = total + platformFee;

  if (cart.length === 0) {
    return (
      <div
        className={`mt-[60px] px-4 py-8 text-center ${
          theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <p className="text-lg mb-4">Your cart is empty.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Explore Products
        </button>
      </div>
    );
  }

  return (
    <div
      className={`mt-[60px] px-2 sm:px-8 md:px-12 lg:px-20 py-8 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>

      {/* Cart Items */}
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id + item.size}
            className={`flex flex-row items-center justify-between border rounded-lg p-2 sm:p-4 shadow-sm space-x-2 sm:space-x-4 ${
              theme === "dark"
                ? "bg-gray-900 border-gray-700"
                : "bg-white border-gray-200"
            }`} 
          >
            <img
              src={item.images}
              alt={item.title}
              className="h-[70px] w-[70px] sm:h-[120px] sm:w-[120px] object-cover rounded-md cursor-pointer" onClick={()=>navigate(`/products/${item.id}`)}
            />

            <div className="flex-1 text-left truncate">
              <h3 className="text-sm sm:text-lg font-medium">{item.name}</h3>
              <p className="text-xs sm:text-sm truncate">{item.description}</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                ₹{item.price}
              </p>
              {item.size && (
                <p className="text-xs text-gray-500">Size: {item.size}</p>
              )}
              <div className="flex items-center mt-2 space-x-2">
                <button
                  onClick={() => decrement(item.id, item.size)}
                  className="px-2 text-white bg-white sm:px-3 py-1 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer"
                >
                  -
                </button>
                <span className="px-2 text-sm sm:text-base">
                  {item.quantity}
                </span>
                <button
                  onClick={() => increment(item.id, item.size)}
                  className="px-2  text-white sm:px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item.id, item.size)}
              className="text-red-500 hover:underline text-xs sm:text-sm cursor-pointer"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div
        className={`mt-8 w-full md:w-[400px] border rounded-lg shadow-md p-6 ml-auto ${
          theme === "dark"
            ? "bg-gray-900 border-gray-700"
            : "bg-white border-gray-200"
        }`}
      >
        <h3 className="text-xl font-semibold mb-4">Price Details</h3>
        <div className="space-y-2 text-gray-700 dark:text-gray-300">
          <div className="flex justify-between">
            <span>Subtotal (MRP)</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span>-₹{discount}</span>
          </div>
          <div className="flex justify-between">
            <span>Platform Fee</span>
            <span>₹{platformFee}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg border-t pt-2">
            <span>Total Amount</span>
            <span>₹{finalTotal}</span>
          </div>
        </div>

        <button
          className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 w-full cursor-pointer"
          onClick={() => setcheckout(true)}
        >
          Checkout
        </button>
      </div>

      {/* Thank You Popup */}
      <AnimatePresence>
        {isclickcheckout && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={`rounded-2xl shadow-2xl p-8 w-[90%] md:w-[400px] text-center relative ${
                theme === "dark" ? "bg-gray-900 text-white" : "bg-white"
              }`}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-green-600">
                🎉 Thank You!
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Your order has been placed successfully. We appreciate your
                shopping with us! 💚
              </p>

              <button
                onClick={() => setcheckout(false)}
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 cursor:pointer"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
