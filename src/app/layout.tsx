import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { CartProvider } from "@/context/cartcontext";

export const metadata = {
  title: "NovaMart",
  description: "Modern eCommerce App",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100  ">
        <CartProvider>
          {" "}
          {/* ✅ Wrap the entire app */}
          <Navbar />
          <main className="p-4 overflow-x-hidden">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
