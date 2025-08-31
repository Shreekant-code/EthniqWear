import { useState } from "react";
import { Mensclothing } from "./Mensclothing";
import { Womenclothing } from "./Womenclothing";
import { useTheme } from "../Context/Toggletheme"; 

export const ShowProducts = () => {
  const [active, setActive] = useState("MEN");
  const { theme } = useTheme(); 

  return (
    <>
      <div
        className={`w-[380px] sm:w-[480px] flex items-center justify-center rounded-full p-1 shadow-md transition-colors duration-300 mt-[10px] ${
          theme === "dark" ? "bg-gray-800" : "bg-gray-50"
        }`}
      >
        <button
          onClick={() => setActive("MEN")}
          className={`flex-1 py-2 rounded-full font-medium transition-all duration-300 ${
            active === "MEN"
              ? "bg-yellow-400 text-gray-800 shadow-md"
              : theme === "dark"
              ? "text-gray-300"
              : "text-gray-600"
          }`}
        >
          MEN
        </button>
        <button
          onClick={() => setActive("WOMEN")}
          className={`flex-1 py-2 rounded-full font-medium transition-all duration-300 ${
            active === "WOMEN"
              ? "bg-yellow-400 text-gray-800 shadow-md"
              : theme === "dark"
              ? "text-gray-300"
              : "text-gray-600"
          }`}
        >
          WOMEN
        </button>
      </div>

      <div className={`mt-6 transition-colors duration-300 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
        {active === "MEN" ? <Mensclothing /> : <Womenclothing />}
      </div>
    </>
  );
};
