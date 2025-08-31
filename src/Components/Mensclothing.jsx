
import { useProducts } from "../Context/ProductContext"; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { NavLink } from "react-router-dom";

import { Navigation, Pagination } from "swiper/modules";
import { Menscategory } from "./Menscatgory";

export const Mensclothing = () => {
  const { products } = useProducts();

  const newArrivals = products.filter(
  (item) => item.newArrival && item.category === "men"
);
  return (
    <>
    <div className="h-[500px] w-full px-0 sm:px-[20px]">
      <h2 className="text-xl font-bold mb-4">🆕 New Arrivals</h2>
        <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={7}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 2 }, 
          640: { slidesPerView: 3 }, 
          1024: { slidesPerView: 4}, 
        }}
      >

{newArrivals.map((item)=>(
      <SwiperSlide key={item.id}>
    <NavLink to={`/products/${item.id}`}>
  <div className="h-[300px] w-[220px] sm:h-[400px] sm:w-[300px] relative rounded-[5px] overflow-hidden group cursor-pointer">
    <img
      src={item.images[0]}
      alt="image"
      className="w-full h-full border-amber-400 rounded-[5px] object-cover transition-transform duration-500 group-hover:scale-110"
    />

    <div className="absolute bottom-0 left-0 w-full h-[35%] bg-gradient-to-t from-black/50 to-transparent"></div>

    <div className="h-[40px] w-[40px] rounded-full bg-red-600 text-white font-bold 
                    absolute top-0 right-0 flex flex-col items-center justify-center py-[2px]">
      <p className="text-[10px] text-center">{item.discount}</p>
      <p className="text-[10px] text-center">Off</p>
    </div>

    <h3 className="absolute bottom-[10%] left-1/2 -translate-x-1/2 text-white font-semibold">
      {item.name}
    </h3>
  </div>
</NavLink>


      </SwiperSlide>

))}


      </Swiper>
    </div>

    <Menscategory />
   </>
  );
};
