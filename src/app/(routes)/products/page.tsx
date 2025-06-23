import ProductCard from "@/app/components/ProductCard";
import { products } from "@/lib/product";

export default function ProductsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Popular Products</h2>
      <div className="flex md:flex-row justify-around gap-6 flex-wrap ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
