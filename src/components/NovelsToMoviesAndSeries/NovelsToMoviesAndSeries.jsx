"use client";
import Image from "next/image";
import { useState } from "react";
import "./style.css";
export default function NovelsToMoviesAndSeries() {
  const [isModalOpen, setModalOpen] = useState(false); // Handle modal open/close
  console.log(isModalOpen);
  return (
    <section className="">
      <div
        className="container mx-auto px-2 py-20"
        id="novelsToMoviesAndSeries"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center justify-items-center">
          {/* Section header */}
          <div className="">
            <h1 className="text-lg font-semibold text-[#661113]">
              Novels To Movies And Series.
            </h1>
            <h2 className="text-4xl pt-5 pb-3 font-semibold capitalize">
              Turning your favorite romance novels into movies and series.
            </h2>
            <p className="text-base font-semibold">
              Driven by the series by K. Bromberg.
            </p>
          </div>
          <div className="">
            {/* Modal video component */}
            <div className="relative   antialiased sm:pt-0 pt-5">
              <div className="relative  flex flex-col justify-center overflow-hidden">
                <div className="w-full max-w-6xl mx-auto px-2">
                  <div className="flex justify-center">
                    {/* Video thumbnail */}
                    <button
                      className="relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group"
                      onClick={() => setModalOpen(true)} // Open modal
                      aria-label="Watch the video"
                    >
                      <Image
                        className="rounded-3xl shadow-2xl transition-shadow duration-300 ease-in-out"
                        src="https://cruip-tutorials.vercel.app/modal-video/modal-video-thumb.jpg"
                        width="768"
                        height="432"
                        alt="Modal video thumbnail"
                      />
                      {/* Play icon */}
                      <svg
                        className="absolute pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        width="72"
                        height="72"
                      >
                        <circle
                          className="fill-white"
                          cx="36"
                          cy="36"
                          r="36"
                          fillOpacity=".8"
                        />
                        <path
                          className="fill-indigo-500 drop-shadow-2xl"
                          d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z"
                        />
                      </svg>
                    </button>

                    {/* Modal backdrop */}
                    {isModalOpen && (
                      <div
                        className="fixed inset-0 z-[99999] bg-black bg-opacity-50 transition-opacity ease-in-out duration-500"
                        aria-hidden="true"
                        onClick={() => setModalOpen(false)} // Close modal on backdrop click
                      ></div>
                    )}

                    {/* Modal dialog */}
                    {isModalOpen && (
                      <div
                        id="modal"
                        className="fixed inset-0 z-[99999] flex px-4 md:px-6 py-6 ease-in-out duration-500"
                        role="dialog"
                        aria-modal="true"
                        onClick={() => setModalOpen(false)}
                      >
                        <div className="max-w-5xl mx-auto h-full flex items-center">
                          <div className="w-full max-h-full rounded-3xl shadow-2xl aspect-video bg-black overflow-hidden">
                            <video
                              width="1920"
                              height="1080"
                              loop
                              controls
                              autoPlay
                            >
                              <source
                                src="https://cruip-tutorials.vercel.app/modal-video/video.mp4"
                                type="video/mp4"
                              />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Banner with links */}
            </div>
            {/* End Modal video component */}
          </div>
        </div>
      </div>
    </section>
  );
}
