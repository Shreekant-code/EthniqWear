import { useState } from "react";
import { Menu, X } from "lucide-react";
import { MdDarkMode } from "react-icons/md";
import { CiHeart, CiLight } from "react-icons/ci";
import { IoBagHandleSharp } from "react-icons/io5";
import { useCart } from "../Context/Addtocart";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../Context/Toggletheme"; // <-- import theme context

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // <-- use context
  const { cart, wishlist } = useCart();
  const navigate = useNavigate();

  return (
    <>
      <header
        className={`h-[60px] w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${
          theme === "dark" ? "bg-black text-white border-b-2 border-gray-500" : "bg-white text-black shadow-md"
        }`}
      >
        <div className="flex items-center justify-between h-full px-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/logobrand.png"
              className="w-[35px] h-[35px] rounded-full"
              alt="logo"
            />
            <h1 className="font-allura text-2xl sm:text-4xl font-bold italic">
              TrendHive
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-8 font-medium">
              <li className="cursor-pointer hover:text-red-500 transition">Home</li>
              <li className="cursor-pointer hover:text-red-500 transition">Services</li>
              <li className="cursor-pointer hover:text-red-500 transition">About</li>
              <li className="cursor-pointer hover:text-red-500 transition">Log in</li>
            </ul>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-5 text-xl relative">
            {/* Theme Toggle */}
            {theme === "dark" ? (
              <MdDarkMode
                onClick={toggleTheme}
                className="cursor-pointer hover:text-red-500 transition"
              />
            ) : (
              <CiLight
                onClick={toggleTheme}
                className="cursor-pointer hover:text-red-500 transition"
              />
            )}

            {/* Wishlist */}
            <div className="relative">
              <CiHeart
                className={`text-2xl cursor-pointer transition-transform duration-300 ${
                  wishlist.length > 0 ? "text-red-500" : "text-gray-400"
                }`}
                onClick={() => navigate("/mywishlist")}
              />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              )}
            </div>

            {/* Cart */}
            <div className="relative cursor-pointer">
              <IoBagHandleSharp
                className="hover:text-red-500 transition text-2xl cursor-pointer"
                onClick={() => navigate("/mycart")}
              />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl focus:outline-none"
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[60px] left-0 w-[220px] h-[calc(100vh-60px)] ${
          theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        } shadow-lg p-6 transform transition-transform duration-300 md:hidden z-40 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 text-lg font-medium">
          <li className="hover:text-red-500 cursor-pointer transition">Home</li>
          <li className="hover:text-red-500 cursor-pointer transition">Services</li>
          <li className="hover:text-red-500 cursor-pointer transition">About</li>
          <li className="hover:text-red-500 cursor-pointer transition">Log in</li>
        </ul>
      </div>
    </>
  );
};
