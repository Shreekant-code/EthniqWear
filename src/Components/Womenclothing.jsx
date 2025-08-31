import { useProducts } from "../Context/ProductContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";
import { Womenscategory } from "./Womenscategory";
import { useTheme } from "../Context/Toggletheme"; 

export const Womenclothing = () => {
  const { products } = useProducts();
  const { theme } = useTheme(); // get current theme

  const newArrivals = products.filter(
    (item) => item.newArrival && item.category?.toLowerCase() === "women"
  );

  return (
    <>
      <div className="h-[500px] w-full px-0 sm:px-[20px]">
        <h2
          className={`text-xl font-bold mb-4 transition-colors duration-300 ${
            theme === "dark" ? "text-white" : "text-gray-800"
          }`}
        >
          🆕 New Arrivals
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            350: { slidesPerView: 2 },
            500: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {newArrivals.map((item) => (
            <SwiperSlide key={item.id}>
              <NavLink to={`/products/${item.id}`}>
                <div
                  className={`h-[300px] w-[180px] sm:h-[400px] sm:w-[300px] relative rounded-[5px] overflow-hidden group cursor-pointer transition-colors duration-300 ${
                    theme === "dark" ? "bg-gray-900" : "bg-white"
                  }`}
                >
                  <img
                    src={item.images}
                    alt={item.name}
                    className="w-full h-full border-amber-400 rounded-[5px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div
                    className={`absolute bottom-0 left-0 w-full h-[35%] transition-colors duration-300 ${
                      theme === "dark"
                        ? "bg-gradient-to-t from-black/70 to-transparent"
                        : "bg-gradient-to-t from-black/50 to-transparent"
                    }`}
                  ></div>

                  <div className="h-[40px] w-[40px] rounded-full bg-red-600 text-white font-bold 
                                  absolute top-0 right-0 flex flex-col items-center justify-center py-[2px]">
                    <p className="text-[10px] text-center">{item.discount}</p>
                    <p className="text-[10px] text-center">Off</p>
                  </div>

                  <h3 className="absolute bottom-[10%] left-1/2 -translate-x-1/2 font-semibold transition-colors duration-300"
                      style={{ color: "white" }}>
                    {item.name}
                  </h3>
                </div>
              </NavLink>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Womenscategory />
    </>
  );
};
