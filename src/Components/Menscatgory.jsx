import { CiLocationArrow1 } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { useTheme } from "../Context/Toggletheme"; 

export const Menscategory = () => {
  const { theme } = useTheme();

  return (
    <>
      <h3
        className={`text-center text-2xl font-extrabold mb-8 tracking-wide transition-colors duration-300 ${
          theme === "dark" ? "text-white" : "text-gray-800"
        }`}
      >
        👕 Mens Categories
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-8 mb-20">
        {productCategories.map((cat, i) => (
          <NavLink
            to={`men/category/${cat.type.toLowerCase()}`}
            key={i}
            className={`relative group rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-500 cursor-pointer ${
              theme === "dark" ? "bg-gray-900" : "bg-white"
            }`}
          >
            <img
              src={cat.img}
              alt={cat.type}
              className="h-[300px] w-full object-cover group-hover:opacity-80 transition duration-300"
            />
            <div
              className={`absolute inset-0 opacity-90 group-hover:opacity-100 transition duration-500 ${
                theme === "dark"
                  ? "bg-gradient-to-t from-black/80 via-black/50 to-transparent"
                  : "bg-gradient-to-t from-black/50 via-black/40 to-transparent"
              }`}
            ></div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-3 bg-black/40 px-4 py-1 rounded-full backdrop-blur-sm">
              <h4 className="text-white text-lg font-bold tracking-wide drop-shadow-md">{cat.type}</h4>
              <button className="px-4 py-1.5 bg-yellow-400 text-gray-900 rounded-full font-semibold shadow-md hover:bg-yellow-300 hover:scale-105 transition cursor-pointer">
                <CiLocationArrow1 />
              </button>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
};

const productCategories = [
  {
    type: "tshirt",
    img: "/tshirt.jpg",
  },
  {
    type: "hoodie",
    img: "/hoodie.jpg",
  },
  {
    type: "pants",
    img: "/pants.jpeg",
  },
  {
    type: "shirt",
    img: "/shirts.png",
  },
];
