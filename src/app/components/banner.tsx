import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    <>
      <div className="flex gap-2 px-10  items-center  relative  flex-wrap lg:flex-nowrap max-w-[1200px] m-auto bg-yellow-300 rounded-4xl my-30">
        <Image
          src="/images/boxing.png"
          alt="boxing"
          width={300}
          height={300}
          className="flex-1"
        />
        <div className="flex flex-col  gap-4 items-center text-center flex-1">
          <h1 className="font-bold text-4xl ">
            Level Up Your Gaming Experience
          </h1>
          <h3>
            From immersive sound to precise controls—everything you need to win
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
          className="flex-1 relative md:-top-4 md:left-10"
        />
      </div>
    </>
  );
}
