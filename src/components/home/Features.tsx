"use client";

import { useCart } from "@/context/CartContext";
import type { Product } from "@/type/product";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Eye } from "lucide-react";

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
        {products.slice(0, 6).map((product) => (
          <div 
            key={product.id} 
            className="group bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-2xl transition-all duration-300"
          >
   
            <div className="relative h-72 rounded-xl overflow-hidden mb-4">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  className="bg-white dark:bg-black p-3 rounded-full shadow-lg text-[#00d8d6]"
                >
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Info Section */}
            <div className="px-2">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1 truncate">
                {product.name}
              </h3>
              <div className="flex justify-between items-center mt-3">
                <span className="text-[#00d8d6] font-bold text-xl">${product.price}</span>
                <Link href={`/products/${product.id}`} className="p-2 border rounded-full hover:bg-[#00d8d6] hover:text-white transition">
                  <Eye className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}