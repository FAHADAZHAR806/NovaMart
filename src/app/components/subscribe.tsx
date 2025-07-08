import React from "react";

export default function Subscribe() {
  return (
    <>
      <div className="flex flex-col gap-4 items-center text-center">
        <h1 className="font-bold text-3xl">Subscribe now & get 20% off</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, est.
        </p>
        <div className="flex  items-center ">
          <div className="py-4 px-4 w-150 rounded-l-lg border-y-1 border-l-1 border-gray-500 text-start ">
            Enter Your Email
          </div>
          <p className="bg-orange-400 py-4 w-40 rounded-r-lg  border-1 border-orange-400">
            Subscribe
          </p>
        </div>
      </div>
    </>
  );
}
