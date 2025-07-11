"use client";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cartcontext";

import Image from "next/image";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();
  return (
    <div className="border rounded-lg shadow-sm overflow-hidden bg-white py-4  hover:scale-105 transition-transform duration-100">
      <div className="relative w-50 h-40 ">
        <Image
          src={product.image}
          alt={product.title}
          layout="fill"
          className="object-contain"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <div className="flex ">
          <p>{product.rating}</p>
          <p>{product.star}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-700">${product.price.toFixed(2)}</p>

          <Button
            className=""
            variant="outline"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
