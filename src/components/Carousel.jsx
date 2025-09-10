import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1banner from "../assets/img/banner1.gif";
import img2banner from "../assets/img/banner2.jpg";
import img3banner from "../assets/img/banner3.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w:400PX,"
      >
        <SwiperSlide className=" border-2 border-red-400 ">
          <img className=" w-full h-full" src={img1banner} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full h-full" src={img2banner} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className="w-full h-full" src={img3banner} alt="" />
        </SwiperSlide>
       
      </Swiper>
    </>                        

