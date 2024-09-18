"use client";
// Import Swiper React components
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { FaUser } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "./style.css";

// import required modules

export default function ClientReview() {
  const bannerContent = [
    {
      uaseName: "Rashid khan",
      review: "Want to visit us on set? Become a Signature Member.",
    },
    {
      uaseName: "Roni khan",
      review: "Want to visit us on set? Become a Signature Member.",
    },
    {
      uaseName: "Rabbi khan",
      review: "Want to visit us on set? Become a Signature Member.",
    },
    {
      uaseName: "Sumit khan",
      review: "Want to visit us on set? Become a Signature Member.",
    },
    {
      uaseName: "Roki khan",
      review: "Want to visit us on set? Become a Signature Member.",
    },
    {
      uaseName: "Nirob khan",
      review: "Want to visit us on set? Become a Signature Member.",
    },
  ];
  return (
    <section className="" id="ClientReview">
      <div className="container mx-auto py-10 sm:py-20 px-2">
        <div className="text-center pb-10">
          <h1 className="text-3xl sm:text-4xl font-medium ">Testimonials</h1>
          <p className="text-lg pt-2 sm:pt-1">
            Want to visit us on set? Become a Signature Member.
          </p>
        </div>

        <div className="">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
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
            className="mySwiper "
          >
            {bannerContent.map((b, index) => (
              <SwiperSlide
                key={index}
                className=" shadow-2xl py-8 mb-14 rounded bg-[#000]"
              >
                <div className="">
                  <div className="py-5">
                    <p className="">{b?.review}</p>
                  </div>
                  <div className="flex items-center gap-2 justify-center justify-items-center ">
                    <div className="border-[#000] border-[1px] rounded-full p-4">
                      <FaUser className="text-4xl" />
                    </div>
                    <div className="text-start">
                      <h1 className="font-semibold capitalize font-sans">
                        {b?.uaseName}
                      </h1>
                      <p className="font-medium">Location : Unknown</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
