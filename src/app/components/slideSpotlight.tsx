"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Pagination, Navigation } from "swiper/modules";

// Danh sách sản phẩm
const products = [
  { image: "/images/giaynam (1).png", name: "Nike Air Sport" },
  { image: "/images/giaynam (2).png", name: "Nike White Sneaker" },
  { image: "/images/giaynam (3).png", name: "Nike Running Pro" },
  { image: "/images/giaynam (4).png", name: "Nike Casual Flex" },
];

export default function SlideSpotlight() {
  const [, setSwiperRef] = useState<SwiperCore | null>(null);

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={10}
        pagination={{ type: "fraction" }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper select-none"
        initialSlide={0}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 2 },
          930: { slidesPerView: 3 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} className="relative">
            <img src={product.image} alt={product.name} className="w-full h-auto" />
            <p className="textSpotlight">
              {product.name}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
