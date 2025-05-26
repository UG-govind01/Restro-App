"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const SwiperComponent = () => {
  return (
    <div className="w-full flex justify-center items-center py-12 bg-gray-100">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        scrollbar={{ draggable: true }}
        className="w-[90%] lg:w-[80%] px-4"
        modules={[Pagination, Navigation, Autoplay]}
      >
        {["image10.jpg", "image6.jpg", "image7.jpg", "image4.jpg", "image5.jpg","image8.jpg","image1.jpg"].map(
          (img, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <Image
                  src={`/image/${img}`}
                  alt={`Slide ${index + 1}`}
                  width={500}
                  height={500}
                  className="w-full h-64 object-cover"
                  layout="responsive"
                />
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
