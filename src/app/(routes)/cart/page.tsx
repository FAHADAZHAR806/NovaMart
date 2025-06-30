"use client";
import { useCart } from "@/context/cartcontext";
import Image from "next/image";

export default function CartPage() {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce((sum, item) => {
    const quantity = item.quantity || 1; // Fallback if quantity is undefined
    return sum + item.price * quantity;
  }, 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => {
            const quantity = item.quantity || 1;
            const itemTotal = item.price * quantity;

            return (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="rounded"
                  />
                  <div>
                    <p>
                      <strong>Name:</strong> {item.title}
                    </p>
                    <p>
                      <strong>Price:</strong> Rs {item.price}
                    </p>
                    <p>
                      <strong>Quantity:</strong> {quantity}
                    </p>
                    <p>
                      <strong>Total:</strong> Rs {itemTotal}
                    </p>
                  </div>
                </div>
                <div className="text-right font-semibold text-green-700">
                  Rs {itemTotal.toFixed(2)}
                </div>
              </div>
            );
          })}

          <div className="text-right text-xl font-bold pt-4 border-t">
            <p>Grand Total: Rs {totalPrice.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
}
