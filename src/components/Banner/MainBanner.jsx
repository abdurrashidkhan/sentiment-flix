"use client";
// Import Swiper React components
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
//
import image1 from "../../images/1.jpeg";
import image2 from "../../images/2.jpeg";
import image3 from "../../images/3.jpeg";
import image4 from "../../images/4.jpeg";
import image5 from "../../images/5.jpg";
import image6 from "../../images/6.jpg";

import "./style.css";

// import required modules
import Image from "next/image";
export default function MainBanner() {
  const bannerContent = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
    { image: image5 },
    { image: image6 },
  ];
  // console.log(bannerContent);
  return (
    <>
      <div className="container mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          className="mySwiper"
        >
          {bannerContent.map((b, index) => (
            <SwiperSlide key={index} className="">
              <Image
                style={{ objectFit: "fill" }}
                src={b?.image}
                alt="banner image load "
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
