import Image from "next/image";
import imgUrl from "../../images/section_bg/Passionflix_Watch_Everywhere_Graphic.png";
export default function WatchEverywhere() {
  return (
    <section>
      <div className="">
        <div className="container mx-auto px-2 py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center justify-items-center gap-5">
            {/* fast  */}
            <div className="">
              <h1 className="text-4xl font-medium ">Watch Everywhere.</h1>
              <p className="pt-6">
                Enjoy PASSIONFLIX on your Smart TV, smartphone, tablet, or
                laptop. Plans start at $5.99 a month. Cancel anytime.
              </p>
            </div>
            {/* 2nd */}
            <div className="">
              <Image
                width={450}
                height={450}
                style={{ objectFit: "fill" }}
                src={imgUrl}
                alt="loading"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
