import { useCart } from "../Context/Addtocart";
import { useNavigate } from "react-router-dom";

export const CartPage = () => {
  const { cart, increment, decrement, removeFromCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="mt-[60px] px-4 py-8 text-center">
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
    <>

    
    </>
  );
};
