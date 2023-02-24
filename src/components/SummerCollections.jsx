import React from 'react'
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import data from '../constants/data'

SwiperCore.use([Navigation, Pagination, Autoplay]);
const SummerCollections = () => {
  const {summer} = data;
  return (
<div className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10">
          Summer Collection
        </h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000 }}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {summer.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-100 rounded-md overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out flex flex-col justify-between">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900 opacity-70 transition duration-300 ease-in-out"></div>
                </div>
                <div className="p-4 flex-grow flex flex-col justify-center">
                  <h2 className="text-lg md:text-xl font-semibold mb-2 text-center">
                    {item.name}
                  </h2>
                  <h3 className="text-gray-600 font-medium mb-4 text-center">
                    {item.offer}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>

  )
}

export default SummerCollections