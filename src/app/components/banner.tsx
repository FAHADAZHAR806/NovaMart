import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    <>
      <div className="max-w-[1200px] m-auto bg-gray-200 rounded-4xl my-30">
        <div className="flex  px-10 gap-10 items-center relative  flex-wrap lg:flex-nowrap">
          <Image
            src="/images/boxing.png"
            alt="boxing"
            width={300}
            height={300}
          />
          <div className="flex flex-col  gap-4 items-center text-center">
            <h1 className="font-bold text-4xl ">
              Level Up Your Gaming Experience
            </h1>
            <h3>
              From immersive sound to precise controls—everything you need to
              win
            </h3>
            <Button variant="default" className="px-10 py-6">
              Buy Now
            </Button>
          </div>
          <Image
            src="/images/controller.png"
            alt="Controller"
            width={400}
            height={400}
            className="relative  left-10"
          />
        </div>
      </div>
    </>
  );
}
