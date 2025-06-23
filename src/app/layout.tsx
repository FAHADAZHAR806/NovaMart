import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "./components/Navbar";
import { CartProvider } from "@/context/cartcontext"; // ✅ import context

export const metadata = {
  title: "NovaMart",
  description: "Modern eCommerce App",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <CartProvider>
          {" "}
          {/* ✅ Wrap the entire app */}
          <Navbar />
          <main className="p-4">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
