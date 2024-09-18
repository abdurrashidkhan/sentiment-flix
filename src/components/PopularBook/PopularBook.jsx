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
import Link from "next/link";
import image1 from "../../images/1.jpeg";
import image2 from "../../images/2.jpeg";
import image3 from "../../images/3.jpeg";
import image4 from "../../images/4.jpeg";
import image5 from "../../images/5.jpg";
import image6 from "../../images/6.jpg";

export default function PopularBooks() {
  const bannerContent = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
    { image: image5 },
    { image: image6 },
  ];
  return (
    <main className="">
      <div className="container mx-auto py-10 sm:py-20 px-2" id="PopularBook">
        <div className="text-center pb-10">
          <h1 className="text-3xl sm:text-4xl font-medium ">
            What We&apos;re Making.
          </h1>
          <p className="text-lg pt-2 sm:pt-1">
            {" "}
            Want to visit us on set? Become a Signature Member.
          </p>
        </div>

        <div className="">
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 6,
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
              <SwiperSlide
                key={index}
                className="w-full h-[200px] sm:h-[230px] lg:h-[300px] shadow-2xl"
              >
                <Image
                  // style={{ objectFit: "fill" }}
                  src={b?.image}
                  style={{ objectFit: "fill" }}
                  alt="banner image load "
                  className="w-full h-[200px] sm:h-[230px] lg:h-[300px] rounded shadow-2xl mx-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="text-center">
          <div className=" mt-20">
            <Link
              href="/login"
              className="uppercase bg-[#c40202] hover:bg-[#a00101]  py-3 px-8 text-xl rounded shadow-2xl text-[#fff] hover:tracking-[2px] duration-700 ease-in-out"
            >
              sing up
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
