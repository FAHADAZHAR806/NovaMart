import React from "react";

export default function Footer() {
  return (
    <footer className="bg-amber-600 text-white font-semibold">
      {/* Main Footer */}
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row gap-10 md:gap-20 mt-10 p-6 md:px-20 md:pt-20 md:pb-10">
        {/* Left Column */}
        <div className="flex flex-col gap-4 flex-1 text-center md:text-left">
          <h1 className="text-2xl font-bold">NovaMart</h1>
          <p className="text-sm leading-relaxed text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            natus iste voluptates similique veniam minus fugiat, assumenda
            magnam a at facere. Autem vel quis porro, commodi saepe aut sint
            officiis amet laudantium consequuntur aliquid ipsam maiores
            temporibus placeat atque at.
          </p>
        </div>

        {/* Center Column */}
        <div className="flex flex-1 justify-center">
          <ul className="flex flex-col items-center md:items-start gap-3 text-sm font-medium">
            <li className="text-2xl font-bold mb-1">Company</li>
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Contact Us</li>
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-3 flex-1 items-center md:items-center text-sm">
          <h1 className="text-2xl font-bold mb-1">Get in Touch</h1>
          <p>📞 +92 341 5742411</p>
          <p>✉️ fahakiyani28@gmail.com</p>
        </div>
      </div>

      {/* Divider */}
      <hr className="max-w-[1600px] mx-auto bg-white opacity-30 h-[1px] mt-10" />

      {/* Bottom Bar */}
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-center items-center gap-2 py-6 text-xs text-center px-4">
        <p>© 2025 NovaMart.</p>
        <p>All Rights Reserved. Crafted by NovaMart.dev</p>
      </div>
    </footer>
  );
}
