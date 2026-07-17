"use client";

import { useEffect, useState } from "react";
import FeaturedProducts from "@/components/home/Features";
import { Product } from "@/type/product";
import Link from "next/link";

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/product.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load products");
        }
        return res.json();
      })
      .then((data: Product[]) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen dark:text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#00d8d6]"></div>
        <span className="ml-4 text-xl">Loading Collections...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-500">
        <p>Something went wrong: {error}</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <section className="pt-16 px-6 max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
     
        <div>
          <h3 className="text-lg font-bold text-[#00d8d6] uppercase tracking-widest mb-2 border-l-2">
            New Collections
          </h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Premium quality fashion for your everyday style.
          </p>
        </div>

  
        <div className="shrink-0">
          <Link
            href="/products"
            className="inline-block px-8 py-2 bg-[#00d8d6] text-white font-bold rounded-full hover:bg-[#00a8a6] transition-all duration-300 shadow-lg shadow-[#00d8d6]/30"
          >
            All Products
          </Link>
        </div>
      </section>

      <FeaturedProducts products={products} />
    </main>
  );
}
