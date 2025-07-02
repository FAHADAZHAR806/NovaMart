import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Items } from "@/types";

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
      descrip: " Experience Pure Sound- Your Perfect Headphones Awaits!",
      btntext: "BuyNow",
      btntext1: "FindMore",
      image: "/images/SmartWatch.webp",
    },
    {
      id: 3,
      offer: "Limited Time Offer 30%off",
      descrip: " Experience Pure Sound- Your Perfect Headphones Awaits!",
      btntext: "BuyNow",
      btntext1: "FindMore",
      image: "/images/laptop.png",
    },
  ];

  return (
    <>
      <div className="flex justify-between  bg-emerald-100 rounded-4xl p-16 w-7xl m-auto">
        <div className=" flex flex-col gap-10 flex-1">
          <h3 className="text-orange-400 inline font-semibold">
            Limited Time Offer 30%off
          </h3>
          <h1 className="font-bold text-[50px]   ">
            Experience Pure Sound- Your Perfect Headphones Awaits!
          </h1>
          <div className=" flex justify-start gap-4">
            <Button
              variant="outline"
              className="py-6 px-10 rounded-3xl bg-orange-500 text-white"
            >
              BuyNow
            </Button>
            <Button
              variant="default"
              className=" py-6 px-10 bg-none text-white rounded-3xl "
            >
              Find More
            </Button>
          </div>
        </div>
        <div className="relative flex-1 ">
          <Image
            src="/images/laptop.png"
            alt="image"
            width={600}
            height={600}
            className=""
          />
        </div>
      </div>
    </>
  );
}
