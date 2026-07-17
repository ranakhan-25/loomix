"use client";

import type { Product } from "@/type/product";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded shadow-sm border dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">

      <div className="relative h-64 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />
     
        
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5">
        <h3 className="font-bold text-xl dark:text-white truncate group-hover:text-[#00d8d6] transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
          {product.category}
        </p>

        <div className="flex justify-between items-center mt-4">
          <p className="text-[#00d8d6] font-bold text-2xl">${product.price}</p>
          <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-500 px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            ★ {product.rating}
          </span>
        </div>

        <Link
          href={`/products/${product.id}`}
          className={`block w-full mt-5 py-3 rounded-xl text-center font-bold transition-all active:scale-95 ${
            product.inStock
              ? "bg-[#00d8d6] hover:bg-[#04bebb] hover:text-white shadow-lg cursor-pointer"
              : "bg-gray-200 dark:bg-gray-700 text-gray-400 pointer-events-none cursor-not-allowed"
          }`}
        >
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </Link>
      </div>
    </div>
  );
}
