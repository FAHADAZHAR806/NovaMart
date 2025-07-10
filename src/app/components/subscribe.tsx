import React from "react";

export default function Subscribe() {
  return (
    <div className="flex flex-col gap-4 items-center text-center py-10 px-4 bg-gray-100 rounded-2xl max-w-[1600px] mx-auto">
      <h1 className="font-bold text-2xl sm:text-3xl">
        Subscribe now & get 20% off
      </h1>
      <p className="text-sm sm:text-base text-gray-600 max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, est.
      </p>

      {/* Email input section */}
      <div className="w-full max-w-2xl">
        <div className="flex flex-col sm:flex-row items-stretch">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 py-3 px-4 border border-gray-400 rounded-t-lg sm:rounded-t-none sm:rounded-l-lg focus:outline-none"
          />
          <button className="bg-orange-500 text-white px-6 py-3 w-full sm:w-auto rounded-b-lg sm:rounded-b-none sm:rounded-r-lg hover:bg-orange-600 transition-all duration-200">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
