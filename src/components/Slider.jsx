import { mainSliderData } from "../data/sliderDataa";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  
  return (
    <div 
      className="w-full [&_.swiper-pagination-bullet]:w-15.5! [&_.swiper-pagination-bullet]:h-2.5! [&_.swiper-pagination-bullet]:rounded-none! [&_.swiper-pagination-bullet]:bg-white! [&_.swiper-pagination-bullet]:opacity-50! [&_.swiper-pagination-bullet-active]:opacity-100! [&_.swiper-pagination-bullet]:mx-0!"
      style={{
        "--swiper-navigation-color": "#ffffff",
        "--swiper-pagination-color": "#ffffff",
      }}
    >
      <Swiper 
       modules={[Navigation, Pagination, Autoplay]}
       spaceBetween={0}
       slidesPerView={1}
       navigation
       pagination={{clickable: true}}
       autoplay={{delay:5000, disableOnInteraction: false}}
       className="w-full h-225 lg:h-177"
      >
        {mainSliderData.map((slide)=>(
            <SwiperSlide key={slide.id}>
                
                <div className="relative flex flex-col lg:flex-row items-center justify-start lg:justify-start w-full h-full overflow-hidden pt-20 lg:pt-0"
                    style={{ 
                     backgroundColor: slide.id === 1 ? "var(--color-money-color)" : "var(--color-primary-text)"
                  }}
                >
                  
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="absolute bottom-0 lg:bottom-[-10%] left-0 lg:left-auto right-0 lg:right-[5%] w-full lg:w-auto h-[45%] lg:h-[95%] object-cover object-top lg:object-contain lg:object-bottom z-0 translate-x-0 lg:-translate-x-18.5"
                  />

                  <div className="container mt-2 mx-auto px-10 lg:px-0 relative z-10">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left text-white max-w-140 gap-8.5 lg:pl-52 mx-auto lg:mx-0">
                     <h5 className="font-bold text-base/6 tracking-[0.1px] uppercase">
                        {slide.subtitle}
                     </h5>
                     <h1 className="text-4xl lg:text-6xl/20 font-bold tracking-[0.2px]">
                         <span className="max-w-62.5 lg:max-w-120 lg:whitespace-nowrap">{slide.title}</span>
                         {slide.title2 && (
                         <span className="block">{slide.title2}</span>
                           )}
                     </h1>
                     <p className="text-base lg:text-sm/5 max-w-62.5 lg:max-w-88">
                        {slide.description}
                     </p>
                     <div className="flex flex-col lg:flex-row item-centers gap-4 lg:gap-8.5">
                        <span className="text-xl lg:text-2xl/8 font-bold tracking-[0.2px] translate-y-4">
                        {slide.price}
                        </span>
                     <button className="bg-success-color hover:bg-green-600 text-white font-bold py-3 px-8 lg:py-4 lg:px-10 rounded text-2xl transition-colors whitespace-nowrap cursor-pointer mt-4">
                        {slide.buttonText}
                     </button>
                     </div>
                    </div>
                  </div>

                </div>

            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;