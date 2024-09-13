"use client";
import { useState } from "react";
import "./style.css";
export default function NovelsToMoviesAndSeries() {
  const [IsLoading, setLoading] = useState(false);
  return (
    <section id="novelsToMoviesAndSeries" className="py-20">
      <div className="container mx-auto px-2 ">
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-5 items-center justify-items-center">
          {/* section header */}
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
          <div className="w-full">
            <iframe
              src="https://drive.google.com/file/d/1ING9sfte25n5Pdw0mQ5Saq__IyoFNFTZ/preview"
              width="100%"
              height="400"
              allow="autoplay"
              className="bg-[#fff]"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
