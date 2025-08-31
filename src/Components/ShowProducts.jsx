import { useState } from "react";
import { Mensclothing } from "./Mensclothing";
import { Womenclothing } from "./Womenclothing";
export const ShowProducts=()=>{
    const [active, setActive] = useState("MEN");
    return(
        <>
     <div className="w-[380px] sm:w-[480px] flex items-center justify-center bg-gray-50 rounded-full shadow p-1">
  <button
    onClick={() => setActive("MEN")}
    className={`flex-1 py-2 rounded-full font-medium transition-all duration-300 
      ${active === "MEN" ? "bg-yellow-400 text-gray-800 shadow-md" : "text-gray-600"}`}
  >
    MEN
  </button>
  <button
    onClick={() => setActive("WOMEN")}
    className={`flex-1 py-2 rounded-full font-medium transition-all duration-300 
      ${active === "WOMEN" ? "bg-yellow-400 text-gray-800 shadow-md" : "text-gray-600"}`}
  >
    WOMEN
  </button>
</div>

{active=="MEN" ? <Mensclothing /> :<Womenclothing />}

        
        
        
        </>
    )
}