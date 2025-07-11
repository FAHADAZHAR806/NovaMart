"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Items } from "@/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Shop from "../shop/page";

export default function HomePage() {
  const product: Items[] = [
    {
      id: 1,
      offer: "Limited Time Offer 30%off",
      descrip: " Experience Pure Sound- Your Perfect Headphones Awaits!",
      btntext: "BuyNow",
      btntext1: "FindMore",
      image: "/images/WirlessHeadphones.png",
    },
    {
      id: 2,
      offer: "Limited Time Offer 30%off",
      descrip: " Its Time to Grab your Chance stop waiting  !",
      btntext: "BuyNow",
      btntext1: "FindMore",
      image: "/images/SmartWatch.webp",
    },
    {
      id: 3,
      offer: "Limited Time Offer 50%off",
      descrip: " Power meets Elegance Apply your macbook here its for You!",
      btntext: "BuyNow",
      btntext1: "FindMore",
      image: "/images/laptop.png",
    },
  ];

  return (
    <>
      <div className="w-full px-4 py-10">
        <div className="max-w-[1000px] w-full m-auto">
          <Swiper
            modules={[Navigation, Pagination, A11y, Scrollbar, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={true}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} inline-block w-4 h-2 bg-gray-400 rounded-full mx-1"></span>`;
              },
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {product.map((item, index) => (
              <SwiperSlide key={index} className="relative">
                <div className="flex flex-col-reverse md:flex-row justify-between bg-emerald-100 rounded-3xl p-6 md:p-10 items-center w-full max-w-full">
                  {/* Left Text */}
                  <div className="flex flex-col gap-6 md:gap-10 flex-1 items-center  md:items-start">
                    <h3 className="text-orange-400 font-semibold">
                      {item.offer}
                    </h3>
                    <h1 className="font-bold text-2xl text-center md:text-start md:text-4xl  ">
                      {item.descrip}
                    </h1>
                    <div className="flex justify-center  gap-4 flex-wrap  ">
                      <Button className="py-3 px-6 md:py-6 md:px-10 rounded-3xl bg-orange-500 text-white">
                        {item.btntext}
                      </Button>
                      <Button className="py-3 px-6 md:py-6 md:px-10 bg-none text-white rounded-3xl border border-white">
                        {item.btntext1}
                      </Button>
                    </div>
                  </div>
                  {/* Right Image */}
                  <div className="relative flex-1 flex justify-center mb-6 md:mb-0">
                    <Image
                      src={item.image}
                      alt="image"
                      width={300}
                      height={300}
                      className="w-[200px] md:w-[300px] lg:w-[400px] h-auto object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation & Pagination Controls */}
          <div className="flex justify-between items-center mt-0 gap-4 flex-wrap">
            <div className="swiper-pagination"></div>
            <div className="flex gap-2">
              <Button className="swiper-button-prev bg-primary text-white p-2 md:p-3 rounded-md hover:bg-pink-800">
                <ChevronLeft />
              </Button>
              <Button className="swiper-button-next bg-primary text-white p-2 md:p-3 rounded-md hover:bg-pink-800">
                <ChevronRight />
              </Button>
            </div>
          </div>
        </div>

        {/* Shop Section */}
        <div className="w-full max-w-[1400px] m-auto py-10 px-4">
          <Shop />
        </div>
      </div>
    </>
  );
}
