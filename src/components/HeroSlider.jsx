import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { heroSliderData } from '../data/sliderDataa';

const HeroSlider = () => {
  
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
       className="w-full h-213"
      >
        {heroSliderData.map((slide)=>(
            <SwiperSlide key={slide.id}>
                <div className="flex items-center justify-center lg:justify-start w-full h-full bg-cover bg-position-[center_50%] bg-no-repeat "
                    style={{ 
                    backgroundImage: slide.id === 2 
                      ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${slide.image})` 
                      : `url(${slide.image})` 
                  }}
                >
                  <div className="container mx-auto px-10 lg:px-0">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left text-white max-w-150 gap-8.5 lg:pl-52 mx-auto lg:mx-0 ">
                     <h5 className="font-bold text-base/6 tracking-[0.1px] uppercase">
                        {slide.subtitle}
                     </h5>
                     <h1 className="text-4xl lg:text-6xl/20 font-bold tracking-[0.2px] uppercase whitespace-nowrap">
                        {slide.title}
                     </h1>
                     <p className="text-lg lg:text-xl max-w-94">
                        {slide.description}
                     </p>
                     <button className="bg-success-color hover:bg-green-600 text-white font-bold py-4 px-10 rounded text-2xl transition-colors cursor-pointer">
                        {slide.buttonText}
                     </button>
                    </div>
                  </div>
                </div>

            </SwiperSlide>
                ))}
      </Swiper>
    </div>
     
  );
};

export default HeroSlider;