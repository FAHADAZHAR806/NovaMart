import React from "react";
import { Button } from "@/components/ui/button";

export default function Features() {
  return (
    <>
      <div className="w-full max-w-[1000px] m-auto">
        <div className="flex justify-between gap-20">
          <div className=" flex-col  justify-items-start pt-80  p-6 bg-[url('/images/person-laptop.jpg')] bg-cover bg-center h-96 w-full ">
            <h1>unpaallel Sound</h1>
            <p>Pixel Perfect Lorem ipsum dolor sit amet.</p>
            <Button variant="outline" className="bg-amber-400">
              Buy Now
            </Button>
          </div>
          <div className="bg-amber-300"></div>
          <div className="bg-amber-700"></div>
        </div>
      </div>
    </>
  );
}
