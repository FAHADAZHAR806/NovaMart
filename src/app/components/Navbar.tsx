"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // optional: you can use from heroicons instead

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <Link href="/">NovaMart</Link>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link href="/home">
            <Button variant="outline">Home</Button>
          </Link>
          <Link href="/shop">
            <Button variant="outline">Shop</Button>
          </Link>
          <Link href="/cart">
            <Button>Cart</Button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link href="/home" onClick={() => setIsOpen(false)}>
            <Button variant="outline" className="w-full">
              Home
            </Button>
          </Link>
          <Link href="/products" onClick={() => setIsOpen(false)}>
            <Button variant="outline" className="w-full">
              Shop
            </Button>
          </Link>
          <Link href="/cart" onClick={() => setIsOpen(false)}>
            <Button className="w-full">Cart</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
