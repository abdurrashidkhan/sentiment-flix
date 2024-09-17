"use client";
// Import Swiper React components
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "./style.css";

// import required modules
import Image from "next/image";
import image1 from "../../images/1.jpeg";
import image2 from "../../images/2.jpeg";
import image3 from "../../images/3.jpeg";
import image4 from "../../images/4.jpeg";
import image5 from "../../images/5.jpg";
import image6 from "../../images/6.jpg";

export default function App() {
  const bannerContent = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
    { image: image5 },
    { image: image6 },
  ];
  return (
    <main className="pt-[60px]">
      <div className="container mx-auto " id="main_banner">
        <div className="sm:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
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
            // centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
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
                <div className="bg-gradient-to-t from-[#000] to-transparent text-[#fff] py-32 sm:py-52">
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
        <div className="hidden sm:block">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
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
            // centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
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
      </div>
    </main>
  );
}
