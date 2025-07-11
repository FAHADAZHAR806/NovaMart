import ProductCard from "@/app/components/ProductCard";
import { products } from "@/lib/product";

export default function Shop() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold py-10 text-center">Popular Products</h2>
      <div className="flex md:flex-row justify-center gap-6 flex-wrap py-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
