import { Button } from "@/components/ui/button";
export default function HomePage() {
  return (
    <>
      <div className="flex justify-between  bg-emerald-100 rounded-4xl p-20 w-7xl m-auto">
        <div className=" flex flex-col gap-4">
          <h3 className="text-orange-400 inline font-semibold">
            Limited Time Offer 30%off
          </h3>
          <h1 className="font-bold text-5xl  bg-amber-300 w-110">
            Experience Pure Sound- Your Perfect Headphones Awaits!
          </h1>
          <div className=" flex justify-between">
            <Button>BuyNow</Button>
            <Button>Find More</Button>
          </div>
        </div>
      </div>
    </>
  );
}
