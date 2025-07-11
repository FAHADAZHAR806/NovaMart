import React from "react";
import { Button } from "@/components/ui/button";
import { Cards } from "@/types";

export default function Features() {
  const card: Cards[] = [
    {
      id: 1,
      bgimg: "/images/boy.png",
      btn: "Buy Now",
      heading1: "UnParallel Sound",
      heading2: "Pixel Perfect Lorem ipsum dolor sit amet.",
    },
    {
      id: 2,
      bgimg: "/images/dash.png",
      btn: "Buy Now",
      heading1: "UnParallel Sound",
      heading2: "Pixel Perfect Lorem ipsum dolor sit amet.",
    },
    {
      id: 3,
      bgimg: "/images/girl.png",
      btn: "Buy Now",
      heading1: "UnParallel Sound",
      heading2: "Pixel Perfect Lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <div className="w-full max-w-[1000px] mx-auto">
      <div className="flex flex-wrap justify-center gap-6">
        {card.map((item) => (
          <div
            key={item.id}
            className="relative bg-cover bg-center w-[300px] h-[450px] p-4 text-white font-semibold rounded-lg shadow-lg  hover:scale-105 transition-transform duration-100 "
            style={{ backgroundImage: `url(${item.bgimg})` }}
          >
            <div className="absolute bottom-4 right-4 flex flex-col gap-2  p-4 rounded-md hover:-translate-y-1 ">
              <h1 className="text-xl font-bold">{item.heading1}</h1>
              <p className="text-sm">{item.heading2}</p>
              <Button
                variant="outline"
                className="bg-amber-400 text-black w-fit"
              >
                {item.btn}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
