import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";
import { useCart } from "../Context/Addtocart";

export const Homesection = () => {

  const {cart, addToCart, increment, decrement, removeFromCart}=useCart();
  return (
    <>
    <div className="mt-[60px]"> 
  <div className="h-[30px] bg-red-400 w-full flex items-center text-white text-sm">
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      speed={2000}
      breakpoints={{
        0: { slidesPerView: 1 },     
      }}
      className="w-full"
    >
      <SwiperSlide>
        <h1 className="text-center whitespace-nowrap">🔥 BIG SALE – Up to 50% OFF!</h1>
      </SwiperSlide>
      <SwiperSlide>
        <h1 className="text-center whitespace-nowrap">🚚 Free Shipping on Orders Over $99</h1>
      </SwiperSlide>
      <SwiperSlide>
        <h1 className="text-center whitespace-nowrap">✨ New Arrivals Just Dropped!</h1>
      </SwiperSlide>
    </Swiper>
  </div>
</div>
<div className="
  h-[400px]  
  
  sm:h-[600px]   
  w-full 
  bg-[#D3C4B5] 
  flex items-center justify-between 
  px-[10px] 
  overflow-x-hidden 
  relative
">
 

<button 
  className="
    p-[8px] 
    absolute bottom-[10%] left-[25%] 
    bg-[#B44D00] text-white 
    rounded-[5px] cursor-pointer 
    sm:absolute sm:bottom-[20%]
    sm:left-[45%]
  "
>
  Shop Now
</button>

<h2 className="absolute top-[8px] left-[55%] text-[22px] sm:text-2xl sm:left-[35%] leading-[22px]">"Upgrade Your Wardrobe- <span className="text-[#B44D00]">30% off on Everything*  "</span></h2>


<div className="flex items-center justify-center h-[300px] mb-[100px] sm:h-[600px] sm:mb-0 overflow-hidden sm:overflow-visible
w-[500px] rounded-full bg-[#B89573] ml-[-20px]">

<img 
  src="/modelFemale.png" 
  className="w-[100%] h-[100%] transform scale-x-[-1]" 
/>
  
</div>


<div className="flex items-center justify-center h-[300px] mt-[100px] sm:h-[600px] sm:mt-0
w-[520px] rounded-full mr-[-40px]">

<img 
  src="/modelmale.png" 
  className="w-[100%] h-[100%] " 
/>
  
</div>

</div>

<div> 
  <div className="h-[30px] bg-red-400 w-full flex items-center text-white text-sm">
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      speed={2000}
      breakpoints={{
        0: { slidesPerView: 1 },     
      }}
      className="w-full"
    >
      <SwiperSlide>
        <h1 className="text-center whitespace-nowrap">🔥 BIG SALE – Up to 50% OFF!</h1>
      </SwiperSlide>
      <SwiperSlide>
        <h1 className="text-center whitespace-nowrap">🚚 Free Shipping on Orders Over $99</h1>
      </SwiperSlide>
      <SwiperSlide>
        <h1 className="text-center whitespace-nowrap">✨ New Arrivals Just Dropped!</h1>
      </SwiperSlide>
    </Swiper>
  </div>
</div>



</>

  );
};
