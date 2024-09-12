"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

//
import image1 from "../../images/1.jpeg";
import image2 from "../../images/2.jpeg";
import image3 from "../../images/3.jpeg";
import image4 from "../../images/4.jpeg";
import image5 from "../../images/5.webp";
import image6 from "../../images/6.webp";

import Image from "next/image";
import "./style.css";

// import required modules
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
      <div className="container mx-auto ">
        {/* sm devices */}
        <div className="">
          <Swiper
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            className="mySwiper relative"
          >
            {bannerContent.map((b, index) => (
              <SwiperSlide key={index} className="">
                <Image
                  // style={{ objectFit: "fill" }}
                  src={b?.image}
                  alt="banner image load "
                  className="w-full h-auto mx-auto"
                />
              </SwiperSlide>
            ))}
            <div className="">
              <div className="banner_content_center text-center shadow-2xl">
                <div className="bg-gradient-to-t from-[#000] to-transparent text-[#fff] py-28 sm:py-48">
                  <div className="">
                    <h1 className="text-[35px] sm:text-[42px]">
                      The Home of Romance
                    </h1>
                    {/* <p className="text-[16px]">Enter your email to get started.</p> */}
                  </div>
                  <div className="py-5 flex items-center  justify-center">
                    <input
                      type="email"
                      className="py-2 px-2  rounded-l focus:outline-none text-[#000] bg-[#eeeeee]"
                      placeholder="Enter your Email"
                    />
                    <button className="bg-[#cf2626] hover:bg-[#af0101] py-2 px-4  rounded-r duration-500 ease-in-out">
                      Get Started
                    </button>
                  </div>
                  <div className="">
                    <p>Watch on any device. Cancel at any time.</p>
                  </div>
                </div>
              </div>
            </div>
          </Swiper>
        </div>
        {/* large */}
      </div>
    </>
  );
}
